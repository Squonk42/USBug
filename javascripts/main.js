var viewer = null;

$(function() {

    // Initialize JQuery accordion        
    $("#accordion").accordion({ autoHeight: false, collapsible: true, active: 0 });
    //set accordion header options
    $("#accordion").accordion("option", "icons", 
    { 'header': 'ui-icon-carat-1-e', 'headerSelected': 'ui-icon-carat-1-s' });

    // Initialize FAQ collapsible
    $('#faq h4').click(function() {
	$(this).next().toggle();
	return false;
    }).next().hide();

    // Initialize JQuery CPU DataTable
    $('#cpu').dataTable({"bJQueryUI": true,
			 "bPaginate": false,
			 "bInfo": false,
			 "fnDrawCallback": function( oSettings ) {
			     $('#cpu tr:odd').css({backgroundColor: '#ccc'});
			     $('#cpu tr:even').css({backgroundColor: 'transparent'});
			 },
			 "aoColumnDefs": [ 
			     {"bSortable": false, "aTargets": [2, 3, 4, 5, 6, 7, 8]},
			 ]});

    // Initialize SeaDragon Deep Zoom Schematic
    viewer = new Seadragon.Viewer("schematic");
    viewer.openDzi("http://cache.zoom.it/content/8R4D.dzi",
		   '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="png" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="3508" Height="2479" /></Image>');
});
