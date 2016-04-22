me = this;
var SimpleImap = require('simple-imap');
var inbox = require("inbox");
var logger = require('../../Helper/Log/log.js');
var DAL = require('./dal_mail.js');
//https://github.com/pipedrive/inbox
var client = inbox.createConnection(false, "webmail.schaper.li", {
    secureConnection: false,
    auth:{
        user: "fabian@schaper.li",
        pass: "1ILVane2"
    }
});
module.exports = {
  getInboxMails : function (callback) {
    DAL.getMails("INBOX", 20, function(data){
       callback(data); 
    });
  },
  getMessage : function (uid, callback) {
    DAL.getMail(uid, function(data){
        callback(data);
    });
  },
  addTodo : function (uid, callback) {
      DAL.setFlag(uid, ["TODO"], function(data){
          callback(data);
      });
  },
  getTodo : function (callback) {
    DAL.getByFlag('TODO', function(data){
        callback(data);
    });
  },
  doneTodo : function (uid, callback) {
      DAL.removeFlag(uid, "TODO", function(data){
          callback(data);
      });
  }
};