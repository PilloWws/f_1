import bcrypt from 'bcryptjs';
import db from '../models/index.js';


const salt = bcrypt.genSaltSync(10);
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFroBrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                firstName: data.firstName,
                password: hashPasswordFroBrypt,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                phonenumber: data.phonenumber,
            });

            resolve('create success!!!');
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    });
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true
            })
            resolve(user);
        } catch (e) {
            reject(e);
        }
    })
}
let updateUserById = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.update({
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber
            }, {
                where: {
                    id: data.id
                }
            });
            let allUser = await db.User.findAll();
            resolve(allUser);
        } catch (e) {
            reject(e);
        }
    });
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({
                where: {
                    id: userId
                }
            });
            let allUser = await db.User.findAll();
            resolve(allUser);
        } catch (e) {
            reject(e);
        }
    });
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById
}