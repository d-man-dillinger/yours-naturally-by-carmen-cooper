$(document).ready(function(){
    
    //form validation
    $('form').submit(function (event) {
      
        var form_ok = true;
        $(':input').removeClass('missing');
        
        $(':input').each(function () {
            
            if (! $(this).val() ){
                form_ok = false;
                $(this).addClass('contact-form missing');
            }
        });
        if (! form_ok) {
        event.preventDefault();
        alert('You missed a field!');
        }
    });

    //code for tabs
    $( "#tabs" ).tabs();
});