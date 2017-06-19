angular.module('devmtnTravel').controller('bookedCtrl', function($scope, mainSrv, $stateParams) {

    mainSrv.packageInfo.forEach(function(package) {
        //  console.log('callback function package', package);
        if (package.id == $stateParams.id) {
            $scope.package = package;
        }
        // console.log('$scope.package', package);
    });

});