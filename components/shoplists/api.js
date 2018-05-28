// const express = require('express');
// const ShopListsRouter = express.Router();
// const ShopListsService = require('./service')
const Utility = require('./../../services/utility');
const AppConstants = require('./../../settings/constants');

module.exports = (shoplisService) => {
    return {
        add,
        get,
        put,
        remove
    };

    function get(req, res, next) {
        //TODO: Premission key denied chek

        let shoplist = {};
        if (req.query.id) shoplist.id = +req.query.id;
        shoplisService.getShopLists(shoplist).then((shoplists) => {
            return res.send({
                message: 'success',
                shoplist_data: shoplists
            });
        }).catch((err) => {
            return res.send(({
                message: 'error',
                err_type: err,
                reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.ERROR_FINDING_SHOPLIST)
            }));
        });
    }

    function add(req, res, next) {
        //TODO: chek choplist name
        let shoplist = {
            list_name: req.body.name
        }

        shoplisService.insertShopLists(shoplist).then((shoplistData) => {
            return res.send({
                message: 'succses',
                shoplist_data: shoplistData
            });
        }).catch((err) => {
            return res.send({
                message: 'error',
                error_type: err,
                reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.ERROR_CREATION_SHOPLIST)
            });
        });
    }

    function put(req, res, next) {
        let id = +req.params.id;
        let shoplist = {};
        if (req.body.list_name) {
            shoplist.list_name = req.body.list_name;
        }

        shoplisService.updateShoplists(id, shoplist).then((shoplistdata) => {
            return res.send({
                message: 'succses',
                shoplist_data: shoplistdata
            });
        }).catch((err) => {
            return res.send({
                message: 'error',
                error_type: err,
                reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.SHOPLIST_UPDATE_ERROR)
            });
        });
    }

    function remove(req, res, next) {
        let id = {
            id: +req.params.id
        }
        shoplisService.deleteShopLists(id).then((shoplistData) => {
            return res.send({
                messade: 'success',
                shoplist_data: shoplistData
            });
        }).catch((err) => {
            return res.send({
                messafe: 'error',
                error_type: err,
                reason: Utility.GenerateErrorMessage(Utility.ErrorTypes.ERROR_IN_SHOPLIST_DELETING)
            });
        });
    }
};
//
// ShopListsRouter.get('/', (req, res) => {
//     if (!req.query.key) {
//         return res.send(Utility.GenerateErrorMessage(
//             Utility.ErrorTypes.PERMISSION_DENIED)
//         );
//     }
//     let shoplist = {};
//     if (req.query.id) {
//         shoplist._id = req.query.id
//     }
//     ShopListsService.getShopLists(shoplist).then(data => {
//         return res.send(data);
//     });
// });
//
// ShopListsRouter.post('/', (req, res) => {
//     let shoplist = {
//         list_name: req.body.list_name,
//     };
//
//     ShopListsService.insertShopLists(shoplist)
//         .then(data => {
//             return res.send(data);
//         }).catch(err => {
//         return res.send(err);
//     });
// });
//
// ShopListsRouter.put('/:id', (req, res) => {
//
//     let id = req.params.id;
//     let shoplist = {};
//     if (req.body.list_name) {
//         shoplist.list_name = req.body.list_name;
//     }
//
//     ShopListsService.updateShoplists(id, shoplist).then(data => {
//         return res.send(data);
//     }).catch(err => {
//         res.send(err)
//     });
//
// });
//
// ShopListsRouter.delete('/:id', (req, res) => {
//     let id = {
//         _id: req.params.id
//     };
//     ShopListsService.deleteShopLists(id).then(data => {
//         if (!data) {
//             return res.send(Utility.GenerateErrorMessage(
//                 Utility.ErrorTypes.ERROR_IN_SHOPLIST_DELETING));
//         }
//         return res.send(data);
//     }).catch(err => {
//         res.send(err);
//     });
// })
//
// module.exports = ShopListsRouter;
