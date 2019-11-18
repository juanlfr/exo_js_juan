

//Exo 1
let footer = document.getElementsByTagName("footer")[0];

let OnClickFooter = function(){
   
    console.log("Click");
};

footer.addEventListener("click", OnClickFooter);

//Exo 1 bis

let footer2 = document.getElementsByTagName("footer")[0];

let MyCounter = 0;  

let OnClickFooter2 = function(){

    MyCounter++;
   
    console.log(MyCounter);

};

footer2.addEventListener("click", OnClickFooter2);

//Exo 2

let burguerBtn = document.querySelector("button.navbar-toggler");

let burguer = document.getElementById("navbarHeader");


    burguerBtn.addEventListener("click", function() {

        burguer.classList.toggle("collapse");
    } 
    )
// Exo 3

let firstCard = document.querySelector("div.col-md-4");

let editBtn = firstCard.querySelector("button.btn-outline-secondary");

    console.log(editBtn);

    console.log(firstCard);

    let redColor = function() {

        firstCard.style.color = "red";
    };

    editBtn.addEventListener("click", redColor);

// Exo 4


    let secondCard = document.querySelectorAll("div.col-md-4")[1];
    console.log(secondCard);
    editBtn2 = secondCard.querySelector("button.btn-outline-secondary");
    console.log(editBtn2);
    let greenColor = function() {
      if (secondCard.style.color === "green"){
        secondCard.style.color = "" ; 
      } 
      else {
        secondCard.style.color = "green";
      }

    };
    editBtn2.addEventListener("click", greenColor);

    //Exo 5

    let navbarCSS = document.getElementsByTagName("header")[0];
    console.log(navbarCSS);
    let linkCSS = document.head.lastElementChild;
    console.log(linkCSS);

    let disapearCSS = function(){
        if (linkCSS.disabled === false) {
            linkCSS.disabled = true
        }
        else {
            linkCSS.disabled = false
        }
    };

    navbarCSS.addEventListener("dblclick", disapearCSS);
    