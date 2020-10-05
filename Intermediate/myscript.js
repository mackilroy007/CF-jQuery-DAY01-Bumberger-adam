$("form").submit(function(e) {

    e.preventDefault();




});
//rmove the form element
/*$("form").remove()*/

//add 5 new divs in the article element
$(document).ready(function() {
    var divi;
    for (var i = 0; i < 5; i++) {
        divi = $("<div> </div>");
        $("article").prepend(divi);
    }
});
//3.
$(document).ready(function(){
	$("input").val("Search for");

});