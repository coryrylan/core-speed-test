/*! 
    Cory Bateman http://www.webdesignis.me 
    MIT License http://opensource.org/licenses/MIT 
*/
$(document).ready(function () {
    var startTime, endTime;
    
    $("#SpeedTest").click(function () {
        getStartLatencySpeed(getDownloadSpeed);      
    });

    function getDownloadSpeed() {
        var imageAddr = "image2.jpg" + "?n=" + Math.random();
        var download = new Image();
            download.src = imageAddr;

        startTime = (new Date()).getTime();
        download.onload = function () {
            endTime = (new Date()).getTime();
            showDownloadResults();
            $("#SpeedTest").html("Test");
        }
    }

    function showDownloadResults() {
        var downloadSize = [236197]; // Bytes for large file
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(3);
        var speedKbps = (speedBps / 1024).toFixed(3);
        var speedMbps = (speedKbps / 1024).toFixed(3);
        $("#DownloadSpeed").html(
               speedBps + " bps <br />" +
               speedKbps + " Kbps <br />" +
               speedMbps + " Mbps <br />");
    }

    function getStartLatencySpeed() {
        $("#SpeedTest").html("<i class=\"icon-refresh icon-spin\"></i>");

        var latencyDuration;
        var startLatencyTime, endLatencyTime;
        //var downloadSize = [82]; // Bytes for small latency test file

        var imageAddr = "image.png" + "?n=" + Math.random();
        var downloadLatency = new Image();
            downloadLatency.src = imageAddr;

        startLatencyTime = (new Date()).getTime();
        downloadLatency.onload = function () {
            endLatencyTime = (new Date()).getTime();
            latencyDuration = (endLatencyTime - startLatencyTime) / 1000;
            $("#StartLatency").html(latencyDuration + "s");
            getDownloadSpeed();
        }
    }
});