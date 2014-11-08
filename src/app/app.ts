/// <reference path="../types/types.ts"/>


/* @ngInject */
function appConfig($urlRouterProvider:ng.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
}

angular
    .module("gdgApp", [
        "templates",
        "gdgApp.home",
        "ui.router.state",
        "ngMaterial"
    ])
    .config(appConfig);
