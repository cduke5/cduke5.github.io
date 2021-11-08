$(document).ready(function() {

        $("#image_list a").each(function(index,link)
        {
                var img = new Image();
                img.src = link.href;
        });
        // preload the image for each link

        $("#image_list a").click(function(evt){
                
                $("#image").fadeOut(3000,function(){
                        $("#image").attr("src", evt.currentTarget.href);
                        $("#image").fadeIn(3000);
                });
                
                $("#caption").fadeOut(3000,function(){
                        $("#caption").text(evt.currentTarget.title);
                        $("#caption").fadeIn(3000).animate({fontSize: "2.0em"},3000);
                })
                
                evt.preventDefault();
        });
        // set up the event handlers for each link

    			// get the image URL and caption for each image and animate the caption

            // cancel the default action of each link


    // move the focus to the first link
    $("#image_list li:first-child a").focus();
}); // end ready