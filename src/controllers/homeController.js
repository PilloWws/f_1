import { INTEGER } from 'sequelize';
import db from '../models/index.js';
import CRUDservices from '../services/CRUDservices.js';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log('--------------------------------');
        // console.log(data);
        // console.log('---------------------------------');
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        });

    } catch (e) {
        console.log(e)
    }
}
let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDservices.createNewUser(req.body);
    console.log(message);
    return res.redirect('/');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDservices.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    let userData = await CRUDservices.getUserInfoById(userId);
    return res.render('editCRUD.ejs', {
        user: userData
    });
}
let updateCRUD = async (req, res) => {
    let allUser = await CRUDservices.updateUserById(req.body);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
}
let deleteCRUD = async (req, res) => {
    let allUser = await CRUDservices.deleteUserById(req.query.id);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
}
module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    updateCRUD: updateCRUD,
    deleteCRUD: deleteCRUD
}