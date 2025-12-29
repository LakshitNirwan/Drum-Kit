let x=document.querySelectorAll(".drum");
for(var i=0;i<x.length;i++)
{
    x[i].addEventListener("click",function press()
{
    // "this" is used to refer to the current object or attribute we are currently on
    // this.style.color="white";
    let btnHtml=this.innerHTML;
    // switch (btnHtml) {
    //     case "w":
    //         var a1=new Audio("sounds/tom-1.mp3");
            
    //         a1.play();
    //         break;
    //     case "a":
    //         var a2=new Audio("sounds/tom-2.mp3");
    //         a2.play();
    //         break;
    //     case "s":
    //         var a3=new Audio("sounds/tom-3.mp3");
    //         a3.play();
    //         break;
    //     case "d":
    //         var a4=new Audio("sounds/tom-4.mp3");
    //         a4.play();
    //         break;
    //     case "j":
    //         var a5=new Audio("sounds/snare.mp3");
    //         a5.play();
    //         break;
    //     case "k":
    //         var a6=new Audio("sounds/crash.mp3");
    //         a6.play();
    //         break;
    //     case "l":
    //         var a7=new Audio("sounds/kick-bass.mp3");
    //         a7.play();
    //         break;
    //     default:
              
    //         break;
    // }

    // NOW Instead of writing a switch case i am passing a function which can be used to make sound based on the inner html of the button
    makeSound(btnHtml);
    btnAnimation(btnHtml);
});
}


//Now we will add an event listener which will check for key press and will make sound;
document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    btnAnimation(event.key);
});
//we  are using document as the entire page will listen for the event instead of just a button or obj or img or container
//"keydown" is used it is similar to "click" as it waits for the user to type a key as click waits for user to click an object 
// we will make a random object inside the function such as "event" which will be used to call the makeSound function
// makeSound(event.key) tells the code to execute the makesound func with the input key and pass it as event.key to the fuction for event execution;





// now we will make sound using keypress along with buttonpress
// key is executed while keydown
function makeSound(key)
{
    switch (key) {
        case "w":
            var a1=new Audio("sounds/tom-1.mp3");
            
            a1.play();
            break;
        case "a":
            var a2=new Audio("sounds/tom-2.mp3");
            a2.play();
            break;
        case "s":
            var a3=new Audio("sounds/tom-3.mp3");
            a3.play();
            break;
        case "d":
            var a4=new Audio("sounds/tom-4.mp3");
            a4.play();
            break;
        case "j":
            var a5=new Audio("sounds/snare.mp3");
            a5.play();
            break;
        case "k":
            var a6=new Audio("sounds/crash.mp3");
            a6.play();
            break;
        case "l":
            var a7=new Audio("sounds/kick-bass.mp3");
            a7.play();
            break;
        default:
              
            break;
    }
}




// Now we will add animations to the button depending on if they are pressed or not
function btnAnimation(currentKey)
{
    var animation=document.querySelector("."+currentKey);
    animation.classList.add("pressed");
    setTimeout(function(){animation.classList.remove("pressed");},100);
}

