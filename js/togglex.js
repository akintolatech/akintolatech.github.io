function toggleanimate() {

  
  let nav = document.querySelector(".pry-nav");
  let backdrop = document.querySelector(".back-drop");

  let bar1 = document.querySelector(".bar1");
  let bar2 = document.querySelector(".bar2");
  let bar3 = document.querySelector(".bar3");

  // Ham Nav Animation
  if (nav.className === "pry-nav") {
    
    nav.className += " open";

    // Bars of the ham nav icn
    bar1.className += " active";
    bar2.className += " active";
    bar3.className += " active";
    console.log(bar3.className);


    backdrop.style.display = "block";
    
  } else {


    nav.className = "pry-nav";
    backdrop.style.display = "none";
  }

  console.log("function activated");
  

//   console.log("hi");
}

// reset backdrop

let screenWidth = window.innerWidth

// if (screenWidth <= 760) {
//   backdrop.style.display = "none";
//   console.log(window.innerWidth);
// };



let navToggle = document.querySelector(".nav-toggle");

let backdrop = document.querySelector(".back-drop");
backdrop.style.display = "none";

navToggle.addEventListener('click', toggleanimate);