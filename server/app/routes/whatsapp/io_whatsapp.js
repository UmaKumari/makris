var waAPI = require('node-wa');
var crypto = require('crypto');
function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
var wa = new waApi('0041798237062', '', { displayName: 'Blade', debug: true });
module.exports = {
    
}