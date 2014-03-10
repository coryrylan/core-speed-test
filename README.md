<h1>SpeedTest</h1>

<a href="http://splintercode.github.io/SpeedTest/" target="_none">splintercode.github.io/SpeedTest/</a>

<p>Small experimental speed test tool using JavaScript<p>

<p> This is a small side project I am working on. It is a speed test tool to test my server response on any signal/device.
I would like to experiment with how to get the most accurate result possible using only JavaScript.
There are many factors that contribute to connection speed. This should not be used to decide critical 
application decisions. Also to note this gives a estimate speed based on the connection to server it is hosted on. Depending on 
where the code is hosted will effect the results.</p>

<p>To more acurately test speeds two files are downloaded. 
   First a very small gif less than 35 byts to test latency times. 
   The second a 50kb jpg to test average download speed. </p>

<code>
  coreSpeedTest.settings.latencyImage("imageSmall.gif");   // Set custom file to test latency speed  ( default 35 bytes img )
  coreSpeedTest.settings.downloadImage("imageLarge.jpg");  // Set custom file to test download speed ( default 50kb img )
  coreSpeedTest.test();                             // Run Speed Test
</code>
  
  <p>Please feel free to offer sugestions or contribute. </p>

<h2>License</h2>
<p>
This code is free to use under the MIT License.
Read more at <a href="http://opensource.org/licenses/MIT" target="_blank">MIT License</a>
</p>
