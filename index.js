const sandbox = $("#sandbox");

const selectorInput = $("#selectorInput");
const elementsInput = $("#elementsInput");

const elementsButton = $("#addElement")
const selectorButton = $("#addSelector")

elementsButton.click(() => {
    sandbox.html(elementsInput.val());
    console.log(sandbox.html())
})

elementsInput.val(sandbox.html())
