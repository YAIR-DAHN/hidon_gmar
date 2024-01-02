import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import Test from "./tests-manger-model.js";
// import { UUIDV4 } from "uuid";


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
        type: DataTypes.DATE
        // allowNull defaults to true
    },
    updatedAt: {
        type: DataTypes.DATE
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

Question.belongsTo(Test, { foreignKey: 'test_id' });
export default Question;  