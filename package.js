Package.describe({
  summary: "growl-alerts-manager",
  // Version number.
  version: "0.0.5",
  // Optional.  Default is package directory name.
  name: "steeve:growl-alerts-manager",
  // Optional github URL to your source repository.
  git: "https://github.com/stephentcannon/growl-alerts-manager.git"
});

Package.onUse(function (api, where) {
  api.addFiles([
    'Alert.js'
    ],
  'client');
  
  api.use('mizzao:bootstrap-3', 'client');
  api.use('mrt:bootstrap-growl', 'client');
});