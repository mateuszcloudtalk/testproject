import { TodoPage } from '../pages/todoPage';

const TODO_ITEM_ONE = 'buy some cheese';
const TODO_ITEM_TWO = 'feed the cat';

const todoPage = new TodoPage()
describe('TODO list', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('should add 2 elements to TODO list and verify its count', () => {
        todoPage.addTodoItem(TODO_ITEM_ONE);
        todoPage.addTodoItem(TODO_ITEM_TWO);
        todoPage.getItemText(0).should('contain', TODO_ITEM_ONE);
        todoPage.getItemText(1).should('contain', TODO_ITEM_TWO);
        todoPage.getTodoListCount().should('eq', 2);
    })
    it('should toggle first item', () => {
        cy.addTwoItems(TODO_ITEM_ONE, TODO_ITEM_TWO);
        todoPage.toggleTodoItem(0);
        todoPage.getItem(0).should('have.class', 'completed');
    })
})