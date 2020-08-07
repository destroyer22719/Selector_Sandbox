const sandbox = $("#sandbox");

const selectorInput = $("#selectorInput");
const elementsInput = $("#elementsInput");

const elementsButton = $("#addElement")

elementsButton.click(() => {
    sandbox.html(elementsInput.val());
    console.log(sandbox.html())
})

elementsInput.val(sandbox.html())
