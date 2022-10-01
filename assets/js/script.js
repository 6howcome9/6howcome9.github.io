window.onload = () => {
  // navigation drawer
  const $toggle = document.querySelector('#nav-toggle');
  if ($toggle) {
    $toggle.checked = localStorage.getItem('isExpanded') === 'true';
    // check screen width
    if (window.innerWidth < 920) {
      localStorage.setItem('isExpanded', false);
      $toggle.checked = false;
    }
  }
  // theme
  document.documentElement.className = localStorage.getItem('colorTheme')
    ? localStorage.getItem('colorTheme')
    : 'dark';
  const $theme = document.querySelector('#theme-toggle');
  if ($theme) {
    $theme.checked = localStorage.getItem('colorTheme') === 'light';
  }
};

function toggleHandler($toggle) {
  localStorage.setItem('isExpanded', $toggle.checked);
}

function themeHandler($toggle) {
  const theme = $toggle.checked ? 'light' : 'dark';

  localStorage.setItem('colorTheme', theme);
  document.documentElement.className = theme;
}
