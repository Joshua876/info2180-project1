/* Add your JavaScript to this file */
window.onload=function(){
    var mess=document.getElementsByClassName("message")[0]; 
    var sub=document.querySelector("button");
    sub.addEventListener("click", function(event){
        event.preventDefault();
        var email=document.getElementById("email");
        if(email.value == ""){
            mess.innerHTML="Please enter a valid email address."
        }
        else{
            mess.innerHTML="Thank you! Your email address has been added to our mailinglist!"
        }
    });
}