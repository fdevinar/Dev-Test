import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainComponent from './main.component';

let mainModule = angular.module('main', [
  uiRouter
])

.component('main', mainComponent)
  
.name;

// Quill before DOM
setTimeout( () =>
{
    var quill = new Quill('#text-editor', {
      theme: 'bubble',
      debug: 'info',
    });
    var quill = new Quill('#link-editor', {
      theme: 'bubble',
      debug: 'info',
    });
}, 50 );


export default mainModule;



