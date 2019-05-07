console.log('header.js loading')
requirejs(['config'], () => {
  requirejs(['jquery'], ($) => {
    // console.log($)
    var Load = function () {
      this.htmlLoad();

    }
    Load.prototype = {
      htmlLoad: function () {
        $("header").load("../html/header.html");
        // $.get("./header.html",$.proxy(this.showList,this))
        // $("footer").load("./footer.html");
        console.log($('header'))
      },
    }

    new Load()
  })
})
