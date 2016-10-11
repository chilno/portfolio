$(document).ready(function(){
    var swap1 = $(".glyphicon").css("color");
    var swap2 ="white";
    var swap;
    
    //

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

    //Smooth Scrolling

    $('a.scroll').click(function(e){
        e.preventDefault();
        var section = $(this).attr('href');
        $('html, body').animate({scrollTop: $(section).offset().top-50 }, 800);
    });

    $('a').click(function(e){
        if($(this).attr('href') == ""){
            e.preventDefault();
        }
    });

    $('#links a').hover(function(){
        $(this).siblings().find('img').addClass('filter');
    }, function(){
        $(this).siblings().find('img').removeClass('filter');
    });
    
    //Navbar Effects

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

    $('ul.nav > li').click(function (e) {
        //e.preventDefault();
        $('ul.nav > li').removeClass('active');
        $(this).addClass('active');
    });

    //Google Analytics
    
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-82646150-1', 'auto');
    ga('send', 'pageview');
});
