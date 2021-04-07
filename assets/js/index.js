/**
 *  Jumbotron
 */
$('#collapse-bucketList-info').hide();
$('#bucketlist-description').click(function(e) {
  e.preventDefault();
  $('#collapse-bucketList-info').toggle('slow');
});

/**
 * bucketList Form submit
 */

const ItemtoListForm = $('#add-bucketlist-item-form');

ItemtoListForm.submit(function(e) {
  e.preventDefault();
  const bucketListItem = {
    'action': $("#bucketlist-item").val(),
    'location': $("#location").val() || null,
    'datePlanned': $("#date-planned").val() || null
  };
  if (bucketListItem.action) {
    addItemToBucketList(bucketListItem);
    addBucketItemToLocalStorage(bucketListItem);
    ItemtoListForm[0].reset(); // Reseting for after submission
  } else {
    alert('Missing an goal on this Item!');
  }
});

/**
 * Add min Date to date input field to current date.
 */
const currentDate = moment().format('YYYY-MM-DD');
$('#date-planned').attr('min',currentDate);

/**
 * Append your goal to your Bucket List
 * @param {Object} bucketListItem
 */
function addItemToBucketList(bucketListItem) {
  let newItem = `<li>${bucketListItem.action}`;
  if (bucketListItem.location) {
    newItem += `, ${bucketListItem.location}`;
  }
  if (bucketListItem.datePlanned) {
    const DateForAction = formatDate(bucketListItem.datePlanned);
    newItem += `, ${DateForAction}`;
  }
  newItem += `<i class="removeListItem fa fa-times-circle"></i></li>`;
  /* remove first sample Item */
  removeEmptyLines();
  /* Add Item to list */
  $('#bucket-list').prepend(newItem);
  if ($('#emailDetails').parent().attr('hidden')) {
    $('#send-list-by-email').removeAttr('hidden');
  }
}

/**
 * Clean-up Sample entry from list 
 */
function removeEmptyLines() {
  /** removes sample line on first prepend */
  const lastLine = $('#bucket-list').children('li').last();
  if (!lastLine.text()) {
    lastLine.remove();
  }

  if ($('.removed-on-first-iteraction')) {
    $('.removed-on-first-iteraction').remove();
  }
}

/**
 * converts date format to better alignment with handwritten item
 * @param {String} plannedDate 
 */
function formatDate(plannedDate) {
  return new Date(plannedDate).toDateString();
}

/**
 *  remove Item from list
 */
$('ul').on('click','.removeListItem',function() {
  // removes li element from bucketList
  $(this).parent().remove();
  // hides email form and button
  if ($('#bucket-list').children('li').length == 0) {
    $('#send-list-by-email').attr('hidden','');
    $('#emailDetails').parent().attr('hidden','');
  }
});

/**
 *  Re-order List Item
 * using Jquery-UI library
 */

$('#bucket-list').sortable();
$('#bucket-list').disableSelection();

/**
 * Adds a toast for email sent
 */
function showToast() {
  let toast = `<div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                  <div class="toast-body">
                    Email sent. Enjoy ticking items off this list!
                  </div>
                </div>`;
  $(toast).appendTo('#emailDetails');
  $('.toast').toast('show');
}

/**
 * Parses html BucketList of at least one item into friendly format to email user.
 */
function parseBucketList() {
  let stringBucketList = ``;
  const htmlBucketList = $('#bucket-list').children('li');
  let order = 0;
  for (const liElement of htmlBucketList) {
    if (liElement.innerText) {
      stringBucketList += `<li>${++order}. ${liElement.innerText}</li>`;
    }
  }
  return stringBucketList;
}

/**
 * Event Listener for send email button show email form and hides send-list button
 * 
 */
$('#send-list-by-email').on('click',function() {
  $('#emailDetails').parent().removeAttr('hidden');
  $(this).attr('hidden','');
  //scroll to form
  $('html').stop().animate({
    'scrollTop': $('#emailDetails').offset().top
  },800,'swing');
});

