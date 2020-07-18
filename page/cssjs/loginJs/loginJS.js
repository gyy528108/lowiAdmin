function loginValida() {
    var token = LocalData.getData("token");
    if (!token) {
        window.location = 'login.html';
    } else {
        var param = {};
        param.token = token;
        $.ajax({
            type: "post",
            url: $api + "user/getUserInfo",
            data: JSON.stringify(param),
            async: false,//同步提交。不设置则默认异步，异步的话，最后执行ajax
            contentType: "application/json",
            dataType: 'json',
            success: function (data) {
                console.log("data", data);
                if (data.code == 1) {
                    window.location = 'login.html';
                }
            },
            error: function (x) {
                window.location = 'login.html';
            }
        });
    }
}
