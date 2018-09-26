/*global $*/

function showTab(selector) {
    $(".tabs-menu li").removeClass("active");
    $(".tabs-menu a[href='" + selector + "']").parent("li").addClass("active");
    
    $(".tabs-content > section").hide();
    $(selector).show();
}

$(document).ready(function() {
    showTab();
    
    $(".tabs-menu a").hover(function() {
        var selector = $(this).attr("href");
        showTab(selector);
        
        return false;
    });
});
