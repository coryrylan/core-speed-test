window.coreSpeedTest = (function () {
    var _settings, _callback, _latencyTime = 0, _downloadTime, _speedbps = 0, _speedKbps = 0, _speedMbps = 0;
    var _downloadImage = 'imageLarge.jpg', _latencyImage = 'imageSmall.gif';

    function getLatencySpeed() {
        var startTime, endTime;
        var latencyImage = new Image();

        startTime = (new Date()).getTime();
        latencyImage.src = _latencyImage + "?n=" + Math.random();

        latencyImage.onload = function () {
            endTime = (new Date()).getTime();
            _latencyTime = (endTime - startTime) / 1000;
            getDownloadSpeed();
        }
    }

    function getDownloadSpeed() {
        var startTime, endTime;
        var downloadImage = new Image();

        startTime = (new Date()).getTime();
        downloadImage.src = _downloadImage + '?n=' + Math.random();

        downloadImage.onload = function () {
            endTime = (new Date()).getTime();
            _downloadTime = (endTime - startTime) / 1000;
            setDownloadSpeeds();
        }
    }

    function setDownloadSpeeds() {
        var downloadSize = [236197]; // Num of Bytes for large file
        var bitsLoaded = downloadSize * 8;

        _speedBps = (bitsLoaded / _downloadTime).toFixed(3);
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
        speedBps:    function () { return _speedBps    },
        speedKbps:   function () { return _speedKbps   },
        speedMbps:   function () { return _speedMbps   },

        init: function () {
            _settings = this.settings;
        },

        test: function (callback) {
            _settings = this.settings;

            if (callback) {
                _callback = callback;
            }

            getLatencySpeed();
        }
    };
}());
coreSpeedTest.init();