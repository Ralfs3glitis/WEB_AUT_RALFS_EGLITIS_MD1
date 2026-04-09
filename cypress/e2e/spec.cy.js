import { SelectablePage } from '../pageObjects/selectablePage';

describe('test-site scenarios', () => {

    it('GridView', () => {
      SelectablePage.visit()
      SelectablePage.gridButton.click()
      var buttons_to_click = ["Two", "Four", "Six", "Eight"]
      for(var button of buttons_to_click){
        SelectablePage.clickableButtons.contains(button).click()
        SelectablePage.clickedButtons.should("contain", button)
      }
      var buttons_not_clicked = ["One", "Three", "Five", "Seven", "Nine"]
      for(var button of buttons_not_clicked){
      SelectablePage.clickableButtons.should("contain", button)
      }

    });
});
