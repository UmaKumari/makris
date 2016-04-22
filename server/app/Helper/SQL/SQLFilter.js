var _ = require('underscore');
module.exports = {
    Filter : function (filter) {
        //example filter [{ type: '', key: 'id_user', operator: '=', value: '6'}]
        var strFilter = "";
        var strGroup = "(";
        var i = 1;
        _.each(filter, function(value, key){
            if(i == 1){
                value.type = ' ';
            }
            if(value.group){
                strGroup = strGroup + value.type + " " + value.key + value.operator + "'" + value.value + "' ";
            }else{
                strFilter = strFilter + value.type + " " + value.key + value.operator + "'" + value.value + "' ";
            }
            i++;
        });
        if(strGroup !== "("){
                strFilter = strGroup + ") " + strFilter; 
        }
        return strFilter; 
    },
    OR : 'OR',
    AND : 'AND',
    NONE : '',
    Equal : '=',
    NotEqual : '<>',
    Like : 'LIKE',
    NotLike : 'NOT LIKE'
};