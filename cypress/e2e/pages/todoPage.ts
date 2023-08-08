/// <reference types="cypress" />

export class TodoPage {
    newTodoInputField = '.new-todo';
    todoList = '.todo-list';
    todoListItem = '[data-id]';
    toggleCheckbox = '.toggle';
    

    addTodoItem(todoText: string): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.newTodoInputField).type(todoText + '{enter}');
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