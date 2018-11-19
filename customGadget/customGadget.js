$(document).ready(function () {
    $('ul.tabs,ul.pills').each(function(){
        
        var $active, $content, $links = $(this).find('a');
        
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');
      
        $content = $($active[0].hash);
      
        $links.not($active).each(function () {
          $(this.hash).hide();
        });
      
        $(this).on('click', 'a', function(e){
          
          $active.removeClass('active');
          $content.hide();
         
          $active = $(this);
          $content = $(this.hash);
          
          $active.addClass('active');
          $content.show();
          e.preventDefault();
        });
      });
    

    //divice add popup
    $("#divice_add_trigger").click(function(){
        $("#device_add_popup").fadeIn().delay(100);
        $("#device_add_popup .popup_container").delay(100).slideDown();
    });
    $(".popup_close").click(function(){
        $("#device_add_popup .popup_container").slideUp();
        $("#device_add_popup").delay(100).fadeOut();
    });
});

$(".quick_actions_wraper .nav-pills a").click(function(){
    $(this).toggleClass("active");
});


