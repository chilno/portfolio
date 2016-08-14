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

    //Ajax form submit

    $("#form").submit(function(e){
        e.preventDefault();
        $.post('/create', $(this).serialize(), function(data){
            console.log(data);
            if(data.errors){
                for(err in data.errors){
                    $('body').append("<div class='alert alert-danger' style='position: fixed; top:50px; left:0; width:100%;'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Error! </strong>"+data.errors[err]+"</div>");
                }
            }else{
                $('body').append("<div class='alert alert-success' style='position: fixed; top:50px; left:0; width:100%;'><a href='#'' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>Success! </strong>"+ data.success +"</div>");
                $("#form")[0].reset();
                setTimeout(function(){
                    $(".alert").fadeOut();
                }, 5000);
            }
        });
    });
});