angular.module('devmtnTravel').controller('locationCtrl', function($scope, mainSrv) {

    getData();
    getPackageInfo();

    function getData() {
        $scope.locations = mainSrv.getTravelInfo();
    };

    function getPackageInfo() {
        $scope.packages = mainSrv.getPackageInfo();
    };

})