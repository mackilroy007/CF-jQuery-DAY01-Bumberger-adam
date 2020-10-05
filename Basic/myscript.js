/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */
 
// all elements
// $("*").css("background-color", "yellow");

// all p elements
$("p").css("background-color", "yellow");

// the p element with an ID of "intro"
$("p#intro").css("background-color", "green");

// all elements with a class of "note"
$(".note").css("background-color", "pink");

// all DIV elements with a class of note
$("div.note").css("background-color", "orange");

// all p elements in the article element
$("article p").css("background-color", "lightblue");

// the last element in any section which is a p tag
$("p:last-of-type").css("background-color", "black");
//why is there a difference between last-child and last-of-type, when there isn't one between first-child and first of type
// the first paragraph on the page
$("p:first").css("background-color", "purple");

// all p elements which have a link
$("p:has('[href]')").css("background-color", "grey");

// the second li within nested ul element
$("li ul li:nth-child(2)").css("background-color", "cyan");
//$("ul li:eq(2)").css("background-color", "cyan");
// every second and third p element
$("p:gt(2)").css("background-color", "red");