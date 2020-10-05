//change all href attributes

$(document).ready(function(){
    //$("[href]").attr("href","https://www.codefactory.wien");
    //it works, but it also renames the css link in the head
    $("a").attr("href", "https://www.codefactory.wien");
});

//change text color to red for the code tag
$(document).ready(function(){
    $("code").css("color", "red");

});

//Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element
$(document).ready(function(){

    $("ol>li").css("background-color", "#2a7b90");

});

//4. Within the form, change the placeholder text to "Express your opinion"
$(document).ready(function(){

    $("form textarea").attr("placeholder", "Express your opinion");

});

//5. Replace all images on the page with this one "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"
$(document).ready(function(){

    $("img").attr("src", "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

});

//6. Change the background color to orange for all blockquote elements and the font-style to italic
$(document).ready(function(){

    $("blockquote").css({
        "background-color": "orange",
        "font-style": "italic"
    });

});

//7. At the top of the page, change the logo color "Simple" to black and "Blog" to white
$(document).ready(function(){

    $("#logo").css("color", "black");
    $(".gray").css("color", "white");

});

//8. Remove the "Oct 01, 2006" Date from the page
$(document).ready(function(){

    $(".date").remove();

});

//9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"
$(document).ready(function(){

    var content = `<li><a href="#">New Templates</a></li>
                    <li><a href="#</a></li>
                    <li><a href="#">Contact Us</a></li>`

    $(".sidemenu li:eq(4)").after(content);

});

//10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."

$(document).ready(function(){

    $("#sidebar p:first").text(`"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."`);

});
