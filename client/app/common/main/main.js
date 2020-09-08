import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';

let mainModule = angular.module('main', [
  uiRouter
])
.component('main', mainComponent)
.name;

// Timeout to ensure DOM elements are created before Quill/Modal
setTimeout( () =>
{

  /* Enables color change on quill */
  var ColorClass = Quill.import('attributors/class/color');
  Quill.register(ColorClass, true);

  var quill = new Quill('#text-editor', {
    theme: 'bubble',
    debug: 'info',
  });
  var quill = new Quill('#link-editor', {
    theme: 'bubble',
    debug: 'info'
  });

    //- LOGO MODAL SELECTION
    let logoModal = document.getElementById("logoModal");
    // When the user clicks on the button, open the modal
    document.getElementById('logoBtn').addEventListener('click', () => {
      logoModal.style.display = "block";
    });
    // When the user clicks on <span> (x), close the modal
    document.getElementsByClassName('close')[0].addEventListener('click', () => {
      logoModal.style.display = "none";
    });
    let logoSelected = document.getElementById('logoSelected');

  let logos = [
    {
      name: 'trade',
      image: 'https://tradetools.co/wp-content/uploads/2020/06/tradetools-logo-1.svg'
    },
    {
      name: 'engie',
      image: 'https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1441449491/m90vfcboxyd8vbhatsmn.png'
    },
    {
      name: 'porto',
      image: 'https://logospng.org/download/portobello/logo-portobello-cinza-256.png'
    },
    {
      name: 'paper',
      image: 'http://www.bopapergroup.com/wp-content/themes/bopaper/img/group-269.svg'
    },
  ];

  // Assigns a picture for every ID
  logos.forEach((logo) => {
    document.getElementById(logo.name).addEventListener('click', () => {
      logoSelected.setAttribute('src',logo.image);
      logoModal.style.display = "none";
    });
  });

    //- BIG MODAL SELECTION

    let bigModal = document.getElementById("bigModal");
    // When the user clicks on the button, open the modal
    document.getElementById('bigBtn').addEventListener('click', () => {
      bigModal.style.display = "block";
    });
    // When the user clicks on <span> (x), close the modal
    document.getElementsByClassName('close')[1].addEventListener('click', () => {
      bigModal.style.display = "none";
    });
    let bigSelected = document.getElementById('bigSelected');

    let bigs = [
      {
        name: 'office',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      },
      {
        name: 'street',
        image: 'https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      },
      {
        name: 'traffic',
        image: 'https://images.unsplash.com/photo-1530685932526-48ec92998eaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      },
      {
        name: 'lights',
        image: 'https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      },
    ];

  // Assigns a picture for every ID
    bigs.forEach((big) => {
      document.getElementById(big.name).addEventListener('click', () => {
        bigSelected.setAttribute('src',big.image);
        bigModal.style.display = "none";
      });
    });

}, 150 );

export default mainModule;



