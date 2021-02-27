$(document).ready(function() {
    }); 

// Drag/Drop  Sorts Items using jQuery UI
$(function() {
    $('.Filmmaking-Equipment-organizer').sortable();
    $('.Filmmaking-Equipment-organizer').disableSelection();
});

// Remove Items on Click 
$(document).on('click','.remove-item',function() {
    $(this).parent().remove();
})

    // adds items to list
    $(document).ready(function(){
        $("button").click(function(){
            $("#example").append('<li>"+ test +"</li>');
        });
    });
