import { sequelize } from "../index.js";
import { DataTypes, literal } from "sequelize";
import jwt from "jsonwebtoken";

// import { UUIDV4 } from "uuid";


const User = sequelize.define("User", {
    // Model attributes are defined here
    // userId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    userFirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userLastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userPhone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
     userPassword: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userToken: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    userCity: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userAddress: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    userContact: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    userScore: {
        type: DataTypes.INTEGER,
        defaultValue: 0
        // allowNull defaults to true
    },
    userLevel: {
        type: DataTypes.INTEGER,
        defaultValue: 1
        // allowNull defaults to true
    },
    userRole: {
        type: DataTypes.ENUM("user", "admin", "editor")
        // allowNull defaults to true
    },
    userStatus: {
        type: DataTypes.ENUM("active", "inactive")
        // allowNull defaults to true
    },
    userDeleted: {
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

User.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.userPassword;
    return values;
}

User.prototype.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
    return jwt.sign({
        email: this.email,
        id: this.id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
}

User.prototype.toAuthJSON = function () {
    return {
        id: this.id,
        email: this.userEmail,
        token: this.generateJWT(),
    };
};

export default User;