const express = require("express");
const notificationController = require("./../controller/notification");
const appConfig = require('./../config/appConfig');


const auth = require('./../middlewares/auth')

module.exports.setRouter = function(app){

let baseUrl = appConfig.apiVersion+'/notification';

app.post(baseUrl, auth.isAuthorized, notificationController.createNotification);

app.get(baseUrl, notificationController.getNotifications);

app.delete(baseUrl + '/:notificationId', notificationController.deleteNotifications);

}
