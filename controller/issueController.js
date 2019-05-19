const mongoose = require('mongoose');
const shortId = require('shortid');
const response = require('./../libs/responseLib');
const check = require('./../libs/checkLib')

/* Models */
var IssueModel = require('./../models/IssueSchema');
var AuthModel = require('./../models/Auth');


/**
 * function to get all the issues.
 */
let getAllIssue = (req, res) => {
    IssueModel.find()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                let apiResponse = response.generate(true, 'Failed To Find issues', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) { 
                let apiResponse = response.generate(true, 'No Issue Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Issue Details Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all issues


/**
 * function to create issue
 */
let createIssue = (req, res) => {
  const url = req.protocol + "://" + req.get("host");
    let issueCreationFunction = () => {
        return new Promise((resolve, reject) => {
                let issueShort = shortId.generate();
                let today = Date.now();
                let newIssue = new IssueModel({
                    title: req.body.title,
                    status: req.body.status,
                    reporter: req.body.assigned,
                    description: req.body.description,
                    imagePath: url + "/images/" + req.file.filename,
                    created: today,
                    issueId: issueShort,
                    createdBy:req.body.createdBy
                }) 

                newIssue.save((err, result) => {
                    if (err) {
                        let apiResponse = response.generate(true, 'Error Occured while creating issue', 500, null)
                        reject(apiResponse)
                    } else {
                        console.log('Success in issue creation')
                        resolve(result)
                    }
                }) 
        }) 
    } 
    // end create issue function

    // making promise call.
    issueCreationFunction()
        .then((result) => {
            let apiResponse = response.generate(false, 'New Issue Created successfully by ' + req.body.createdBy , 200, result)
            res.send(apiResponse)
        })
        .catch((error) => {
            console.log(error)
            res.send(error)
        })
}

/**
 * function to edit issue.
 */
let editIssue = (req, res) => {
    if (check.isEmpty(req.params.issueId)) {
        console.log('issueId should be passed')
        let apiResponse = response.generate(true, 'issueId is missing', 403, null)
        res.send(apiResponse)
    } else {
        let options = req.body; 
        console.log(options);
        IssueModel.update({ 'issueId': req.params.issueId }, options, { multi: true }).exec((err, result) => {
            if (err) {
                console.log('Error Occured.')
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log('Issue Not Found.')
                let apiResponse = response.generate(true, 'Issue Not Found', 404, null)
                res.send(apiResponse)
            } else {
                console.log('Issue Edited Successfully')
                let apiResponse = response.generate(false, 'Issue Edited Successfully by ' + req.body.editedBy , 200, result)
                res.send(apiResponse)
            }
        })
    }
}
//end edit issue function

/**
 * function to find single isssue.
 */
let getSingleIssue = (issueId) => {
    if (check.isEmpty(req.params.issueId)) {
        let apiResponse = response.generate(true, 'issueId is missing', 403, null)
        reject(apiResponse)
    } else {
        return new Promise((resolve, reject) => {
            IssueModel.findOne({ 'issueId': req.params.issueId }, (err, result) => {
                if (err) {
                    let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'Issue Not Found', 404, null)
                    reject(apiResponse)
                } else {
                    resolve(result)
                }
            })
        })
    }
}
//end get single issue function

/**
 * function to view issue by id.
 */
let viewByIssueId = (req, res) => {
    if (check.isEmpty(req.params.issueId)) {
        let apiResponse = response.generate(true, 'issueId is missing', 403, null)
        res.send(apiResponse)
    } else {
        IssueModel.findOne({ 'issueId': req.params.issueId }, (err, result) => {
            if (err) {
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Issue Not Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Issue Found Successfully.', 200, result)
                res.send(apiResponse)
            }
        })
    }
}
//end function

/**
 * function to delete issue.
 */
let deleteIssue = (req, res) => {
    if (check.isEmpty(req.params.issueId)) {
        let apiResponse = response.generate(true, 'issueId is missing', 403, null)
        res.send(apiResponse)
    } else {
        IssueModel.remove({ 'issueId': req.params.issueId }, (err, result) => {
            if (err) {
                let apiResponse = response.generate(true, 'Error Occured.', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Issue Not Found.', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Issue Deleted Successfully', 200, result)
                res.send(apiResponse)
            }
        })
    }
}
//end delete function

module.exports = {
    getAllIssue: getAllIssue,
    createIssue: createIssue,
    editIssue: editIssue,
    getSingleIssue: getSingleIssue,
    viewByIssueId: viewByIssueId,
    deleteIssue: deleteIssue
}// end exports
