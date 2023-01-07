let submitButton=document.querySelector(".submit");
let thankYou=document.querySelector(".container-2");
let rateForm =document.querySelector(".rateForm")
let buttonNumber=document.querySelectorAll(".btn");
let ratedNumber=document.getElementById("ratedNumber");


submitButton.addEventListener("click",function(){
rateForm.classList.add("hidden");
thankYou.classList.remove("hidden");
})

buttonNumber.forEach((rate)=>{
    rate.addEventListener("click",function(){
        ratedNumber.innerHTML=rate.innerHTML;
    })
})