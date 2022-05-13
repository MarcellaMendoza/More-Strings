let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")

let count = 0

function increment() {
    count = count + 1
    countElement.innerText = count
}

function save() {
  let addingString = count + " - "
  console.log(addingString  + addingString)
  let oneString = saveElement.innerText
  console.log(oneString  + oneString)
  saveElement.innerText = oneString + addingString

}
