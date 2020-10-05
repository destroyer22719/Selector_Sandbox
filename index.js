//sandbox div
const sandbox = $("#sandbox");

//inputs
const selectorInput = $("#selectorInput");
const elementsInput = $("#elementsInput");

//add buttons
const elementsButton = $("#addElement");
const selectorButton = $("#addSelector");

//clear buttons
const clearSelector = $("#clearSelector");
const clearElement = $("#clearElement");

//add elements
elementsButton.click(() => {
    let newVal =elementsInput.val().trim() 
    sandbox.html(newVal);
    
    //expands height of sandbox relative to child element length
    sandbox.height(sandbox.children().length * 50 )
})


//finds selector elements
selectorButton.click(() => {
    let selectorFound = sandbox.find(`${selectorInput.val()}`)
    $('#selectorsFound').text(selectorFound.length)
    selectorFound.css('border','2px solid green');
})

//clear buttons
clearSelector.click(() => {
    selectorInput.val("")
})
clearElement.click(() => {
    elementsInput.val("")
    sandbox.empty();

})

//set html of sandbox to elements textarea
elementsInput.val(sandbox.html())

