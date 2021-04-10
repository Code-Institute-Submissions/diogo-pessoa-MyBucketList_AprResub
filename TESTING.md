## Testing

### Code Validation

#### HTML validator
- [W3C HTML Validator](https://validator.w3.org/)

| File | Validator check | link |
|---|---|---|
| index.html | ok | [link](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/index_validator.png) |

#### CSS validator

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)
   
|File| Validator check|link|
|---|---|---|
| style.css | ok | [link](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/Css_validator.png) |

#### JsHint

|File| Validator check|
|---|---|
| index.js | ok |

- Using VS Code [JSHint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)

### Responsiveness

| Device | Screen Size  | index.html  |
|---|---|---|
| Iphone5 | 320px/568px | ok |
| Iphone6 | 375px/667px | ok |
| Ipad | 768px/1024px | ok |
| PC | >960px | ok |  ok |

### Browsers

Tested both on Browser developer tools & available devices. 

| Browser | index |
|---|---|
| Firefox | ok |
| Chrome  | ok |

### Test for Instructions Tabs

|Tab Name| active on load | tab navigation click tested |
|---|---|---|
| brainstorming | yes | ok |
| Draft | no | ok |
| Organize your thoughts | no | ok |
| Finishing-up | no | ok  |

### Footer links
|Link Description| tested | new_tab|
|---|---|---|
| Header | ok | no |
| Footer Developer page | ok | yes|
| Footer report an issue | ok | yes|

### Manual tests per User Story

- **Test** for alert in case of missing Action Item 
  - Main form leave 'What's your goal' field empty and try to submit the form. That will raise an alert request for the user to review the form content

- **Test** for alert in case of missing Action Item. 
  - The main form leaves the 'What's your goal' field empty and try to submit the form. That will raise an alert request for the user to review the form content

- **User Story** As a user I don't want to have an item on my list that has a date in the past. A bucketList should be built with things I want to do in the future
 - **Test Date** field noticed it accepted dates in the past.
  - **Fix**: Added `min` attribute to date input with moment date the user is accessing the page.

- **Test** At least one item is added to the bucket list. The Email button is displayed. At this stage, if all items are removed from the list button is hidden. 
  
- **Test** The list has one item, the user clicks on `Email me this list`, page auto-scrolls to the email form. If at this user cleans-up the bucket list. Page hides email form.

- **User Story** As a User when I'm ready to fill the form to get my list by email. Once I click the email button I want the screen to focus on the form. 
  - **Test Auto-Scroll** to email Detail form: 
  - Once there's at least one item on BucketList: Click on the `Email me this List` button. The window should scroll to the bottom. Making the Email details form all visible. This is a natural touch on the mobile Version as the page scrolls down to show form, without user input. As opposed to showing half the form of the scroll doesn't happen.

- **User Story** dynamic hiding of email related Elements, if the user cleans-up the list. 

- **User Story** as a Developer I want the Jumbotron to have an inspirational quote while user review his bucketList.
- **Test** Once page loading is complete Jumbotron has a quote, and it rotates every 45 seconds

- **User Story** As a User I want to keep my list in case of a page reload.
  - **Test** After adding at least one object to the list, If I reload my page, My list content is preserved 
  - **Fix** When Appending the Item to the list (on form submission) we can create an object in the localStorage to persist data on the user's browser. Then on page loading, we check if there's content in said object and Add to Bucket HTML element.
  
- **User Story** As a User when I delete one object from my BucketList, I want it to be removed from any persistence, So that the Page Reload does not show an outdated list. 
  - **Feature** Injects a hidden `id` to each object appended to BucketList `<li>` element. When clicking the Remove button New Function call will parse this ID and update the `bucketList` localStorage
  - **Test** Add a few items to BucketList, reload page to confirm they're storaged locally. Execute a Delete operation by clicking on x. Reload page again and confirm Item is not in the list anymore. 

