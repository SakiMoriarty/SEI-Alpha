$("#sendMail").on("click", function(){
    let email = $("#email").val().trim();
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let message = $("#message").val().trim();

    if(email == ""){
        $("#errorMessage").text("Введите почту");
        return false;
    }
    else if(name == ""){
        $("#errorMessage").text("Введите имя");
        return false;
    }
    else if(phone == ""){
        $("#errorMessage").text("Введите телефон");
        return false;
    }
    else if(message.length < 5){
        $("#errorMessage").text("Введите сообщение");
        return false;
    }

    $("#errorMessage").text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'email': email, 'name': name, 'phone': phone, 'message':message },
        dataType: 'html',
        beforeSend: function(){
            $("#sendMail").prop("disable", true);
            $("#sendMail").text("Отправка...");
        },
        success: function(data){
            if(!data){
                alert("Ошибка, сообщение не отправлено!");
            }
            else{
                $("#mailForm").trigger("reset");
            }
            $("#sendMail").prop("disable", false);
        }
    })
});