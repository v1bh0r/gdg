# GDG Explorer
[![Build Status](https://travis-ci.org/vibhor86/gdg.svg)](https://travis-ci.org/vibhor86/gdg)
[![devDependency Status](https://david-dm.org/vibhor86/gdg/dev-status.svg)](https://david-dm.org/vibhor86/gdg#info=devDependencies)

## Install
To start your own project, you can clone that project, get rid of the history, change the git origin and start working by following the snippet below
```bash
$ git clone git://github.com/Keats/ng-boilerplate myproject
$ cd myproject
$ git checkout --orphan temp
$ git commit -m 'initial commit'
$ git branch -D master
$ git branch -m master
$ git remote remove origin
$ git remote add origin yourgitrepourl.git
$ sudo npm -g install bower gulp
$ bower install
$ npm install
$ gulp
```
You then have 2 options: use docker or use your local installation.
To get running using your local node, run the following:

```bash
$ sudo npm -g install bower gulp
$ bower install
$ npm install
$ gulp
```

The docker part is using [fig](http://fig.sh/) so you'll need both docker and fig installed, follow these links to do so: https://docs.docker.com/installation/#installation and http://www.fig.sh/install.html

You can just run fig up and it will set up the environment in a container.

## Structure

```bash
ng-boilerplate/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- style/
  |  |  |- **/*.scss
  |  |- templates/
  |  |  |- **/*.html
  |  |- tests/
  |  |  |- unit
  |  |  |  |- **/*.js
  |  |  |- integration
  |  |  |  |- **/*.js
  |  |- types/
  |  |  |  |- **/*.d.ts
  |- vendor/
  |  |- angular/
  |  |- angular-mocks/
  |  |- lodash/
  |  |- ui-router/
  |- gulpfile.js
```

This app organisation groups code by feature but not to the point of grouping the templates/tests/css inside it (it's really to change that in the gulpfile if you want to do that though).  

Look at the home module present in the boilerplate to see how you can integrate a module in the angular app and don't forget to delete type definition for the controller in types/app/core.ts.  
There's also an exemple service and directive.  


## Tasks
This uses gulp (http://gulpjs.com/) so you can call any of the tasks defined in the gulpfile.
The default one watches over the files and runs the associated tasks when needed and is called like this:
```bash
$ gulp
```

To build the version to distribute, run the following:
```bash
$ gulp build --type dist
```
