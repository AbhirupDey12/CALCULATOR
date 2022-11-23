let screen = document.getElementById('screen') ;
let buttons = document.querySelectorAll('button') ;
let screenVal = '' ;

for(let item of buttons) {
    item.addEventListener('click' , (e) => {
        let buttonText = e.target.textContent ;
        console.log(buttonText) ;
        if(buttonText == 'X'){
            buttonText = '*';
            screenVal +=  buttonText;
            screen.value =  screenVal;
        } 
        else if(buttonText == "C") {
            screenVal =  '';
            screen.value =  screenVal;
        } else if(buttonText == "=") {
            screen.value = eval(screenVal);
        } else {
            screenVal +=  buttonText;
            screen.value =  screenVal;
        }
    });
};


// Make this table again for confidence 


