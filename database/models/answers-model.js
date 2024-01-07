import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import Users from "./user-model.js";
import Question from "./QuestionModel.js";
import Test from "./tests-manger-model.js";
// import { UUIDV4 } from "uuid";


const answers = sequelize.define("answers", {
    Quest_id_FK: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // unique: true
    },
    user_id_FK: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    test_id_FK: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
     user_answers: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalTime: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    // Other model options go here
});

answers.belongsTo(Users, { foreignKey: 'user_id_FK' });
answers.belongsTo(Question, { foreignKey: 'Quest_id_FK' });
answers.belongsTo(Test, { foreignKey: 'test_id_FK' });

export default answers;  