// wrapper for bootbox or growl type errors
var Alert;

Alert = {
  setMessage: function(options){
    var message;
    if(options.message.reason){
      message = options.message.reason.toString()
    } else {
      message = options.message.toString()
    }
  
    $.bootstrapGrowl('<b>' + options.title + '</b> - ' + message + ' ', {
      ele: 'body', // which element to append to
      type: options.type, // (null, 'info', 'warning', 'danger', 'success')
      offset: {from: options.offset, amount: options.offsetAmount}, // 'top', 60 or 'bottom'
      align: options.align, // ('left', 'right', or 'center')
      width: 'auto', // (integer, or 'auto')
      delay: 4000,
      allow_dismiss: true,
      stackup_spacing: 10 // spacing between consecutively stacked growls.
    });
    
  }
};

this.Alert = Alert;

// Alert.setMessage(options);
// options = {title: 'Success', message: 'File save successful.',type: ['info', 'warning', 'danger', 'success', offset: ['top', 'bottom'], offsetAmount: [number], align: ['right', 'left', 'center]}

// Alert
