// Make sure sw are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function(evt) {
    navigator.serviceWorker
      .register("../sw_cache_site.js")
      .then(function(reg) {
        console.log("Service Worker: Registered (Pages)");
      })
      .catch(function(err) {
        console.log("Service Worker error: " + err.message);
      });
  });
}

(function($) {
  // Begin jQuery
  $(function() {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function(e) {
      $(this)
        .siblings(".nav-dropdown")
        .toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown")
        .not($(this).siblings())
        .hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function() {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function() {
      $("nav ul").toggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function() {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery
