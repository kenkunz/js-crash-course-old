$(function() {

  var _consoleLog = console.log;
  console.sep = function() { console.log("\n--------------------\n"); }

  $(".inline-repl").on("keypress", function(e) {
    if (e.which === 18) {
      var $codeEls = $(this).find("pre code");
      var $code    = $codeEls.first();
      var $console = $codeEls.last();

      $code.blur();
      var code = $code[0].innerText || $code[0].textContent;
      $code.html( hljs.highlight('javascript', code).value );

      console.log = function() {
        var argStr = Array.prototype.join.call(arguments, " ");
        $console.text($console.text() + argStr + "\n");
        _consoleLog.apply(this, arguments);
      }

      $console.text("");
      try {
        eval(code);
      } catch(e) {
        $console.html('<span class="error">' + e.toString() + '</span>');
        throw e;
      } finally {
        console.log = _consoleLog;
      }

    }
  });

});
