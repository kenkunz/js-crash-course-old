$(function() {

  $("pre.js-run").each(function() {
    var $el = $(this);

    $('<a href="#">Run</a>').on("click", function(e) {
        e.preventDefault();
        console.clear && console.clear();
        var code = $el[0].innerText || $el.text();
        eval(code);
      }).insertAfter($el);
  });

});
