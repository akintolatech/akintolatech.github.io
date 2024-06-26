$(document).ready(
    function(){

        

        $('.nav').click(
            function(){
                $('.pry-nav').toggleClass('open');

                // ham nav animation
                $('.bar1').toggleClass('active');
                $('.bar2').toggleClass('active');
                $('.bar3').toggleClass('active');
                $('.back-drop').show();
            }
        )
    }
)

// reset backdrop
let screenWidth = window.innerWidth

// if (screenWidth <= 760) {
//   backdrop.style.display = "none";
//   console.log(window.innerWidth);
// };



// let navToggle = document.getElementById("ham");

// let backdrop = document.querySelector(".back-drop");
// backdrop.style.display = "none";

// navToggle.addEventListener('click', toggleanimate);