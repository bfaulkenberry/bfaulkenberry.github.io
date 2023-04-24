// Define object
var obj = {counter : 0};

// Define setters
Object.defineProperty(obj, "reset", {
    get : function() {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
    get : function() {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
    get : function() {this.counter--;}
});
Object.defineProperty(obj, "add", {
    get : function() {this.counter += IDBCursorWithValue;}
});
Object.defineProperty(obj, "subtract", {
    get : function() {this.counter -= IDBCursorWithValue;}
});

// Play with the counter
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

// Another counter using JS closure
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is 3