- **User Story** As a user I would like to add a paragraph with what motivated me to choose each goal to my list
  - **Feature** Added new field to `motivation` to bucket list Item form, Included paragraph to Bucket list element `<li>`
  - **Test** 
    - Tested on different screen to make sure on each resizing the paragraph breakdown and stays inside list element (it does not overflow). 
    - Reload page and confirm new field is properly stored on window local storage and loads correctly once page reload is complete. 
    - Confirm Re-order of fields work after the new motivation field is included
    - Confirm Click to delete element from List still works. 
    - No regression found

- **Task** Add some styling to email template
  - **Fix** added some inline CSS styling to email template
  - **Test** Send email After template change and confirm styling is working as expected and that motivation field breaks down nicely on list of Goals

- **User Story** On Send email Form added a button to hide email form again, if I'm still creating the list. To avoid space while I'm still working on my list. 
  - **Fix** On event handler for `email me this list` button added if statement to check if form is hidden. If that's the case, transform button in to `Hide this form`. In case of event click event for this button if form is showing, hides for again, and reverse button text.
  - **Test** Once there's at least one item on the list, click on `email me this list` button. Email form shows and button text is changed to `Hide This form`. Upon new click, email form is hidden again and text reversed to original content

### Bug-fixes

- **BUG** On the first site visit quotes do not rotate.
If condition checking before the object was stored locally on the browser. That caused the fixed quote. 
- **Bug-fix**: Move `if statement` that checks for `quotes.length`, to the body of setInterval() function.

- **BUG** Because we hide the button and form for email interaction. A check is now needed if the form is already showing before  we can show the email button.
  - **Fix** fixed, by checking if form has hidden attribute before showing email Button again `if ($('#emailDetails').parent().attr('hidden')) { $('#send-list-by-email').removeAttr('hidden'); }`

- **BUG** Forms didn't clean up after submission, This caused the user need to remove the previous content from the form. Considering the bucket list may have multiple items, this becomes cumbersome fast.
  - **Fix** Added a Form `.reset()` on the submit event for boths email and bucket list Item forms. 
  - **Test** Tested it by manually by filling the form and submitting both forms to confirm the fields were cleaned-up as expected.
- **BUG** email template wasn't sending email template in HTML.
  - **Fix** Template needed an extra bracket to send html templates ex: `{{{message}}}`
  - **Test** submit email form and confirm html template on email body
    - reference [emailjs](https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/)

- **BUG** Unable to Sortable/Draggable BucketList item on mobile view of page. 
  - **Implement Touch event for mobile view**
    - Added new library `touch-punch` to support **touch** events and allow dragging items from list. 
       1. Once new events are loaded hold element with touch allows for moving them up and down the list.
          1.1 This uncovered other features that needed to be implemented. Listed on the next steps.
       2. Added library from custom Repository [Touch-Punch nobitagit](https://github.com/nobitagit/jquery-ui-touch-punch) to keep support for focus on textarea and input
       3. Custom version for `touch-punch` mentioned above also helped with functionality to event Listener `click` to remove items from bucketList.
       4. Added preventDefault inside mouseStart on `touchStart` to avoid page scrolling when dragging element in list.
          4.1 [Disabling scrolling](https://stackoverflow.com/questions/16348031/disable-scrolling-when-touch-moving-certain-element#17159809) 

  - **Test** 
    1. Load page on mobile screen, Confirm bucket List has at least two objects, touch on item on list and move them up or down the list. 
       1.1 Once all implementation above was finished I could re-order the list without paging scrolling when I'm dragging items around the List. 
    2. Test focus on text area on mobile screen. Navigate to form on mobile version of page. Touch on input and textarea fields and confirm focus.
    3. Navigate to BucketList on mobile version of page. Confirm list has at least one object, touch on remove (x icon) and item is excluded from list. 
    4. As mentioned on Item 1 once the fix is in place, the user can drag items and re-order the list without the page moving around.
