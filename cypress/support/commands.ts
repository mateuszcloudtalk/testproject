import TodoPage from '../e2e/pages/todoPage';
const todoPage = new TodoPage()

Cypress.Commands.add('addTwoItems', (item1: string, item2: string) => {
    todoPage.addTodoItem(item1);
    todoPage.addTodoItem(item2);
    todoPage.getItemText(0).should('contain', item1);
    todoPage.getItemText(1).should('contain', item2);
    todoPage.getTodoListCount().should('eq', 2);
})