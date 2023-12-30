import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import jwt from "jsonwebtoken";

// import { UUIDV4 } from "uuid";


const TestesM = sequelize.define("Testes_Manager", {
    // Model attributes are defined here
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    testesMgName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    testesMgType: {
        type: DataTypes.ENUM("a", "n"),
        allowNull: false
    },
    testesMgScroe: {
        type: DataTypes.INTEGER
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
        // allowNull defaults to true
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

TestesM.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}

TestesM.prototype.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
}

TestesM.prototype.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.userEmail,
        token: this.generateJWT(),
    };
};

export default TestesM;