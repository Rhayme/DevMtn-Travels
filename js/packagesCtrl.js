angular.module('devmtnTravel').controller('packagesCtrl', function($scope, $stateParams, mainSrv) {
    var country = $stateParams.country;

    //console.log($stateParams)
    getPackages(country);


    function getPackages(country) {
        console.log('country in controller', country)
        $scope.packages = mainSrv.getPackageInfo(country);
    }
})