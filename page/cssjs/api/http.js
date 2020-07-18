const $api="http://10.10.10.22:8122/";
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
LocalUserData={};
LocalUserData.setData = function(key, value){
    layui.data('userInfo',{
        key :key,
        value: value
    });
};
LocalUserData.getData = function(key){
    var localData = layui.data('userInfo');
    return localData[key];
};
