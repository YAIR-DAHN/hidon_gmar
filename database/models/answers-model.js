import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import Users from "./user-model.js";
import Question from "./QuestionModel.js";
import Test from "./tests-manger-model.js";


const answers = sequelize.define("answers", {
    Quest_id_FK: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
        type: DataTypes.DATEONLY
    },
    updatedAt: {
        type: DataTypes.DATEONLY
    }
},
);

answers.belongsTo(Users, { foreignKey: 'user_id_FK' });
answers.belongsTo(Question, { foreignKey: 'Quest_id_FK' });
answers.belongsTo(Test, { foreignKey: 'test_id_FK' });

export default answers;  