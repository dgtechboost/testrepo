
module App {

    export class AppComponent implements ng.IComponentOptions {
        bindings: { [binding: string]: string };
        template: string;
        templateUrl: string;

        constructor() {
            this.bindings = {};
            this.template = `<div ui-view></div>`;
        }
    }

    angular.module('app').component('app', new AppComponent());
}