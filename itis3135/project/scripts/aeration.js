$(document).ready(function(){
//jquery ajax function to pull data from a json and append it at the end of an html element
    $.ajax({
        type: "get",
        url: "scripts/aeration.json",
        datatype: "json",
        success: function(data) {
            $("#aeratePara").append(data.aeration[0].description);
        }
    });

});