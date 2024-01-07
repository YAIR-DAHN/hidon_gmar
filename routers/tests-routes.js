import express from 'express';
import testsController from '../controllers/tests-controler.js';
import adminAuth from '../middlewares/adminAuth.js';

const router = express.Router();

export default class TestsRouter {
    constructor() {
        router.post('/creat', testsController.create); // יצירת מבחן
        router.get('/T/all', testsController.getAllTests); // קבלת כל המבחנים
        router.put('/T/:id', testsController.TestUpdate); // עדכון מבחן לפי מזהה
        router.post('/Q/add',adminAuth, testsController.addQuest); // הוספת שאלה למבחן
        router.get('/Q/', testsController.getAll); // קבלת כל השאלות
        router.get('/Q/:id', testsController.getById); // קבלת שאלה על פי מזהה
        router.get('/:id', testsController.getByTest); // קבלת שאלה על פי מזהה מבחן
        router.put('/Q/:id', testsController.update); // עדכון שאלה על פי מזהה
        router.post('/A/', testsController.addAnswer); // קבלת תשובת מבחן מהמשתמש
        router.get('/A/all', testsController.getAllAnswer); // הצגת תשובות מבחן מכל המשתמשים
        router.get('/A/user/:id', testsController.getAnswerByUser); // הצגת תשובות מבחן של משתמש
    }

    getRouter() {
        return router;
    }
}

