import { Selector } from 'testcafe';

fixture `Basic Tests` 
  .page `https://the-internet.herokuapp.com/add_remove_elements/`
  .beforeEach(async t => {
    console.log('My Test is starting');
  })
  .afterEach(async t => {
    console.log('My Test is concluding');
  });
  
test('Add and Delete Validations', async t => {
  const addElementButton = Selector('button[onclick="addElement()"]');
  const deleteButton = Selector('button[onclick="deleteElement()"]');

  //Clicks the 'Add Element' button after checking that it exists.
  if (await addElementButton.exists){
    await t.click(addElementButton)
  }

  //Verify that a new 'Delete' button appears.
  await deleteButton.visible

  //Clicks the 'Delete' button and verifies it disappears.
  if ((await deleteButton.exists == true) && (await deleteButton.visible == true)){
    await t
  .click(deleteButton)
  }
  await t.expect(deleteButton.visible).notOk()
  
  //Clicks the 'Add Element' twice and verifies there are now two 'Delete' buttons.
  if (await addElementButton.exists){
    await t
    .click(addElementButton)
    .click(addElementButton)
  }
  await t.expect(deleteButton.count).eql(2);
});
