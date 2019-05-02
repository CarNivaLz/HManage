
$("#btn_login").click(function (e) {
    e.preventDefault();
    $.ajax({
        url: "......................................",
        method: "POST",
        dataType: "json",
        data: {
            status: "login",
            userID: $("#account_login").val(),
            password: $("#password_login").val()
        },
        success: function (data) {
            console.log(data);
        },
        error: function () {
            console.log("error");
            alert("登录失败");
        }
    });
})
