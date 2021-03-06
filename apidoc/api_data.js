define({ "api": [
  {
    "type": "delete",
    "url": "/api/issues/:issueId/delete",
    "title": "Get all issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"message\": \"issue deleted by \" + req.userData.fullName,\n\t      \"userId\": id : string\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": `couldn't delete the post`\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "read",
    "name": "DeleteApiIssuesIssueidDelete"
  },
  {
    "type": "get",
    "url": "/issues/all",
    "title": "Get all issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"message\": \"issues retrieved successfully\",\n\t    \"status\": 200,\n\t    \"issues\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueTitle: string\n                        issueStatus: string\n                        issueAssignedTo: string\n                        issueDescription: string\n                        issueDate: string\n                        imagePath: string\n                        creator: mongoose objectID\n                        },\n\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't retrieved the issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "read",
    "name": "GetIssuesAll"
  },
  {
    "type": "get",
    "url": "/issues/view/:issueId",
    "title": "Get single issue",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"singleIssue\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueTitle: string\n                        issueStatus: string\n                        issueAssignedTo: string\n                        issueDescription: string\n                        issueDate: string\n                        imagePath: string\n                        creator: mongoose objectID\n                        },\n\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't retrieved the issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "read",
    "name": "GetIssuesViewIssueid"
  },
  {
    "type": "post",
    "url": "/issues/create",
    "title": "post all issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"message\": \"A new issue created by \" + req.userData.fullName,\n\t    \"status\": 200,\n\t    \"issues\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tissueTitle: string\n                        issueStatus: string\n                        issueAssignedTo: string\n                        issueDescription: string\n                        issueDate: string\n                        imagePath: string\n                        creator: mongoose object\n                        },\n                        creatorName: string,\n                        id: mongoose.objectID\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't retrieved the issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "read",
    "name": "PostIssuesCreate"
  },
  {
    "type": "put",
    "url": "/issues/:issueId/edit",
    "title": "update issues",
    "version": "0.0.1",
    "group": "read",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as authorization header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"message\": \"issue updated by \" + fullName: string,\n        \"userId\": id: string\n\t    }\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"message\": \"couldn't update the issue\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "read",
    "name": "PutIssuesIssueidEdit"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Sengar\",\n        \"firstName\": \"Rishabh\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for user login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Signup Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc\",\n        \"userDetails\": {\n        \"mobileNumber\": 2234435524,\n        \"email\": \"someone@mail.com\",\n        \"lastName\": \"Rai\",\n        \"firstName\": \"Priya\",\n        \"userId\": \"-E9zxTYA8\"\n    }\n\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  }
] });
