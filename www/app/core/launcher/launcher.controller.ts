'use strict';

module RailTech {

export class LauncherController {

    private ticketingSite = 'http://m-tickets.virgintrainseastcoast.com/webtis-ec/travel/search';

    public static $inject = [
        '$scope',
        'ionicMaterialInk', 
        'ionicMaterialMotion'];

    constructor(
            private $scope,
            ionicMaterialInk, 
            ionicMaterialMotion) {

        $scope.$parent.showHeader();
        $scope.$parent.setExpanded(true);

        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });
        ionicMaterialMotion.fadeSlideInRight({
            selector: '.animate-fade-slide-in .item'
        });
    }

    launchTicketing() {

        try {
            cordova.ThemeableBrowser.open(this.ticketingSite, '_blank', {statusbar: { color: '#B71C1C' }, toolbar: { height: 44, color: '#B71C1C' }, title: { color: '#B71C1C', showPageTitle: false }, closeButton: { wwwImage: 'img/close.png', align: 'left', event: 'closePressed' }});
        }
        catch (err) {
            // Compatibility for in-browser.
            window.open(this.ticketingSite, "_self");
        }
    }

}

angular.module('railtech')
    .controller('LauncherController', LauncherController)


} // RailTech