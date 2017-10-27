import angular from 'angular';

class RandomNames {
  constructor() {
    this.names = ['John', 'Elisa', 'Mark', 'Annie'];
  }

  getName() {
    let totalNames = this.names.length;
    let rand = Math.floor(Math.random() * totalNames);
    return this.names[rand];
  }
}

export default angular.module('services.random-names', [])
  .service('randomNames', RandomNames)
  .name;