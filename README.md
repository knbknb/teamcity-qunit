<h4>README.md</h4>

[This](https://github.com/knbknb/teamcity-qunit/raw/master/qunit.teamcity.js) single file is a rewrite of the file found at 

https://gist.github.com/stuartf7/1755675

That file does not work with TeamCity 8.1 because of API changes. My file takes these changes into account.

The key difference is that a single option hash is passed to the callback. The three-argument form is gone.

Before 8.1:

    QUnit.testDone = function (name, failures, total) {}

After 8.1:

    QUnit.testDone = function (args) {}
    
