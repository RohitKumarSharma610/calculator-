let a = document.querySelectorAll(".span")
let i = 0;
for(i; i<a.length;i++){
    a[i].onclick=(e)=>{
        let a = document.getElementById("calculor")
      if(e.target.innerHTML == "C"){
               a.value = "";
      } else if(e.target.innerHTML == "="){
        if(a.value==''){
           a.value=''
        } else {
         let output = eval(a.value)
                a.value = output}
      } else if (e.target.innerHTML == "del"){
         a.value = a.value.slice(0 , -1)
    
    } else a.value += e.target.innerHTML;

    let operators = ['+', '-', '*', '/', '%', '.'];
let inputField = a.value; 
let lastChar = inputField[inputField.length - 1];

if (operators.includes(lastChar)) {
    if (inputField.length > 1 && operators.includes(inputField[inputField.length - 2])) {
        
        a.value = inputField.slice(0, -1); 
        
    }
}


if (inputField.value) {
  try {
      let output = eval(inputField.value);
      inputField.value = output; // Update the input field with the result
  } catch (error) {
     
  }
}

        
    }
}