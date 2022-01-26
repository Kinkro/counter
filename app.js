// set initial counter
let count = 0;

// select value and buttons
const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

//For each button listen to the click event 
// and change the color and  value of "value" variable

btns.forEach((btn)=>{
    btn.addEventListener("click",(e)=> {
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else {
            count=0;
        }
        value.textContent=count;
        if(count<0){
            value.style.color = "red";
        }else if(count>0){
            value.style.color = "green";
        }else{
            value.style.color = "black";
        }
    })
});

