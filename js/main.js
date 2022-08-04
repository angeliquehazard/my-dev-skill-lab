//As a User (AAU), I don't want to see any developer skills when 
//the page first loads so that I can start with a fresh slate.

// select <p> elements using $(p) and remove them.
$("p").remove();

// AAU, I want to be able to type in a skill and have it added to 
// my list of skills by clicking a button.

//onclick (event listener) "add skill" button, insert input, add a p 
//element showing the input
$(".skill").click(function() {
    let $input = $(".input").val();
    //add an item to the ul (node?)
    console.log($input);
});

// AAU, I want to be able to remove an individual skill one at a 
// time in case I make a mistake.