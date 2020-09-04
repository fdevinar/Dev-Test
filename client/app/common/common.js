import angular from 'angular';
import Main from './main/main';

let commonModule = angular.module('app.common', [
  Main
])
  
.name;

export default commonModule;
