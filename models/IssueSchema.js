// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let issueSchema = new Schema(
    {    
        title: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            default:''
        },
        reporter: {
            type: String,
            default:''
        },
        description: {
            type: String,
            default: ''
        },
        created: {
            type: Date,
            default: Date.now
        },
        issueId: {
            type: String,
            unique: true,
            required: true
        },
        imagePath: {
            type: String,
            required: true
        },
        createdBy: {
            type: String,
            default: ''
        },
        editedBy: {
            type: String,
            default: ''
        }
    }
)

module.exports = mongoose.model('IssueSchema', issueSchema);