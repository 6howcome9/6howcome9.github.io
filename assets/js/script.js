window.onload = () => {
  if (window.innerWidth < 920) {
    const $toggle = document.querySelector('#nav_toggle');
    $toggle.checked = false;
  }
};
