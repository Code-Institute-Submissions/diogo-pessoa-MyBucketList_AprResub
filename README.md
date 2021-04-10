# My Bucket List


## Description

site: [visit here](https://diogo-pessoa.github.io/MyBucketList/index.html)

This is place to reflect and create your bucket list. Start planning your adventures and think about think would you love to enjoy around the world. Make a list of things you like to do,  places to visit, and set a date to make it happen. Share your List with other Adventurous spirits out there. 

## UX

### Theme and Typography

- Color Scheme and Styling of HTML Elements are from bootswatch theme [Journal](https://bootswatch.com/journal/)
  
Theme selected was based on minimal and clear visual. The goal is any distractions to the user during the thinking process. 

- Bucket List section
In this section the background is to vaguely remember a notepad, with the added hand-written front-style (Gochi Hand) from google fonts. To provide the user with a seamingly experience of writing it down o paper.
## Wireframes

### Mobile view

- [Mobile View](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/Mobile_view.png)

### Desktop view

- [Desktop View](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/Desktop_Version.png)

## Features

The focus is to give the user a friendly and intuitive interface. Then free from distraction user has time to reflect on his list of Goals.
The page provides a simple approach centred on form and BucketList

- Create a bucketList;
- Add Items to list;
- Remove items;
- Re-order items on the list;
- Hidden email fucntion to stay out of the user's view until he is ready to share the bucket list. 
- Send the list by e-mail.
  - [email template](https://github.com/diogo-pessoa/MyBucketList/blob/master/emailTemplate/index.htm)
  - [sample email](https://github.com/diogo-pessoa/MyBucketList/blob/master/emailTemplate/emailBody.png)
- Inspirational quotes under Add your goal Form

- On Send email Form add a button to hide email form again, if I'm still creating the list. To avoid space while I'm still working on my list. 

### Features left to implement


- Email form currently sends email to one destination at a time. This can be extended to accept a list of email. Then we can add a bucketList buddy when sending this list ourselves

## Technologies Used

This Project uses HTML5/CSS3 with dynamic content added with JavaScript. Frameworks and technologies used are:
- [Bootstrap](https://getbootstrap.com/) - for it's handy Grid system 
- [githubPages](https://pages.github.com/) - for the Deployment of this project unde my github-io space.
- [JQuery](https://jquery.com/) 
  - Interactive Javascript
- [JQueryUI](https://learn.jquery.com/jquery-ui/) 
  - leveraging the `sortable` and `disableSelection` functions from jQuery use 
- [emailJs](https://www.emailjs.com/)
- [font awesome](https://fontawesome.com/) 
  - Good selection of Icons.
- [GitHub Pages](https://pages.github.com/) 
    - Deploy project page
- [balsamiq](https://balsamiq.com/)
    - to Build wireframes
- [Google Fonts](https://fonts.google.com/) 
  - give nice effect of hand-written font on List  

## Deployment

Site deployed using github-pages. 
- visit Repository Settings
  - In Section `Github-pages`, enable it.
  - Set Branch to Master and path (root).
  - ![github-pages-image](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/MybucketList-GH-pages.png)

It can take a couple of minutes for content committed to master to be available.
Github-pages [reference](https://pages.github.com/)

## local development 
- Clone this Repository from github
- Edit code with an editor of choice  ex:[Vscode](https://code.visualstudio.com/). 
- To execute code locally open a web browser of choice (ex: Chrome) and use the schema `file://<path to local files/index.html> `.
- Don't forget to reload page after changes on source code.
 
## Testing

- [testing.md](https://github.com/diogo-pessoa/MyBucketList/blob/master/TESTING.md)

## Credits

### Content

- bootstrap theme from: [bootswatch](https://bootswatch.com/journal/) under MIT license;
- [fontawesome](https://fontawesome.com/);
- Api collection for Inspirational quotes [philosophy-quotes-API](https://github.com/KaranDahiya/philosophy-quotes-API);



### Acknowledgements

The official [JQuery documentation](https://api.jquery.com/).
### Code Snippets
- Notepad css background used in List Section is inspired in [css_tricks](https://css-tricks.com/how-to-create-a-notebook-design-with-css/);
- animation to Fade-in Quotes [StackOverflow](https://stackoverflow.com/questions/5248721/jquery-replacewith-fade-animate)
- quick Random String generator from [attacomsian.com](attacomsian.com/blog/javascript-generate-random-string)
- Touch Event support thread and snippet of code sourced from [StackOverFlow Answer](https://stackoverflow.com/questions/5186441/javascript-drag-and-drop-for-touch-devices/6362527#6362527)
- [Jquery Ui drag and hold](https://stackoverflow.com/questions/34027761/jquery-ui-sortable-hold-and-drag-for-mobile)
- modified version of [touch-punch](https://github.com/nobitagit/jquery-ui-touch-punch) to fix touch problem for input and text area
- Input can't get focus fix from Github [Issue](https://github.com/furf/jquery-ui-touch-punch/issues/233)
 