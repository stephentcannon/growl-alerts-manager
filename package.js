Package.describe({
  summary: "growl-alerts-manager",
  // Version number.
  version: "0.0.5",
  // Optional.  Default is package directory name.
  name: "steeve:growl-alerts-manager",
  // Optional github URL to your source repository.
  git: "https://github.com/stephentcannon/growl-alerts-manager.git"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  
  api.addFiles([
    'Alert.js'
    ],
  'client');
  
  api.use('mizzao:bootstrap-3@3.2.0', 'client');
  api.use('mrt:bootstrap-growl@0.1.0', 'client');
});