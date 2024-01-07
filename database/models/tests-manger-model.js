import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import jwt from "jsonwebtoken";
// import Question from "./QuestionModel.js";


const Test = sequelize.define("Test", {
    testesMgName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    testesMgType: {
        type: DataTypes.STRING,
        // type: DataTypes.ENUM("a", "n"),
        allowNull: false
    },
    testesMgScroe: {
        type: DataTypes.INTEGER
         // allowNull defaults to true
    },
    testesMgTime: {
        type: DataTypes.STRING,
    },
     testesMgDateStart: {
        type: DataTypes.DATE
    },
    testesMgDateEnd: {
        type: DataTypes.DATE
    },
    testesMgLevel: {
        type: DataTypes.INTEGER
    },
    testsMgDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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

// Test.hasMany(Question, { foreignKey: 'test_id' });
export default Test;