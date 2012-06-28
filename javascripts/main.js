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
    $('#cpu').dataTable({"bJQueryUI": true,
			 "bLengthChange": false,
			 "bPaginate": false,
			 "bInfo": false,
			 "fnDrawCallback": function( oSettings ) {
			     $('#cpu tr:odd').css({backgroundColor: '#ccc'});
			     $('#cpu tr:even').css({backgroundColor: 'transparent'});
			 }});
});
