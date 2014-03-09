app = angular.module('SpeedTest', ['ngSanitize']);

app.controller('TestCtrl', function ($scope) {

    $scope.startLatency = 0;
    $scope.downloadSpeed = '';
    $scope.speedBps = 0;
    $scope.speedKbps = 0;
    $scope.speedMbps = 0;

    $scope.buttonText = 'Test';

    var startTime, endTime;

    $scope.startTest = function () {
        getStartLatencySpeed(getDownloadSpeed);
    };

    function getDownloadSpeed() {
        var imageAddr = 'imageLarge.jpg' + '?n=' + Math.random();
        var download = new Image();
        download.src = imageAddr;

        startTime = (new Date()).getTime();
        download.onload = function () {
            endTime = (new Date()).getTime();
            showDownloadResults();
            $scope.buttonText = 'Test';
            $scope.$apply();
        }
    }

    function showDownloadResults() {
        var downloadSize = [236197]; // Bytes for large file
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        $scope.speedBps = (bitsLoaded / duration).toFixed(3);
        $scope.speedKbps = ($scope.speedBps / 1024).toFixed(3);
        $scope.speedMbps = ($scope.speedKbps / 1024).toFixed(3);
    }

    function getStartLatencySpeed() {
        $scope.buttonText = '<i class=\'icon-refresh icon-spin\'></i>';

        var latencyDuration;
        var startLatencyTime, endLatencyTime;

        var imageAddr = "imageSmall.gif" + "?n=" + Math.random();
        var downloadLatency = new Image();
        downloadLatency.src = imageAddr;

        startLatencyTime = (new Date()).getTime();
        downloadLatency.onload = function () {
            endLatencyTime = (new Date()).getTime();
            latencyDuration = (endLatencyTime - startLatencyTime) / 1000;
            $scope.startLatency = latencyDuration;
            getDownloadSpeed();
        }
    }
});