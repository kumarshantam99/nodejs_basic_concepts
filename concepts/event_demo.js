const EventEmitter = require('events')

// CReate class

class MyEmitter extends EventEmitter {

}

// Init object

const myEmitter=new MyEmitter();

//Event listener

myEmitter.on('event',()=>console.log('eVENT FIRED!'))

myEmitter.emit('event')