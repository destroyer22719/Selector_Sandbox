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
    console.log(sandbox.find(`${selectorInput.val()}`))
    console.log(selectorInput.val())
})

elementsInput.val(sandbox.html())
