const express = require("express");
const watcherController = require("./../controller/watcher");
const appConfig = require("./../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = function(app){

let baseUrl = appConfig.apiVersion+'/watcher';

app.post(baseUrl, auth.isAuthorized, watcherController.createWatcher);

app.get(baseUrl+'/:issueId', auth.isAuthorized, watcherController.getWatcher);

}
