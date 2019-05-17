$(document).ready(function(){
    var contador = 1;
    $('.menu').click(function(){
        if(contador==1){
            $('.m-option').css("display","block");
            $('.m-option a').css("display","block");
            $('.m-option').animate({
                height: '45px'
            });
            contador = 0;
            console.log(contador);
        }else{
            $('.m-option').animate({
                height: '0px'
            });
            $('.m-option a').css("display","none");
            contador = 1;
            console.log(contador);
        }
    });
    
});