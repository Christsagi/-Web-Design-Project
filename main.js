let nav = document.querySelector(".navbar");
//-------------arrow Function----------//
nav.addEventListener("click", (event) => {
        nav.querySelector("a.active")?.classList.remove('active');
        event.target.classList.add('active');
       
    
});
//-----------------menu-bar---------------//

let menuBar=document.getElementById("menu-bar");
let show=document.getElementsByClassName("navbar")

menuBar.addEventListener("click",(event) =>{
    
    if (show[0].style.display === "block") {
        show[0].style.display = "none";  // Hide the navbar
    } else {
        show[0].style.display = "block"; // Show the navbar
    }

})
//----------------------------Mail function------------------------------------//
function SendMail(){
    var params={
        fullName: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobNumber: document.getElementById("num").value,
        sub: document.getElementById("sub").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_lbb6nug";
    const templateID = "template_jtxp5a8";

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.getElementById("num").value = "";
         document.getElementById("sub").value = "";
         document.getElementById("message").value = "";
         console.log(res);
         alert("Your Message sent succesfully");

    })
    .catch((err) => console.log(err))
}
    

