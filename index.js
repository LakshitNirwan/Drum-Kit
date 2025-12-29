// document.querySelector(".drum").addEventListener("click",function() {
//     alert("click");
// });
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        this.style.color="white";
    });
}