const sandbox = $("#sandbox");

const selectorInput = $("#selectorInput");
const elementsInput = $("#elementsInput");

const elementsButton = $("#addElement")
const selectorButton = $("#addSelector")

elementsButton.click(() => {
    sandbox.html(elementsInput.val());
    console.log(sandbox.html())
})

selectorButton.click(() => {
    let selectorFound = sandbox.find(`${selectorInput.val()}`)
    $('#selectorsFound').text(selectorFound.length)
    console.log(selectorFound.length)// console.log(selectorInput.val())
})

elementsInput.val(sandbox.html())
