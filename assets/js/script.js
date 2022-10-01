window.onload = () => {
  const $toggle = document.querySelector('#nav_toggle');

  if ($toggle) {
    if (localStorage.getItem('isExpanded')) {
      $toggle.checked = true;
    } else {
      $toggle.checked = false;
    }

    if (window.innerWidth < 920) {
      $toggle.checked = false;
      localStorage.setItem('isExpanded', false);
    }
  }
};

function toggleHandler($toggle) {
  if ($toggle.checked) {
    localStorage.setItem('isExpanded', true);
  } else {
    localStorage.setItem('isExpanded', false);
  }
}
