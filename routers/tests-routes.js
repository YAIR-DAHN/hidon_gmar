import express from 'express';
import testsController from '../controllers/tests-controler.js';
// import adminAuth from '../middlewares/adminAuth.js';

const router = express.Router();

export default class TestsRouter {
    constructor() {
        router.post('/creat', testsController.create);
        router.post('/addQuest', testsController.addQuest);
        router.get('/Q/', testsController.getAll);
        router.get('/Q/:id', testsController.getById);
        router.put('/Q/:id', testsController.update);
    }

    getRouter() {
        return router;
    }
}

