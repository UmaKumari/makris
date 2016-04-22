var waApi = require('node-wa');
var crypto = require('crypto');
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
var revimei = reverse('352636070592568');
var hash = crypto.createHash('md5').update(revimei).digest("hex");
var wa = new waApi('0041798237062', hash, { displayName: 'Blade', debug: true });
module.exports = {
    sendMessage : function(userid, message){
        wa.sendMessageWithBody({ content: message, to: userid });
    }   
}