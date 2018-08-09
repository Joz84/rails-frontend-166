import Typed from 'typed.js';
import swal from 'sweetalert';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Learn to code", "Tjrs au top!"],
    typeSpeed: 50,
    loop: true
  });
}

function bindSweetAlertButtonDemo() {
  const swalButton = document.getElementById('sweet-alert-demo');
  if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
      swal("Are you sure you want to do this?", {
        buttons: ["Oh noez!", "Aww yiss!"],
      });
    });
  }
}

export { loadDynamicBannerText, bindSweetAlertButtonDemo };
