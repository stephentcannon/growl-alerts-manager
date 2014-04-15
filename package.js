Package.describe({
  summary: "growl-alerts-manager"
});

Package.on_use(function (api, where) {
  api.add_files([
    'Alert.js'
    ],
  'client');
  
  api.use('bootstrap-3', ['client']);
  api.use('bootstrap-growl', ['client']);
});