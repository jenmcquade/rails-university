import 'materialize-css/dist/js/materialize'

$(document).on('turbolinks:load', function() {
  $(".dropdown-trigger").dropdown();
  $('.sidenav').sidenav();
  $('#fade-out-target').fadeOut(3000);
});