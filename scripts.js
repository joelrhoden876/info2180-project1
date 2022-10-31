/* Add your JavaScript to this file */
window.onload = function(){


var input = document.getElementsByTagName("input")[0];
var button = document.getElementsByClassName("btn")[1];
var message = document.getElementsByClassName("message")[0];
    
button.onclick = function(event){
    event.preventDefault();

    if (input.value < 1){
        // console.log("Please Enter A Valid Email Address");
        message.innerHTML ="Please Enter A Valid Email Address";
    }else{
        message.innerHTML ="Thank You! Your email address " + input.value +" has been added to our mailing list!";
    }
}

}
