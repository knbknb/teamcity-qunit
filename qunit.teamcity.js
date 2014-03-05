//rewritten for TeamCity 8.1
QUnit.moduleStart = function (args) {
	//name = args.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	console.log("##teamcity[testSuiteStarted name='" + args.name + "']");
};

QUnit.moduleDone = function (args) {
	args.name=cleanup(args.name);
	console.log("##teamcity[message text='# of tests in suite: " + args.total + ", passed: " + args.passed + ", failures:" + args.failed + "']");
	console.log("##teamcity[testSuiteFinished name='" + args.name + "']");
};

QUnit.testStart = function (args) {
	args.name=cleanup(args.name);
	console.log("##teamcity[testStarted name='" + args.name + "']");
};

QUnit.testDone = function (args) {
	args.name=cleanup(args.name);

	if (args.failed > 0) {
		console.log("##teamcity[testFailed name='" + name + "'"
				 + " message='Assertions failed: " + args.failed + ", passed: " + args.passed 
				 + ", total: " + args.total + "']"
				 + " status='FAILURE']");

		//console.log("##teamcity[buildStatus status='FAILURE' text='{build.status.text} " + failed + " failures']");
		//console.log("##teamcity[message text=' + " + failures + "+ ' status='ERROR']");
	}
	//if(typeof args.name != 'undefined'){
		console.log("##teamcity[testFinished name='" + args.name + "']");
	//}
	
};

function cleanup(str){
	var name = str;
	name = name.replace(/^\s\s*/, '');
	name = name.replace(/\s\s*$/, '');
	name = name.replace(/'/g, "|'");
	//name = name.replace(/"/g, '|"');
	return name;
}