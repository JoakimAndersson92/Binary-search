const numBoxContainer = document.querySelector('#numberBoxes')
const inputField = document.querySelector('#simple-search')
const submitButton = document.querySelector('#submitButton')

const arraySize = 30000
const numbers = []
for (let i = 1; i <= arraySize; i++) {
    numbers.push(i)
}



numbers.forEach((number) => {
    const newBlock = document.createElement('span')
    newBlock.setAttribute("id", number)
    newBlock.style.display = "inline-block"
    newBlock.style.width = "150px"
    newBlock.style.height = "150px"
    newBlock.style.backgroundColor = "#E0F8C8"
    newBlock.style.border = "3px solid black"
    newBlock.style.borderRadius = "10px"
    newBlock.style.margin = "3rem"
    newBlock.style.textAlign = "center"
    newBlock.style.lineHeight = "150px"

    newBlock.textContent = number
    numBoxContainer.appendChild(newBlock)

})

let numberOfRecursions = 0
function findNumberBox(input, arr) {
    if(input > arraySize || input < 1) return console.log("Number out of range") 
    if(arr.length <= 1){
        const square = document.getElementById(arr[0] - 1)
        square.style.backgroundColor = "green"
        numberOfRecursions = 0
        return console.log(arr[0] - 1)
    }
    const half = Math.ceil(arr.length / 2);

    let firstHalf = arr.slice(0, half)
    let secondHalf = arr.slice(half)
    console.log(firstHalf, secondHalf)
    if (input < firstHalf[firstHalf.length - 1]) {
        numberOfRecursions++
        console.log(`step ${numberOfRecursions}`)
        findNumberBox(input, firstHalf)
    }
    else {
        numberOfRecursions++
        console.log(`step ${numberOfRecursions}`)
        findNumberBox(input, secondHalf)
    }

}
submitButton.addEventListener('click', () => findNumberBox(inputField.value, numbers))