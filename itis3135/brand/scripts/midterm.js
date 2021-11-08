$(document).ready(function() {
    $("#subBtn").click(function(){
        var first = $("#firstName").val();
        var last = $("#lastName").val();
        var phone = $("#phoneNumber").val();
        var email = $("#userEmail").val();

        $(".formValues").html(first + "<br>" + last + "<br>" + phone + "<br>" + email);
    });

});