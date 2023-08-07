const TodoPage = {
    newtodoInputField: '.new-todo',
    todoList: '.todo-list',
    todoListItem: '[data-id]',
    toggleCheckbox: '.toggle',
  
    addTodoItem(todoText) {
      return cy.get(this.newtodoInputField).type(todoText + '{enter}');
    },
    getItem(item) {
        return cy.get(this.todoListItem).eq(item)
    },
    getItemText(item) {
        return cy.get(this.todoListItem).eq(item).invoke('text');
    },
    getTodoListCount() {
      return cy.get(this.todoList).find('li').its('length');
    },
    toggleTodoItem(item) {
        return cy.get(this.toggleCheckbox).eq(item).click();
    },
  };
  
  export default TodoPage;
  