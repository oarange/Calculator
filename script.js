function input () {
     
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
      function operate (operate , a , b ){
          a = Number(a)
          b = Number(b)
          switch (operator) {
            case '+':
              return add(a, b)
            case '-':
              return subtract(a, b)
            case 'x':
              return multiply(a, b)
            case '÷':
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