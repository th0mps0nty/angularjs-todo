angular
  .module('todo', [])
  .controller('TodoController', TodoController);

function TodoController() {
  this.tasks = ['Wake up early', 'Eat Breakfast', 'Go to work', 'Say hi to Wilson', 'Be Awesome'];

  this.createTask = () => {
    this.tasks.push( this.taskName );
    this.taskName = '';
  };

  this.deleteTask = (index) => {
    this.tasks.splice(index, 1);
  };
}