/**
 * Email form Submit handled here 
 */

 const sendEmailForm = $('#emailDetails');

 sendEmailForm.submit(function(e) {
  e.preventDefault();
  const emailDetails = {
    'name': $("#username").val() || null,
    'email': $("#inputEmail").val() || null,
    'bucketList': parseBucketList(),
  };
  if (emailDetails.name && emailDetails.email) {
    if (emailDetails.bucketList) {
      sendEmail(emailDetails);
      showToast();
      sendEmailForm[0].reset(); // Reseting for after submission
    } else {
      //  email button is hidden, this condition should never be met.
      // still we refuse to email an empty list to user.
      alert('BucketList is empty, refusing to send email. Please report this issue, details are on page footer');
    }

  } else {
    const message = 'Check your added details';
    const id = '#emailDetails';
    alert('missing either username or email ');
  }
});

/**
 * Receives a data obejct with email, name and list and calls emailJS Api.
 * @param {Object} data 
 */
function sendEmail(data) {
  emailjs.init('user_ON7XddmWkEX1msv4OfqwC');
  emailjs.send("service_leir2b4","template_z8rftx6",{
    email: `${data.email}`,
    to_name: `${data.name}`,
    message: `${data.bucketList}`,
  });
}

/**
 * If there's no quote, then get quotes and store locally.
 */
if (!localStorage.getItem('quotes')) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://philosophy-quotes-api.glitch.me/quotes/philosophy/Stoicism',true);
  xhr.responseType = 'text';
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        localStorage.setItem('quotes',xhr.response);
      }
    }
  };
  xhr.send(null);
}

/**
 * parse localStorage quotes
 */
function getRandomQuoteFromLocalStorage() {
  const quotes = JSON.parse(localStorage.getItem('quotes'));
  if (quotes) {
    const randomQuoteOfChoice = Math.floor(Math.random() * Math.floor(quotes.length));
    return {
      'quote': quotes[randomQuoteOfChoice].quote,
      'author': quotes[randomQuoteOfChoice].source
    };
  } else {
    return {
      'quote': 'Luck is what happens when preparation meets opportunity.',
      'author': 'Seneca'
    };
  }
}

/**
 * Parse quote object into html element 
 */
function parseQuoteToParagraph() {
  let quote = getRandomQuoteFromLocalStorage();
  return `
    <blockquote class="blockquote">
      <p class="mb-0">${quote.quote}</p>
      <footer class="blockquote-footer">${quote.author}</footer>
    </blockquote>
   `;
}

// Append Quote into jumbotron
$(parseQuoteToParagraph()).appendTo('#quotes');

/**
 * If there's many quotes, randomly rotates them every 45 seconds.
 */

setInterval(function() {
  if (window.localStorage.getItem('quotes').length > 0) {
    $('#quotes').fadeOut("slow",function() {
      var div = $("#quotes").hide();
      $('#quotes').children('blockquote').replaceWith(parseQuoteToParagraph());
      $('#quotes').fadeIn("slow");
    });
  }
},30000);

// Persisting Items on BucketList on LocalStorage START

/**
 * append's Item to bucketList localStorage or, create new bucketList item as Array.
 * @param {Object} bucketListItem '{ action: "climb a mountain", location: "Everest", datePlanned: null }'
 * 
 * @returns undefined
 */
function addBucketItemToLocalStorage(bucketListItem) {

  const storedBucketList = JSON.parse(localStorage.getItem("bucketList"));
  if (!storedBucketList) {
    localStorage.setItem("bucketList", JSON.stringify([bucketListItem]));  
  } else {
    storedBucketList.push(bucketListItem);
    localStorage.setItem("bucketList", JSON.stringify(storedBucketList));  
  }
}

// Load BucketList from Local Storage if there's content

if (window.localStorage.getItem('bucketList')) {
  const bucketListFromStorage = JSON.parse(window.localStorage.getItem('bucketList'));
  for (let i = 0; i < bucketListFromStorage.length; i++) {
    addItemToBucketList(bucketListFromStorage[i]); 
  }
}


// Persisting Items on BucketList on LocalStorage END