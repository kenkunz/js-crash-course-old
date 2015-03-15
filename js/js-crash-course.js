$(function() {

  $("pre.js-run").each(function() {
    var $el = $(this);

    $('<a href="#">Run</a>').on("click", function(e) {
        e.preventDefault();
        console.clear && console.clear();
        eval($el.text());
      }).insertAfter($el);
  });

});
