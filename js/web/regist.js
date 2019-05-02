
$("#btn_regist").click(function (e) {
    e.preventDefault();
    $.ajax({
        url: "................................",
        method: "POST",
        dataType: "json",
        data: {
            status: "regist",
            invitecode_regist: $("#invitecode_regist").val(),
            username_regist: $("#username_regist").val(),
            account_regist: $("#account_regist").val(),
            password_regist: $("#password_regist").val(),
            confirm_password_regist: $("#confirm_password_regist").val(),
            email_regist: $("#email_regist").val()
        },
        success: function (data) {
            console.log(data)
        },
        error: function () {
            console.log("error")
        }
    })
});