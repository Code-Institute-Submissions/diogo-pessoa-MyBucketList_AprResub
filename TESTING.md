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
|---|---|
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

  7.2   Footer links
|Link Description| tested | new_tab|
|---|---|---|
| Header | ok | no |
| Footer Developer page | ok | yes|
| Footer report an issue | ok | yes|

### Manual tests per User Story

- **Test** for alert in case of missing Action Item 
  - Main form leave 'What's your goal' field empty and try to submit the form. that will raise an alert request for the user to review form content
- **Test** for alert in case of missing Action Item. 
  - The main form leaves the 'What's your goal' field empty and try to submit the form. that will raise an alert request for the user to review form content
- **User Story** As a user I don't want to have an item on my list that has a date in the past. A bucketList should be built with things I want to do in the future
 - **Test Date** field noticed it accepted dates in the past.
  - **Fix**: Added `min` attribute to date input with moment date the user is accessing the page.

- **Test** At least one item is added to the bucket list. Email button is displayed. At this stage, if all items are removed from the list button is hidden. 
  
- **Test** The list has one item, the user clicks on `Email me this list`, page auto scrolls to the email form. If at this user cleans-up the bucket list. Page hides email form.


- **User Story** As a User when I'm ready to fill the form to get my list by email. Once I click the email button I want the screen to focus on the form. 
  - **Test Auto-Scroll** to email Detail form: 
  - Once there's at least one item on BucketList: Click on the `Email me this List` button. The window should scroll to the bottom. Making the Email details form all visible. This is a natural touch on the mobile Version as the page scrolls down to show form, without user input. As opposed to showing half the form of the scroll doesn't happen.
  - commit: [id](https://github.com/diogo-pessoa/MyBucketList/commit/286ccc84f095fc265f3d9b03ca039bc4c5e5b713)


- **User Story** dynamic hiding of email related Elements, if the user cleans-up the list. 

- **User Story** as a Developer I want the Jumbotron to have a inspirational quote while user review his bucketList.
- **Test** Once page loading is complete Jumbotron has a quotes and it rotates every 45 seconds

### Bug-fixes

- **BUG** On the first site visit quotes do not rotate.
If condition checking before the object was stored locally on the browser. That caused the fixed quote. 
- **Bug-fix**: Move `if statement` that checks for `quotes.length`, to the body of setInterval() function.
[commit](https://github.com/diogo-pessoa/MyBucketList/commit/ab961a2ae5948d24893aae3ab08f797a51bcb499)


- **BUG** Because we hide the button and form for email interaction. A check is now needed if the form is already showing before  we can show the email button.
  - **Fix** fixed, by checking if form has hidden attribute before showing email Button again `if ($('#emailDetails').parent().attr('hidden')) { $('#send-list-by-email').removeAttr('hidden'); }`

- **BUG** Forms didn't clean-up after submission, This caused the user need to remove the previous content from the form. Considering bucket list may have multiple items, this becomes cumbersome fast.
  - **Fix** Added a Form `.reset()` on the submit event for boths email and bucket list Item forms. 
  - **Test** Tested it by manually by filling the form and submitting both forms to confirm the fields were cleaned-up as expected.

- **BUG** email template wasn't sending email template in HTML.
  - **Fix** Template needed an extra bracket to send html templates ex: `{{{message}}}`
  - **Test** submit email form and confirm html template on email body
    - reference [emailjs](https://www.emailjs.com/docs/user-guide/dynamic-variables-templates/)