$(function() {

  var _consoleLog = console.log;
  console.sep = function(n) {
    do { console.log(); n-=1; } while(n);
  }

  $(".inline-repl").on("keypress", function(e) {
    if (e.which === 18) {
      var $codeEls = $(this).find("pre code");
      var $code    = $codeEls.first();
      var $console = $codeEls.last();

      $code.blur();
      var code = $code[0].innerText || $code[0].textContent;
      $code.html( hljs.highlight('javascript', code).value );

      console.log = function() {
        var args = Array.prototype.slice.call(arguments);
        var argStr = args.map(function(arg){ return arg; String(arg); }).join(" ");
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
