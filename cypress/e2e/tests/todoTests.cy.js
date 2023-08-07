import TodoPage from '../pages/todoPage';

const TODO_ITEM_ONE = 'buy some cheese';
const TODO_ITEM_TWO = 'feed the cat';

describe('TODO list', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should add 2 elements to TODO list and verify its count', () => {
        TodoPage.addTodoItem(TODO_ITEM_ONE);
        TodoPage.addTodoItem(TODO_ITEM_TWO);
        TodoPage.getItemText(0).should('contain', TODO_ITEM_ONE);
        TodoPage.getItemText(1).should('contain', TODO_ITEM_TWO);
        TodoPage.getTodoListCount().should('eq', 2);
    })
})