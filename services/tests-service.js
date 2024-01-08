import { User, Test, Question, Answers } from "../database/index.js";

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
const getAllTest = async () => {
    try {
        const Tests = await Test.findAll();
        if (Tests.length > 0) {
            return Tests;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const TestUpdate = async (id, TestUpdated) => {
    try {
        const Tests = await Test.findByPk(id);
        if (!Tests) {
            return null;
        }
        Tests.set(TestUpdated);
        await Tests.save();
        return Tests;
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
const getAllQuest = async () => {
    try {
        const Quest = await Question.findAll({
            include: [{
                model: Test,
                attributes: ['testesMgName']
            },]
        });
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
const getByTest = async (id) => {
    try {
        const quset = await Question.findAll({ where: { test_Id: id } });
        if (quset) {
            return quset;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
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
const addAnswer = async (answer) => {
    try {
        const Answerss = await Answers.bulkCreate(answer);
        if (Answerss) {
            return Answerss;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const getAnswerById = async (id) => {
    try {
        const answer = await Answers.findAll({ where: { test_Id: id } });
        if (answer) {
            return answer;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const getAllAnswer = async () => {
    try {
        const answer = await Answers.findAll({
            include: [{
                model: User,
                attributes: ['userFirstName', 'userLastName']
            }, {
                model: Test,
                attributes: ['testesMgName']
            },
            {
                model: Question,
                attributes: ['question', 'correct_answer']
            }
            ]
        }); // חיבור מפתח זר לשם המשתמש ושם המבחן
        if (answer) {
            return answer;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}
const getAnswerByUser = async (id) => {
    try {
        const answer = await Answers.findAll({
            where: { user_Id_FK: id }, include: [{
                model: User,
                attributes: ['userFirstName', 'userLastName']
            }, {
                model: Test,
                attributes: ['testesMgName']
            },
            {
                model: Question,
                attributes: ['question', 'correct_answer']
            }
            ]
        });
        if (answer) {
            return answer;
        }
        return null;
    } catch (error) {
        throw new Error(error);
    }
}

export default { create, getAllTest, TestUpdate, addQuest, getById, updateQuest, getAllQuest, getByTest, addAnswer, getAnswerByUser, getAnswerById, getAllAnswer };