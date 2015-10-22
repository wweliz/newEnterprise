var $ = require('jquery');
var foundation = require('foundation');

$(document).foundation();

// Show/hide the pricing details panel ///////////////////////////////////
$('.pricing-details').hide();

$('.toggle-panel-tools').click(function(e) {
  $(this).find('.fa').toggleClass('fa-rotate-45');
  $(this).parent().next().slideToggle(200);
  e.preventDefault();
});