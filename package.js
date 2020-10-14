// Package metadata for Meteor.js web platform (https://www.meteor.com/)
// This file is defined within the Meteor documentation at
//
//   http://docs.meteor.com/#/full/packagejs
//
// and it is needed to define a Meteor package
'use strict';

Package.describe({
  name: 'sebl29:useraccounts-iron-routing',
  summary: 'UserAccounts package providing routes configuration capability via iron:router.',
  version: '1.15.0',
  git: 'https://github.com/meteor-useraccounts/iron-routing.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.11.1');

  api.use([
    'check',
    'iron:router@1.1.2',
    'underscore',
    'sebl29:useraccounts-core',
  ], ['client', 'server']);

  api.imply([
    'sebl29:useraccounts-core@1.15.0',
    'iron:router@1.1.2',
  ], ['client', 'server']);

  api.addFiles([
    'lib/core.js',
    'lib/server.js',
  ], ['server']);

  api.addFiles([
    'lib/core.js',
    'lib/client.js',
    'lib/templates_helpers/at_input.js',
  ], ['client']);
});
