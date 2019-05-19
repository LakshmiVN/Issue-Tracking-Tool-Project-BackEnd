const express = require('express');
const router = express.Router();
const issueController = require('./../controller/issueController');
const appConfig = require('./../config/appConfig');
const multerFile = require('./../middlewares/file-multer');
const auth = require('./../middlewares/auth')


module.exports.setRouter = function(app){

	let baseUrl = appConfig.apiVersion+'/issues';
    
    app.get(baseUrl+'/all',auth.isAuthorized, issueController.getAllIssue);
    /**
	 * @api {get} /issues/all Get all issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "message": "issues retrieved successfully",
	    "status": 200,
	    "issues": [
					{
						issueTitle: string
                        issueStatus: string
                        issueAssignedTo: string
                        issueDescription: string
                        issueDate: string
                        imagePath: string
                        creator: mongoose objectID
                        },

	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't retrieved the issues",
	    "status": 500,
	    "data": null
	   }
	 */
    
    app.post(baseUrl+'/create',auth.isAuthorized, multerFile, issueController.createIssue);
    /**
	 * @api {post} /issues/create post all issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "message": "A new issue created by " + req.userData.fullName,
	    "status": 200,
	    "issues": [
					{
						issueTitle: string
                        issueStatus: string
                        issueAssignedTo: string
                        issueDescription: string
                        issueDate: string
                        imagePath: string
                        creator: mongoose object
                        },
                        creatorName: string,
                        id: mongoose.objectID
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't retrieved the issues",
	    "status": 500,
	    "data": null
	   }
	 */
    
    app.get(baseUrl+'/view/:issueId',auth.isAuthorized, issueController.viewByIssueId);
    /**
	 * @api {get} /issues/view/:issueId Get single issue
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "singleIssue": [
					{
						issueTitle: string
                        issueStatus: string
                        issueAssignedTo: string
                        issueDescription: string
                        issueDate: string
                        imagePath: string
                        creator: mongoose objectID
                        },

	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't retrieved the issues",
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl+'/:issueId/edit',auth.isAuthorized, issueController.editIssue);
    /**
	 * @api {put} /issues/:issueId/edit update issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "message": "issue updated by " + fullName: string,
        "userId": id: string
	    }
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": "couldn't update the issue",
	    "status": 500,
	    "data": null
	   }
	 */

    app.post(baseUrl+'/:issueId/delete',auth.isAuthorized, issueController.deleteIssue);
    /**
	 * @api {delete} /api/issues/:issueId/delete Get all issues
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiHeader {String} authToken The token for authentication.(Send authToken as authorization header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "message": "issue deleted by " + req.userData.fullName,
	      "userId": id : string
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "message": `couldn't delete the post`
	   }
	 */

}


