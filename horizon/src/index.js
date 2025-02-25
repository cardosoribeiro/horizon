$(document).ready(function() {
    updadeDocumentObjectModel();    
});

function updadeDocumentObjectModel() {
    $("#hello").text("I was setted first!");
    $("#test").text("I was the second!");
    $("#box").text("jQuery is working!");

    $(".class-selector").text("I am the new age!");

    $("#my-button").click(function() {
        $(this).fadeOut(500, function() {
          $(this).fadeIn(500);
        });
    });   
}