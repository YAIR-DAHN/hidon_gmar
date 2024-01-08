import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import Test from "./tests-manger-model.js";


const Question = sequelize.define("Question", {
    question: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    answers: {
        type: DataTypes.STRING,
        
    },
    correct_answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    test_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    createdAt: {
        type: DataTypes.DATEONLY
    },
    updatedAt: {
        type: DataTypes.DATEONLY
    }
}, {
});

Question.belongsTo(Test, { foreignKey: 'test_id' });
export default Question;  