// coreSpeedTest.settings.latencyImage("one.gif");   // Set custom file to test latency speed
// coreSpeedTest.settings.downloadImage("two.jpg");  // Set custom file to test download speed
// coreSpeedTest.test();                             // Test on load of page

app = angular.module('SpeedTest', ['ngSanitize']);
app.controller('TestCtrl', function ($scope) {

    $scope.startLatency = 0;
    $scope.speedBps = 0;
    $scope.speedKbps = 0;
    $scope.speedMbps = 0;
    $scope.buttonText = 'Test';

    $scope.startTest = function () {
        $scope.buttonText = '<i class=\'icon-refresh icon-spin\'></i>';
        coreSpeedTest.test(function () {
            setSpeedValues();
        });
    };

    function setSpeedValues() {
        $scope.buttonText = 'Test Complete';
        $scope.startLatency = coreSpeedTest.latencyTime();
        $scope.speedBps = coreSpeedTest.speedBps();
        $scope.speedKbps = coreSpeedTest.speedKbps();
        $scope.speedMbps = coreSpeedTest.speedMbps();
        $scope.$apply();

        console.log("Configuring Download Speeds");
        console.log($scope.speedBps + " Bps");
        console.log($scope.speedKbps + " Kbps");
        console.log($scope.speedMbps + " Mbps");
    }
});