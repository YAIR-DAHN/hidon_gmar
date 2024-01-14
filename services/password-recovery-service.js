import {PasswordRecovery, User} from "../database/index.js";
import crypto from "crypto";
import dotenv from "dotenv";
import { Op } from "sequelize";
import jwt from "jsonwebtoken";


const findUser = async ({  userPhone }) => {
    try {
        const user = await User.findOne({
            where: {userPhone : userPhone}
        });

        if (user) {

            //יצירת קוד אימות
             const vCode = crypto.randomInt(100000, 999999); // 6 digit random number
            await PasswordRecovery.create({userId: user.id, token: user.userToken, isUsed: false, verificationCode: vCode});

            //שליחת קוד אימות למשתמש
            await fetch(`https://www.call2all.co.il/ym/api/SendSms?
            token=${process.env.SMS_YEMOT_NUMBER}:${process.env.SMS_YEMOT_PASSWORD}
            &message=קוד האימות לאיפס הסיסמה לאתר הוא ${vCode}&phones=${user.userPhone}}`)
            .then(res => res.json()).then(data => console.log(data));

            let returnData = {user, vCode};
            return returnData;
        }
        return null;
    } catch (error) {
        console.log(error);
    }
}

//טיפול בקבלת קוד האימות מהמשתמש
const verifyCode = async ({ code }) => {
    try {
        const user = await PasswordRecovery.findOne({
            where: {
                verificationCode: code,
                isUsed: false
            }
        });
        if (user) {
            //עדכון בדאטה שנעשה שימוש בקוד האימות
            await PasswordRecovery.update({isUsed: true}, {where: {id: user.id}});
        }
        return user.userId;
    } catch (error) {
        console.log(error);
    }
}

//כניסה לאתר באמצעות קוד אימות
const login = async (userId) => {
    try {
        const user = await User.findByPk(userId);

        if (user) {
            user.userToken = user.generateJWT();
            await user.save();
            console.log(user);
            return user;
        }
        return null;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}


export default {findUser, verifyCode, login};