import { BasePage } from './basePage';

export class SelectablePage extends BasePage {
  static get url() {
    return '/selectable';
  }

  static get gridButton() {
    return cy.get("#demo-tab-grid");
  }
  static get clickableButtons(){
    return cy.get('[class="list-group-item list-group-item-action"]')
  }
  static get clickedButtons(){
    return cy.get('[class="list-group-item active list-group-item-action"]')
  }
  
}