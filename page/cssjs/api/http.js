const $api="http://www.lowi.run:8122/";
LocalData={};
LocalData.setData = function(key, value){
    layui.data('token',{
        key :key,
        value: value
    });
};
LocalData.getData = function(key){
    var localData = layui.data('token');
    return localData[key];
};
