#!/usr/bin/env node

/**
	Copyright (c) 2016 Adobe Systems Incorporated. All rights reserved.

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
 */

var semver = require('semver');
var engines = require('../package').engines;
var ansi = require('ansi');

// Check node version		
if (!semver.satisfies(process.version, engines["node"]))
{
	var stderrCursor = ansi(process.stderr);
	stderrCursor.fg.red().bold().write("Invalid Node.js version(" + process.version + ").  AEMM requires " + engines["node"] + "\n").reset();
	process.exit(1);
}

var cli = require('../src/aemm-cli');
cli(process.argv);
