import express from "express";

let router = express.Router();
import homeController from "../controllers/homeController.js";
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/update-crud', homeController.updateCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    return app.use('/', router);
}

module.exports = initWebRoutes;