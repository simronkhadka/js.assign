// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function invokeAfterDelay(callback) {
    setTimeout(callback, 2000); 
  }
  function callback() {
    console.log('callback function invokked after 2 seconds.');
  }
  invokeAfterDelay(callback);