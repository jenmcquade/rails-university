import 'materialize-css/dist/js/materialize'

$(document).on('turbolinks:load', function() {
  $(".dropdown-trigger").dropdown();
});