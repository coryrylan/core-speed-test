$(document).ready(function () {
    var MOBILE = false;
    var BROADBAND = false;

    var speedBps;
    var speedKbps
    var speedMbps

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
            getDownloadResults();
            showDownloadResultes();
            setImages();
            $("#SpeedTest").html("Test");
        }
    }

    function getDownloadResults() {
        var downloadSize = [236197]; // Bytes for large file
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        speedBps = (bitsLoaded / duration).toFixed(3);
        speedKbps = (speedBps / 1024).toFixed(3);
        speedMbps = (speedKbps / 1024).toFixed(3);
    }

    function setImages() {
        if (speedMbps > 900) {
            $(".speedLoadImage").attr('src', $(".speedLoadImage").data("high-res"));
        }
        else {
            return;
        }
    }

    function showDownloadResultes() {
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