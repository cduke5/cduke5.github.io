$(document).ready(function(){
//ajax function to pull data from a json file and append it to the end of a html element
    $.ajax({
        type: "get",
        url: "scripts/pest.json",
        datatype: "json",
        success: function(data) {
            $("#pestIntro").append(data.pest[0].description);
        }
    });

});