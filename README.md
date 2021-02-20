# My Bucket List

**MyBucketList** site: [visit here](https://diogo-pessoa.github.io/MyBucketList/index.html)

This is a fun project to create your bucket List and start planning your adventures. Make a list, tag places to go, and set a date to make it happen.

## Project Work 

Project Board & and User Stories: tracking on [Trello](https://trello.com/b/IdBaRAf3)

## UX

The focus is to give user a friendly and intuitive interface. Then free from distraction user has time to reflect on his list of Goals.

Page provides a simple approach centered on form and BucketList

### Form
- Action (goal), a text field.
- Location - should have a Map feature integrated to add a maps link to the list.
- Calendar field - to feed the list with a date.

### Bucket List

Upon form submission, new item is added.

- User can remove items;
- Re-order items on the list;

Feature to send list by e-mail is hidden from user's view until there's at least one user owned item on list. 

Send the list by e-mail is an additional feature. Hence the decision to hide the form and add the `Email me this list button`. If the user decides to send it by email, then by clicking the button will show the  form and auto-scroll to center it. 

## Wireframes

##### Mobile view

![Mobile View](https://github.com/diogo-pessoa/MyBucketList/blob/master/wireframes/Mobile_view.png)

###### Desktop view

![Desktop View](https://github.com/diogo-pessoa/MyBucketList/blob/master/wireframes/Desktop_Version.png)

## Features
Implemented features are either displayed and explained on Ux section or Testing section.
### Features Left to Implement
- Add Maps or location Integration with the Location field from item form. Feature can leverage a maps API integration to create this extra feature. The result for this field is a link for a map on the bucket list item
- Use notepad image as a background to the bucketList aligning items for each line for a more natural view. 

## Technologies Used

This Project uses HTML5/CSS3 with dynamic content added with JavaScript. Frameworks and technologies used are:

- [Bootstrap](https://getbootstrap.com/) - for it's handy Grid system 
- [githubPages](https://pages.github.com/) - for the Deployment of this project unde my github-io space.
- [JQuery](https://jquery.com/) - Interactive Javascript
- [JQueryUI](https://learn.jquery.com/jquery-ui/)
- [emailJs](https://www.emailjs.com/)

## Testing

Manual site navigation on different screen sizes and browsers. 

- Selected browsers for tests Firefox and Chrome. 
- Screen sizes tested: 
  - col-sm - Iphone6/7/8:  375px x667px
  - col-md - Ipad: 768px x 1024px
  - col-lg - Ipad: >960px x >600px

Tested both on Browser developer tools & available devices. 

- Test for alert in case of missing Action Item 
  - Main form leave 'What's your goal' field empty and try to submit form. that will raise an alert request for user to review form content

- Test for alert in case of missing Action Item. 
  `- Main form leaves 'What's your goal' field empty and try to submit form. that will raise an alert request for user to review form content

- Test Date field noticed it accepted dates in the past.
  - Fix: Added `min` attribute to date input with moment date user is accessing the page.

- Test Auto-Scroll to email Detail form: 
  - Once there's at least one item on BucketList: Click on `Email me this List` button. Window should scroll to bottom. Making the Email details form all visible. This is a natural touch on the mobile Version as page scrolls down to show form, without user input. As opposed to showing half the form if the scroll doesn't happen.

- Test dynamic hiding of email related Elements, if user cleans-up the list. 
   -  At least one item is added to bucket list. Email button is displayed. At this stage if all items are removed from list button is hidden. 

   - Second Case. List has one item, user clicks on `Email me this list`, page auto scrolls to email form. If at this user cleans-up the bucket list. Page hides email form.

- footer links, both open on a separate tab.
 
#### Static Content checks

- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](http://jigsaw.w3.org/css-validator/validator$link)
- [jshint](https://jshint.com/)
- Chrome Developer tools lighthouse;

## Deployment

Deployed @ github-pages. Deploy is done by enabling github pages on repostiory settings as described [here](https://pages.github.com/).

## local development

Code Editor [Vscode](https://code.visualstudio.com/) and Chrome browser with developer tools. All dynamic behaviour runs is browser based, hence nothing else is needed.

## Credits

### Content

- bootstrap theme from: [bootswatch](https://bootswatch.com/journal/) under MIT license;
- [fontawesome](https://fontawesome.com/);
- [Bootstrap toast](https://getbootstrap.com/docs/4.2/components/toasts/);
- Api collection for Inspirational quotes [philosophy-quotes-API](https://github.com/KaranDahiya/philosophy-quotes-API);

### Acknowledgements

The official [JQuery documentation](https://api.jquery.com/).

- Notepad css background used in List Section is inspired in [css_tricks](https://css-tricks.com/how-to-create-a-notebook-design-with-css/);
- animation to Fade-in Quotes [StackOverflow](https://stackoverflow.com/questions/5248721/jquery-replacewith-fade-animate)