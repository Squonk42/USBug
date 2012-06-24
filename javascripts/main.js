$(function() {
    //initialize accordion        
    $("#accordion").accordion({ active: false });
    //set accordion header options
    $("#accordion").accordion("option", "icons", 
    { 'header': 'ui-icon-carat-1-e', 'headerSelected': 'ui-icon-carat-1-s' });
});
