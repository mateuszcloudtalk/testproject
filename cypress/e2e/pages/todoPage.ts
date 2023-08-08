/// <reference types="cypress" />

class TodoPage {
    newtodoInputField: string;
    todoList: string;
    todoListItem: string;
    toggleCheckbox: string;

    constructor() {
        this.newtodoInputField = '.new-todo';
        this.todoList = '.todo-list';
        this.todoListItem = '[data-id]';
        this.toggleCheckbox = '.toggle';
    }

    addTodoItem(todoText: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.newtodoInputField).type(todoText + '{enter}');
    }

    getItem(item: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.todoListItem).eq(item);
    }

    getItemText(item: number): Cypress.Chainable<string> {
        return cy.get(this.todoListItem).eq(item).invoke('text');
    }

    getTodoListCount(): Cypress.Chainable<number> {
        return cy.get(this.todoList).find('li').its('length');
    }

    toggleTodoItem(item: number): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.toggleCheckbox).eq(item).click();
    }
}

export default TodoPage;