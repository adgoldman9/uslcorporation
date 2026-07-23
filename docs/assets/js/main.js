// USL Corporation static site — minimal vanilla JS
// Handles: mobile nav toggle, dropdown toggle for touch/keyboard users.
// No frameworks, no build step, per project technical requirements.

(function () {
  'use strict';

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var dropdown = document.querySelector('.nav-dropdown');
  var dropdownToggle = document.querySelector('.nav-dropdown-toggle');

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();
