// Bruce Turner, IT 328, Spring 2019
// Professor Ostrander, Green River Community College
// April 9 2019
// file heehaw.js
var text = "";
var i = 0;
var done = false;
while (!done) {
    i++;
    if(i === 100) {
        done = true;
    }
    // number evenly divisible by 3 and NOT 5, print “Hee!” instead of the number.
    // number evenly divisible by 5 and NOT 3, print “Haw!” instead of the number.
    // number evenly divisible by both 3 and 5, print “Hee Haw!” instead of the number.
    var remBy3 = i % 3;
    var evenlyBy3 = (remBy3 === 0);
    var remBy5 = i % 5;
    var evenlyBy5 = (remBy5 === 0);

    if(evenlyBy3 && !evenlyBy5)console.log("Hee!");
    else if(!evenlyBy3 && evenlyBy5)console.log("Haw!");
    else if(evenlyBy3 && evenlyBy5)console.log("Hee Haw!");
    else console.log(i);
    text += "<br> " + i;
}
//document.getElementById("number").innerHTML = text;