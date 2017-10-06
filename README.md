# AppleDouble files sweeper

[![npm](https://img.shields.io/npm/v/dsweeper.svg)](https://www.npmjs.com/package/dsweeper) [![Build Status](https://api.travis-ci.org/simsalabim/dsweeper.svg?branch=master "Build Status")](https://travis-ci.org/simsalabim/dsweeper) [![Coverage Status](https://coveralls.io/repos/simsalabim/dsweeper/badge.svg)](https://coveralls.io/r/simsalabim/dsweeper) [![Dependency Status](https://david-dm.org/simsalabim/dsweeper.svg)](https://david-dm.org/simsalabim/dsweeper) [![devDependency Status](https://david-dm.org/simsalabim/dsweeper/dev-status.svg)](https://david-dm.org/simsalabim/dsweeper#info=devDependencies)

A tool that doesn't let AppleDouble `._whatever` files into folder that is kept on external HDD.
Helps keeping Dropbox clean.

I recently ran into [an issue](https://twitter.com/noRerih/status/613372377016070148): AppleDouble files started taking over
my Dropbox folder that is kept on external HDD. Some people hit the same issue ([1](https://www.dropboxforum.com/hc/communities/public/questions/201454519--AppleDouble-file-nightmare-This-should-not-be-happening-Fix-this-in-Dropbox-for-Mac-update-please-), [2](https://www.dropboxforum.com/hc/communities/public/questions/202940365--files)).
This tool helps fixing the problem.

## Installation

If you don't have Node.js installed, the fastest way would be to use [nvm](https://github.com/creationix/nvm) usgin cURL<br/>
`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash`
or Wget <br/>
`wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash`
and then `nvm install 6` (the tool supports node versions from 4 to 8).

When you have nodejs installed, run `npm install dsweeper -g`

## Usage
In the most trivial case the following should be sufficient: open console and run `dsweeper -d`.
Currently there is no way to start the service automatically when OS restarts, so you'll have to do it manually.

Configuration options available:

```
-h, --help           output usage information
-d, --daemonize      Daemonize
-p, --path [path]    Path to directory to monitor; defaults to Dropbox folder
-t, --title [title]  Process title - useful for running tests and not killing working process
```
## Tests
Code style check is part of the test execution command on CI.

1. Install development dependencies: `npm install`.
2. Install mocha: `npm install mocha -g`.
3. Run `node_modules/jslint/bin/jslint.js lib/**/*.js --config=jslint.config --stupid && node_modules/jshint/bin/jshint lib/**/*.js && mocha`.

## TODO
- [ ] Better installation script
- [ ] Autorunner (plist/upstart/etc)
- [ ] Setup code style check via [jscs](jscs)
