$(document).ready(function(){
    $(window).scroll(function(event){
       var y = $(this).scrollTop();
        
        if (y>=300){
            $('#benefits').addClass('animated fadeInLeftBig');   
        }
        else if(y>=1000)
        {
            
        }
        else if (y>=1300)
        {
            
        }
    });
});