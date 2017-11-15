var test = require('tape');
var logic = require('../logic.js');

// test('Example test', function(t) {
//   t.pass();
//   t.end();
// });


test('addTodo output', function(t) {
  var todos = [];
  var  actual =   logic.addTodo(todos,"assignment maya");
  var expected=[{id:1,description:'assignment maya',done: false}];
  t.deepEqual(actual, expected);
  t.end();
});

test('deleteTodo output', function(t) {
  var todos = [{id:1,description:'assignment maya',done: false}];
  var  actual =   logic.deleteTodo(todos,1);
  var expected=[];
  t.deepEqual(actual, expected);
  t.deepEqual(todos, [{id:1,description:'assignment maya',done: false}]);
  t.end();
})
