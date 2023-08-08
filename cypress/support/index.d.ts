/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
        addTwoItems(item1: string, item2: string): void;
    }
}
