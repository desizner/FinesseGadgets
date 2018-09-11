$(document).ready(function () {
    $('ul.tabs,ul.pills').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and its associated content
        var $active, $content, $links = $(this).find('a');
      
        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');
      
        $content = $($active[0].hash);
      
        // Hide the remaining content
        $links.not($active).each(function () {
          $(this.hash).hide();
        });
      
        // Bind the click event handler
        $(this).on('click', 'a', function(e){
          // Make the old tab inactive.
          $active.removeClass('active');
          $content.hide();
      
          // Update the variables with the new link and content
          $active = $(this);
          $content = $(this.hash);
      
          // Make the tab active.
          $active.addClass('active');
          $content.show();
      
          // Prevent the anchor's default click action
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

//Other wifi SSID
$(function() {
    $('#other_wifiSSID,#other_issueType').hide(); 
    $('#select_wifiSSID').change(function(){
        if($('#select_wifiSSID').val() == 'Other') {
            $('#other_wifiSSID').slideDown(); 
        } else {
            $('#other_wifiSSID').slideUp(); 
        } 
    });
    $('#select_issueType').change(function(){
        if($('#select_issueType').val() == 'Others') {
            $('#other_issueType').slideDown(); 
        } else {
            $('#other_issueType').slideUp(); 
        } 
    });
});

//datepicker
$( function() {
    $( "#datepicker" ).datepicker({  
        changeYear: true,
        minDate: '-6M',
        maxDate: 0 
    });
  } );
$(window).load(function(){
    var phones = [{ "mask": "+1-###-###-####"}];
    $('#phonetextbox,#servicephonetextbox').inputmask({ 
        mask: phones, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9]", cardinality: 1}} 
    });
    var ssid = [{ "mask": "##:##:##:##:##:##"}];
    $('#ssidtextbox').inputmask({ 
        mask: ssid, 
        greedy: false, 
        definitions: { '#': { validator: "[0-9,a-z]", cardinality: 1}} 
    });
});