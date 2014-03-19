<h1>SpeedTest</h1>

<a href="http://splintercode.github.io/CoreSpeedTest/" target="_none">splintercode.github.io/CoreSpeedTest/</a>

<p>Small experimental speed test tool using JavaScript<p>

<p> This is a small side project I am working on. It is a speed test tool to test my server response on any signal/device.
I would like to experiment with how to get the most accurate result possible using only JavaScript.
There are many factors that contribute to connection speed. This should not be used to decide critical 
application decisions. Also to note this gives a estimate speed based on the connection to server it is hosted on. Depending on 
where the code is hosted will effect the results.</p>

<p>To more accurately test speeds two files are downloaded. 
   First a very small gif less than 35 bytes to test latency times. 
   The second a 50kb jpg to test average download speed. </p>
<pre>
<code>
  // Core Speed Test must be run at document load or when new test data is desired.
  coreSpeedTest.test();

  // Get values from most recent test.
  coreSpeedTest.latencyTime();                             // Get startup latency time
  coreSpeedTest.speedBps();                                // Get Bps download speed
  coreSpeedTest.speedKbps();                               // Get Kbps download speed
  coreSpeedTest.speedMbps();                               // Get Mbps download speed

  coreSpeedTest.settings.latencyImage("imageSmall.gif");   // Set custom file to test latency speed  ( default 35 bytes img )
  coreSpeedTest.settings.downloadImage("imageLarge.jpg");  // Set custom file to test download speed ( default 50kb img )
</code>
</pre>
  
  <p>Please feel free to offer suggestions or contribute. </p>

<h2>License</h2>
<p>
This code is free to use under the MIT License.
Read more at <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a>
</p>
