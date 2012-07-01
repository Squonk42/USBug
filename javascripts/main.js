var viewer_schematic = null;
var viewer_layout = null;
var view_top = null;
var view_bottom = null;

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

    // Initialize JQuery BOM DataTable
    $('#bom').dataTable({"bJQueryUI": true,
			 "bPaginate": false,
			 "bInfo": false,
			 "fnDrawCallback": function( oSettings ) {
			     $('#bom tr:odd').css({backgroundColor: '#ccc'});
			     $('#bom tr:even').css({backgroundColor: 'transparent'});
			 }});

    // Initialize SeaDragon Deep Zoom Schematic
    viewer_schematic = new Seadragon.Viewer("schematic");
    viewer_schematic.openDzi("http://cache.zoom.it/content/8R4D.dzi",
			     '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="png" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="3508" Height="2479" /></Image>');

    // Initialize SeaDragon Deep Zoom Layout
    viewer_layout = new Seadragon.Viewer("layout");
    viewer_layout.openDzi("http://cache.zoom.it/content/v0f6.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="png" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="3076" Height="2038" /></Image>');

    // Initialize SeaDragon Deep Zoom Board Top
    viewer_top = new Seadragon.Viewer("board_top");
    viewer_top.openDzi("http://cache.zoom.it/content/mlVF.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="jpg" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="2363" Height="945" /></Image>');

    // Initialize SeaDragon Deep Zoom Board Bottom
    viewer_bottom = new Seadragon.Viewer("board_bottom");
    viewer_bottom.openDzi("http://cache.zoom.it/content/AIOz.dzi",
			  '<?xml version="1.0" encoding="utf-8"?><Image TileSize="254" Overlap="1" Format="jpg" ServerFormat="Default" xmlns="http://schemas.microsoft.com/deepzoom/2009"><Size Width="2363" Height="945" /></Image>');

    // Initialize main image fade-in
    $("#progression").hide();
    $("#progression").fadeIn(2000);

    $("a[rel=fancybox]").fancybox();
});
