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