import TodoPage from '../e2e/pages/todoPage';

Cypress.Commands.add('addTwoItems', (item1, item2) => {
    TodoPage.addTodoItem(item1);
    TodoPage.addTodoItem(item2);
    TodoPage.getItemText(0).should('contain', item1);
    TodoPage.getItemText(1).should('contain', item2);
    TodoPage.getTodoListCount().should('eq', 2);
})