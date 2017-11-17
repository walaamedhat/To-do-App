// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var cont = document.getElementById('do-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList
// var newState2=[];
var state2=[];
  // This function takes a todo, it returns the DOM node representing that todo



/*to dooooooooo*/
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
    // add span holding description
    var x = document.createElement("SPAN");
    if (todo.done) {
      x.classList.add('completed') ;
      }
   var text = document.createTextNode(todo.description);
   x.appendChild(text);
   todoNode.appendChild(x);
   // add markTodo button
   var markButtonNode = document.createElement('button');
   var te = document.createTextNode("Mark");       // Create a text node
   markButtonNode.addEventListener('click', function(event) {
     var newState= todoFunctions.markTodo(state, todo.id);
     var m=todoFunctions.sortTodos(newState, todo.id);
     for (var i in m) {
       state2.push(m[i]);
     }
    //  console.log(state2);
     newState = todoFunctions.deleteTodo(state, todo.id);
     update(newState);
     update2(state2);


   });
   markButtonNode.appendChild(te);
   todoNode.appendChild(markButtonNode);
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');

    deleteButtonNode.className = "delete";
    var t = document.createTextNode("Delete");       // Create a text node
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    deleteButtonNode.appendChild(t);
    todoNode.appendChild(deleteButtonNode);

    // add classes for css
    markButtonNode.className = "mark";



    return todoNode;
  };




/*doneeeeeeeeeeeeeeeeeeeeeeeeee*/
  var createTodoNode2 = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
    // add span holding description
    var x = document.createElement("SPAN");
    if (todo.done) {
      x.classList.add('completed') ;
      }
   var text = document.createTextNode(todo.description);
   x.appendChild(text);
   todoNode.appendChild(x);
   // add markTodo button
   var markButtonNode = document.createElement('button');
   var te = document.createTextNode("Mark");       // Create a text node
   markButtonNode.addEventListener('click', function(event) {
     var newState= todoFunctions.markTodo(state2, todo.id);
     for (i in newState) {
       if (newState[i].id==todo.id) {
         state.push(newState[i]);
       }
     }
    newState = todoFunctions.deleteTodo(state2, todo.id);
    // console.log(state2);
     update(state);
    update2(newState);


   });
   markButtonNode.appendChild(te);
   todoNode.appendChild(markButtonNode);
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');

    deleteButtonNode.className = "delete";
    var t = document.createTextNode("Delete");       // Create a text node
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state2, todo.id);
      update2(newState);
    });
    deleteButtonNode.appendChild(t);
    todoNode.appendChild(deleteButtonNode);

    // add classes for css
    markButtonNode.className = "mark";



    return todoNode;
  };



  // bind create todo form
  /*addddddd*/
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = event.target.description.value;
      event.target.description.value=""; // event.target ....

      if(description.trim()!==""){
        var newState = todoFunctions.addTodo(state, description); // ?? change this!
        update(newState);
      }
      else alert("You are not doing anything?");
      // hint: todoFunctions.addTodo

    });
  }




  // you should not need to change this function
  /*updat todo*/
  var update = function(newState) {
    state = newState;
    renderState(state);
  };
  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };





/*updat done*/
  var update2 = function(newState2) {
    state2= newState2;
    renderState2(state2);
  };
/*to show done task*/
  var renderState2 = function(state2) {
    var todoListNode = document.createElement('ul');

    state2.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode2(todo));
    });

    // you may want to add a class for css
    cont.replaceChild(todoListNode, cont.firstChild);
  };

  if (container) renderState(state);

})();
