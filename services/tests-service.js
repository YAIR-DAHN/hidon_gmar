import { Test, Question } from "../database/index.js";
import { Op } from "sequelize";

const create = async (newTest) => {
    try {
        const Tests = await Test.create(newTest);
        if (Tests) {
            return Tests;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const addQuest = async (newQuest) => {
    try {
        console.log("start adds");
        const Quest = await Question.create(newQuest);
        if (Quest) {
            return Quest;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const getAll = async () => {
    try {
        const Quest = await Question.findAll(); // SELECT * FROM Quest; 
        if (Quest.length > 0) {
            return Quest;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }        
}
const getById = async (id) => {
    try {
        const quset = await Question.findByPk(id);
        if (quset) {
            return quset;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
// 
// 
const updateQuest = async (id, QuestUpdated) => {
    try {
        const quset = await getById(id);
        if (!quset) {
            return null;
        }
        quset.set(QuestUpdated);
        await quset.save();
        return quset;
    } catch (error) {
        throw new Error(error);
    }
}


export default { create, addQuest, getById, updateQuest, getAll };