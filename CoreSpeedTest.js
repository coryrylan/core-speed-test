window.coreSpeedTest = (function () {
    var startTime, endTime, _settings, _callback, _latencyTime = 0, _speedbps = 0, _speedKbps = 0, _speedMbps = 0;
    var _downloadImage = 'imageLarge.jpg', _latencyImage = 'imageSmall.gif';

    function getLatencySpeed(callback) {
        var latencyDuration, latencyStartTime, latencyEndTime;
        var imageAddr = _latencyImage + "?n=" + Math.random();
        var latencyTestImage = new Image();

        latencyStartTime = (new Date()).getTime();
        latencyTestImage.src = imageAddr;
        latencyTestImage.onload = function () {
            latencyEndTime = (new Date()).getTime();
            _latencyTime = (latencyEndTime - latencyStartTime) / 1000;
            getDownloadSpeed();
        }
    }

    function getDownloadSpeed() {
        var imageAddr = _downloadImage + '?n=' + Math.random();
        var download = new Image();

        startTime = (new Date()).getTime();
        download.src = imageAddr;
        download.onload = function () {
            endTime = (new Date()).getTime();
            setDownloadSpeeds();
        }
    }

    function setDownloadSpeeds() {
        var downloadSize = [236197]; // Num of Bytes for large file
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;

        _speedBps = (bitsLoaded / duration).toFixed(3);
        _speedKbps = (_speedBps / 1024).toFixed(3);
        _speedMbps = (_speedKbps / 1024).toFixed(3);

        if (_callback) {
            _callback();
        }
    }

    return {
        settings: {
            downloadImage: function (e) { if (e) { _downloadImage = e } },
            latencyImage:  function (e) { if (e) { _latencyImage  = e } }
        },

        latencyTime: function () { return _latencyTime },
        speedBps: function () { return _speedBps },
        speedKbps: function () { return _speedKbps },
        speedMbps: function () { return _speedMbps },

        init: function () {
            _settings = this.settings;
        },

        test: function (callback) {
            _settings = this.settings;
            getLatencySpeed();
            if (callback) {
                _callback = callback;
            }
        }
    };
}());
coreSpeedTest.init();