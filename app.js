$(document).ready(function(){
     $('.fruit').on('mouseenter','img',function(){
        $(this).closest('.fruit').find('h3').slideToggle();  
    });  
    $('#kilo').on('change',function(){
        var price = +$(this).closest('.fruit').data('price');
        var quantity = +$(this).val();   
        $('#total').text(price * quantity);
    });
});
      


    

 
 


