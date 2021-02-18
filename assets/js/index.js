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

$('#add-bucketlist-item-form').submit(function(e) {
  e.preventDefault();
  const bucketListItem = {
    'action': $("#bucketlist-item").val(),
    'location': $("#location").val() || null,
    'datePlanned': $("#date-planned").val() || null
  };
  if (bucketListItem.action) {
    AddItemToBucketList(bucketListItem);
  } else {
    alert('Missing an goal on this Item!');
  }
});

/**
 * Append your goal to your Bucket List
 * @param {Object} bucketListItem
 */
function AddItemToBucketList(bucketListItem) {
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
  $('#bucketList').prepend(newItem);
  if ($('#emailDetails').parent().attr('hidden')) {
    $('#send-list-by-email').removeAttr('hidden');
  }
}

/**
 * Clean-up Sample entry from list 
 */
function removeEmptyLines() {
  /** removes sample line on first prepend */
  const lastLine = $('#bucketList').children('li').last();
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
$('ul').on('click', '.removeListItem', function() {
  // removes li element from bucketList
  $(this).parent().remove();
  // hides email form and button
  if ($('#bucketList').children('li').length == 0 ) {
    console.log('hide email button and form');
    $('#send-list-by-email').attr('hidden', '');
    $('#emailDetails').parent().attr('hidden', '');
  }
});


/**
 *  Re-order List Item
 * using Jquery-UI library
 */

$('#bucketList').sortable();  
$('#bucketList').disableSelection();

/**
 * Adds a toast warning in case goals field is not filled
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
 * Parses BucketList of at least one item into friendly format to email user.
 */
function parseBucketList() {
  let stringBucketList = ``;
  const htmlBucketList = $('#bucketList').children('li');
  let order = 0;
  for (const liElement of htmlBucketList) {
    if(liElement.innerText) {
      stringBucketList += `${++order} - ${liElement.innerText}; `;  
    }
  }
  return stringBucketList;
}

/**
 * Event Listener for send email button show email form and hides send-list button
 * 
 */
$('#send-list-by-email').on('click', function () {
  $('#emailDetails').parent().removeAttr('hidden');
  $(this).attr('hidden', '');
  //scroll to form
  $('html').stop().animate({
    'scrollTop': $('#emailDetails').offset().top
}, 800, 'swing');
});


/**
 * Email form Submit handled here 
 */
$('#emailDetails').submit(function(e) {
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
