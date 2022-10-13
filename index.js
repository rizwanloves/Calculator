let calValue = '';
let calc = document.getElementById("input-box");
let bgbtn = document.querySelectorAll('button')

Array.from(bgbtn).forEach((btn)=>{
    
    btn.addEventListener("click",()=>{
        if(btn.innerHTML == '='){
            calValue = eval(calValue);
            calc.value =calValue;
        }
        else if(btn.innerHTML == 'CE'){
            calValue ='';
            calc.value = calValue;
        }
        else if(btn.innerHTML == 'DEL'){
            calValue = calc.value.slice(0,-1);
            calc.value = calValue;
        }
        else{
            calValue = calValue + btn.innerHTML;
            calc.value = calValue;
        }
    })
});