# My Bucket List

**MyBucketList** site: [visit here](https://diogo-pessoa.github.io/MyBucketList/index.html)

This is a fun project to create your bucket list and start planning your adventures. Make a list, tag places to go, and set a date to make it happen.

## Project Work 

Project Board & and User Stories on [Trello](https://trello.com/b/IdBaRAf3)

## UX

The focus is to give the user a friendly and intuitive interface. Then free from distraction user has time to reflect on his list of Goals.
The page provides a simple approach centred on form and BucketList

### Form
- Action (goal), a text field.
- Location - should have a Map feature integrated to add a maps link to the list.
- Calendar field - to feed the list with a date.
### Bucket List
Upon form submission, a new item is added.
- User can remove items;
- Re-order items on the list;
Feature to send the list by e-mail is hidden from the user's view until there's at least one user-owned item on the list. 
Send the list by e-mail is an additional feature. Hence the decision to hide the form and add the `Email me this list button`. If the user decides to send it by email, then clicking the button will show the form and auto-scroll to centre it. 

## Wireframes

##### Mobile view
![Mobile View](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/Mobile_view.png)

###### Desktop view
![Desktop View](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/Desktop_Version.png)

## Features

Implemented features are either displayed and explained in the Ux section or the Testing section.

### Features Left to Implement

- Add Maps or location Integration with the Location field from the item form. The feature can leverage a maps API integration to create this extra feature. The result for this field is a link for a map on the bucket list item
- Use a notepad image as a background to the bucket list aligning items for each line for a more natural view. 
- 
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
  - Main form leave 'What's your goal' field empty and try to submit the form. that will raise an alert request for the user to review form content
- Test for alert in case of missing Action Item. 
  `- The main form leaves the 'What's your goal' field empty and try to submit the form. that will raise an alert request for the user to review form content
- Test Date field noticed it accepted dates in the past.
  - Fix: Added `min` attribute to date input with moment date the user is accessing the page.
- Test Auto-Scroll to email Detail form: 
  - Once there's at least one item on BucketList: Click on the `Email me this List` button. The window should scroll to the bottom. Making the Email details form all visible. This is a natural touch on the mobile Version as the page scrolls down to show form, without user input. As opposed to showing half the form of the scroll doesn't happen.
- Test dynamic hiding of email related Elements, if the user cleans-up the list. 
   -  At least one item is added to the bucket list. Email button is displayed. At this stage, if all items are removed from the list button is hidden. 
   - Second Case. The list has one item, the user clicks on `Email me this list`, page auto scrolls to the email form. If at this user cleans-up the bucket list. Page hides email form.
- footer links, both open on a separate tab.
 
#### Static Content checks
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](http://jigsaw.w3.org/css-validator/validator$link)
- [jshint](https://jshint.com/)
- Chrome Developer tools lighthouse;

## Deployment 

Site deployed using github-pages. 
- visit Repository Settings
  - In Section `Github-pages`, enable it.
  - Set Branch to Master and path (root).
![github-pages-image](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/MybucketList-GH-pages.png)

It can take a couple of minutes for content committed to master to be available.
Github-pages [reference](https://pages.github.com/)

## local development
Code Editor [Vscode](https://code.visualstudio.com/) and Chrome browser with developer tools. All dynamic behaviour runs is browser-based, hence nothing else is needed.
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
