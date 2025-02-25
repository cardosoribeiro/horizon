$(document).ready(function() {
    updadeDocumentObjectModel();        
});

function updadeDocumentObjectModel() {
    // Tag query
    $("p").text("This is a paragraph.");

    // Id query
    $("#my-hello").text("I was setted first!");
    $("#my-test").text("I was the second!");
    $("#my-box").text("jQuery is working!");

    // Class query
    $(".class-selector").text("I am the new age!");

    // Event Definition
    $("#my-button").click(function() {
        $(this).fadeOut(500, function() {
          $(this).fadeIn(500);
        });
    });   
}