//= require ../vendor/mediaCheck/js/mediaCheck.js

(function ($) {
  /*
   * Change the default behavior of the Bootstrap menus to display submenus on hover.
   */
  Drupal.behaviors.menuHover = {
    attach: function (context, settings) {
      // we only want this for tablets or bigger devices.
      mediaCheck({
        media: '(min-width: 480px)',
        entry: function() {
          $('ul.nav li.dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeIn(200);
          }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeOut(200);
          });
        }
      });
    }
  };
})(jQuery);