
/*Функция обработчик включения стилей*/
    function CecutientOn(){
        $('#CecutientOn').css("display","none");
        $('#CecutientOff').css("display","inline-block");

        $.cookie("CecutientCookie", "on");
        return false;
    }
    /*Функции изменения размера шрифта*/
    function SmallFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrap, .container p, #wrap *').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
            $.cookie("fonts", "small");
            return false;
        }
    }
    function MediumFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrap, .container p, #wrap *').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
            $.cookie("fonts", "medium");
            return false;
        }
    }
    function BigFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrap, .container p, #wrap *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
            $.cookie("fonts", "big");
            return false;
        }
    }
    /*Функции обработчик отображения изображений*/
    function ImageOn(){
        if ($.cookie("CecutientCookie")=="on"){
            $('img').css("display","inline-block");
            $('#ImageOff').css("display","inline-block");
            $('#ImageOn').css("display","none");
            $.cookie("image", "on");
            return false;
        }
    }
    function ImageOff(){
        if ($.cookie("CecutientCookie")=="on"){
            $('img').css("display","none");
            $('#ImageOff').css("display","none");
            $('#ImageOn').css("display","inline-block");
            $('#CecutientBtn img').css("display","inline-block");
            $.cookie("image", "off");
            return false;
        }
    }
    /*Функции изменения цветовой схема*/
    function SmallFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrap, .container p, #wrap *').removeClass("MediumFonts BigFonts").addClass("SmallFonts");
            $.cookie("fonts", "small");
            return false;
        }
    }

    function MediumFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrap, .container p, #wrap *').removeClass("SmallFonts BigFonts").addClass("MediumFonts");
            $.cookie("fonts", "medium");
            return false;
        }
    }

    function BigFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrap, .container p, #wrap *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
            $.cookie("fonts", "big");
            return false;
        }
    }

    function BigFonts(){
        if ($.cookie("CecutientCookie")=="on"){
            $('#wrap, .container p, #wrap *').removeClass("SmallFonts MediumFonts").addClass("BigFonts");
            $.cookie("fonts", "big");
            return false;
        }
    }
    function WhiteStyle(){
        if ($.cookie("CecutientCookie")=="on"){
                        $('body, html, #wrap *').removeClass("BlackStyle BlueStyle GreenStyle").addClass("WhiteStyle");

                        $('body, html').css("background","#fff");
                        $('.navbar-default .navbar-toggle .icon-bar').attr('style', 'background: #000 !important');
            $.cookie("style", "white");
            return false;
        }
    }
    function BlackStyle(){
        if ($.cookie("CecutientCookie")=="on"){
                        $('body, html, #wrap *').removeClass("WhiteStyle BlueStyle GreenStyle").addClass("BlackStyle");

                        $('body, html').css("background","#000");
                        $('.navbar-default .navbar-toggle .icon-bar').attr('style', 'background: #fff !important');
            $.cookie("style", "black");
            return false;
        }
    }
    function BlueStyle(){
        if ($.cookie("CecutientCookie")=="on"){
                     $('body, html, #wrap *').removeClass("WhiteStyle BlackStyle GreenStyle").addClass("BlueStyle");

                        $('body, html').css("background","#9DD1FF");
                        $('.navbar-default .navbar-toggle .icon-bar').attr('style', 'background: #063462 !important');
            $.cookie("style", "blue");
            return false;
        }
    }
    function GreenStyle(){
        if ($.cookie("CecutientCookie")=="on"){
                        $('body, html, #wrap *').removeClass("WhiteStyle BlackStyle BlueStyle").addClass("GreenStyle");

                        $('body, html').css("background","#3B2716");
                        $('.navbar-default .navbar-toggle .icon-bar').attr('style', 'background: #A9E44D !important');
            $.cookie("style", "green");
            return false;
        }
    }
$(document).ready(function(){

    var CecutientMenuShow = 0;

    $.cookie.defaults = { path: '/', expires: 365 };

    $('#CecutientBtn').on('click', function(){
        CecutientOn();
        WhiteStyle();
        if(CecutientMenuShow === 0){
            if ($(window).width() > 768) {
                $('#CecutientWrapper').slideDown(500);
                $('#wrap').animate({"top":"40px"}, 500);
            } else {
                $('#CecutientWrapper').slideDown(500);
                $('#wrap').animate({"top":"180px"}, 500);
            }
            CecutientMenuShow = 1;
        } else {
            $('#CecutientWrapper').slideUp(500);
            $('#wrap').animate({"top":"0px"}, 500);
            CecutientMenuShow = 0;
        }
        return false;
    });

    if ($.cookie("CecutientCookie")=="on"){
        CecutientOn();
        if ($.cookie("fonts")=="small"){SmallFonts();}
        if ($.cookie("fonts")=="medium"){MediumFonts();}
        if ($.cookie("fonts")=="big"){BigFonts();}
        if ($.cookie("image")=="on"){ImageOn();}
        if ($.cookie("image")=="off"){ImageOff();}
        if ($.cookie("style")=="white"){WhiteStyle();}
        if ($.cookie("style")=="black"){BlackStyle();}
        if ($.cookie("style")=="blue"){BlueStyle();}
        if ($.cookie("style")=="green"){GreenStyle();}
    }

    /*alert($.cookie("fonts")+'&'+$.cookie("CecutientCookie"));*/
    /*Включение стилей для слабовидящих*/
    $('#CecutientOn').on('click',function(){CecutientOn(); WhiteStyle();});
    /*Включение выключение изображений*/
    $('#ImageOn').on('click',function(){ImageOn();});
    $('#ImageOff').on('click',function(){ImageOff();});
    /*Размер шрифта*/
    $('#SmallFonts').on('click',function(){SmallFonts();});
    $('#MediumFonts').on('click',function(){MediumFonts();});
    $('#BigFonts').on('click',function(){BigFonts();});
    /*Цветовая схема*/
    $('#WhiteStyle').on('click',function(){WhiteStyle();});
    $('#BlackStyle').on('click',function(){BlackStyle();});
    $('#BlueStyle').on('click',function(){BlueStyle();});
    $('#GreenStyle').on('click',function(){GreenStyle();});
    
    /*Отключение версии для слабовидящих*/
    $('#CecutientOff').on('click',function(){
        $.removeCookie("CecutientCookie", { path: '/'});
        $.removeCookie("style", { path: '/'});
        $.removeCookie("image", { path: '/'});
        $.removeCookie("fonts", { path: '/'});
        window.location.reload();
        return false;
    });
});
