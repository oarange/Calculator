let currentNumber = ''
let previousNumber = ''
let currentOperator = null
let screenReset = false




const numbers = document.querySelectorAll('.btn')
const operators = document.querySelectorAll('.btn-operation')
const equals = document.querySelector('.btn-equals')
const clearA = document.querySelector('#clear')
const deleteBtn = document.querySelector('#delete')
const past= document.querySelector('.past')
const present = document.querySelector('.present')
const decimal = document.querySelector('.btn-decimal')




equals.addEventListener('click', evaluate)
clearA.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)
decimal.addEventListener('click', appendPoint)

numbers.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operators.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
  if (present.textContent === '0' || screenReset)
    resetScreen()
  present.textContent += number
}

function resetScreen() {
  present.textContent = ''
  screenReset = false
}

function clear() {
  present.textContent = '0'
  past.textContent = ''
  currentNumber = ''
  previousNumber = ''
  present = null
}

function appendPoint() {
  if (screenReset) resetScreen()
  if (present.textContent === '')
    present.textContent = '0'
  if (present.textContent.includes('.')) return
  present.textContent += '.'
}

function deleteNumber() {
  present.textContent = present.textContent
    .toString()
    .slice(0, -1)
}

function setOperation(operator) {
  if (currentOperator !== null) evaluate()
  currentNumber = present.textContent
  currentOperator = operator
  past.textContent = `${currentNumber} ${present}`
  screenReset = true
}

function evaluate() {
  if (present === null || screenReset) return
  if (present === '/' && present.textContent === '0') {
    alert("You can't divide by 0!")
    return
  }
  previousNumber = present.textContent
  present.textContent = roundResult(
    operate(present, currentNumber, previousNumber)
  )
  past.textContent = `${currentNumber} ${present} ${previousNumber} =`
  currentOperator = null
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000
}









function add (a , b) {
   return a + b 	
   };
   
  function subtract ( a , b) {
       return a -  b
   };
function multiply (a , b) {
     return a * b 
   };
   
     function divide (a , b) {
        return a / b
   };
      function operate (operator , a , b ){
          a = Number(a)
          b = Number(b)
          switch (operator) {
            case '+':
              return add(a, b)
            case '-':
              return subtract(a, b)
            case 'x':
              return multiply(a, b)
            case '/':
              if (b === 0) return null
              else return divide(a, b)
            default:
              return null
          }
        }
      
// if (count < 0) return "OOPS";
//if (count === 0) return 0;
//let a = 0;
//let b = 1;
//for (let i = 1; i < count; i++) {
 // const temp = b;
  //b = a + b;
  //a = temp;
//}
///return b;
/////;

//let result = document.querySelector('.screen');
    // document.querySelectorAll('btn').forEach(function(btn) {
         // btn.addEventListener('click', function(e) {
            //result.innerHTML += result.innerHTML
             // ? "-"
             // : "You have entered: ";
            //result.innerHTML += e.target.getAttribute('data'); 
          //});
       // });