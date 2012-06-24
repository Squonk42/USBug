$(function() {
    //initialize accordion        
    $("#accordion").accordion({ autoHeight: false, collapsible: true, active: 0 });
    //set accordion header options
    $("#accordion").accordion("option", "icons", 
    { 'header': 'ui-icon-carat-1-e', 'headerSelected': 'ui-icon-carat-1-s' });
    $('#faq h4').click(function() {
	$(this).next().toggle();
	return false;
    }).next().hide();
    $('#cpu tr:odd').css({backgroundColor: '#ccc'});
    $("#cpu tr:last").css("border-bottom", "1px solid");
    $("#cpu tr:first").css("border", "1px solid");
    $("#cpu tr:first").css("font-weight", "700");
});
