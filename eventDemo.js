var events = require('events');

var eventEmitter = new events.EventEmitter();

//Listener1
var listener1 = function listener1 () {
  console.log('Listener1 Executed\n');
}

//Listener1
var listener2 = function listener2 () {
  console.log('Listener2 Executed\n');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listener2);

var noOfListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log('\n' + noOfListeners + " Listener(s) listening to connection event\n");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listner1 will not listen now.\n");

// Fire the connection event
eventEmitter.emit('connection');

noOfListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(noOfListeners + " Listener(s) listening to connection event\n");

console.log("Program Ended.");
