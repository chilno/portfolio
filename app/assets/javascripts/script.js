$(document).ready(function(){
    var swap1 = $(".glyphicon").css("color");
    var swap2 ="white";
    var swap;
    
    $("#navbar-btn").click(function() {
        var scrollPosition = $(document).scrollTop();
        swap = swap2;
        swap2=swap1;
        swap1=swap;
        if(scrollPosition===0){
            $("#span-btn").toggleClass("glyphicon-minus");
            $("#navbar").toggleClass("scrolled");
            $("#navbar a, .glyphicon").css("color",swap);
        }else{
            $("#span-btn").toggleClass("glyphicon-minus");
            $("#navbar").addClass("scrolled");
            $("#navbar a, .glyphicon").css("color","white");
        }
    });

    $('#links a').hover(function(){
        $(this).siblings().find('img').addClass('filter');
    }, function(){
        $(this).siblings().find('img').removeClass('filter');
    });
    
    $(document).scroll(function(){
        /*swap1 = $(".glyphicon").css("color");
        swap2 ="white";*/
        var scrollPosition = $(this).scrollTop();
        if(scrollPosition !== 0){
            $("#navbar").addClass("scrolled");
            $("#navbar a, .glyphicon").css("color","white");
        }else{
            $("#navbar").removeClass("scrolled");
            $("#navbar a, .glyphicon").css("color","rgb(255,215,10)");
        }
    });
});