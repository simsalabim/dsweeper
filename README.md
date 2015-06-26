# Dropbox AppleDouble files sweeper

![Build Status] (https://api.travis-ci.org/simsalabim/dsweeper.svg?branch=master "Build Status")

A tool that doesn't let AppleDouble `._whatever` files into Dropbox folder that is kept on external HDD.
[Some](https://www.dropboxforum.com/hc/communities/public/questions/201454519--AppleDouble-file-nightmare-This-should-not-be-happening-Fix-this-in-Dropbox-for-Mac-update-please-)
people [ran](https://www.dropboxforum.com/hc/communities/public/questions/202940365--files) into the same issue.

## Installation

If you don't have nodejs installed, the fastest way would be to use [nvm](https://github.com/creationix/nvm)
`wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash`
and then
`nvm install stable`

When you have nodejs installed, run `npm install dsweeper -g`

## Usage
In the most typical case run the following from your console: `dsweeper -d`. Currently, if you want the service running,
you'll have to run it manually once per OS session.

Configuration options available:

```
-h, --help         output usage information
-d, --daemonize    Daemonize
-p, --path [path]  Path to directory to monitor; default to Dropbox folder
```

## TODO
- [ ] Better installation script
- [ ] Autorunner (plist/upstart/etc)
