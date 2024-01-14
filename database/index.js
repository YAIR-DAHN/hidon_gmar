// import sequelize from "./db-postgres.js"; //postgresDB
import sequelize from "./db-mysql.js"; //mysqlDB

import User from "./models/user-model.js";
import Test from "./models/tests-manger-model.js";
import Question from "./models/QuestionModel.js";
import Answers from "./models/answers-model.js";
import LoginCounter from "./models/login-counter.js";
import PasswordRecovery from "./models/password-recovery-model.js"


//connect to db and sync models
const syncModels = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        // await sequelize.sync({ force: true }); // מאפס את הטבלה בכל ריצה מחודשת של השרת 

        await sequelize.sync();  // אם הטבלה קיימת לא מאפס

        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

export { syncModels, User, Test, Question, Answers, LoginCounter, PasswordRecovery, sequelize };