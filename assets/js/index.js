/**
 *  Jumbotron
 */
$('#collapse-bucketList-info').hide();
$('#bucketlist-description').click(function(e) {
  e.preventDefault();
  $('#collapse-bucketList-info').toggle('slow');
});

/**
 * Form submit
 */

$('#add-bucketlist-item-form').submit(function(e) {
  e.preventDefault();
  const bucketListItem = {
    'action': $("#bucketlist-item").val(),
    'location': $("#location").val() || null,
    'datePlanned': $("#date-planned").val() || null
  }
  if (bucketListItem['action']) {
    AddItemToBucketList(bucketListItem)
  } else {
    const message = 'Your goal is empty.'
    const id = '#add-bucketlist-item-form'
    showToast(message, id);
  }
});

/**
 * Append your goal to your Bucket List
 * @param {Object} bucketListItem
 */
function AddItemToBucketList(bucketListItem) {
  let newItem = `<li>${bucketListItem['action']}`
  if (bucketListItem['location']) {
    newItem += `, ${bucketListItem['location']}`
  }
  if (bucketListItem['datePlanned']) {
    const DateForAction = formatDate(bucketListItem['datePlanned'])
    newItem += `, ${DateForAction}`
  }
  newItem += `<i class="removeListItem fa fa-times-circle"></i></li>`
  /* remove first sample Item */
  removeEmptyLines()
  /* Add Item to list */
  $('#bucketList').prepend(newItem);
  $('#send-list-by-email').removeAttr('hidden');
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
  return new Date(plannedDate).toDateString()
}

/**
 *  remove Itemfrom list
 */
$('ul').on('click', '.removeListItem', function() {
  // do something
  $(this).parent().remove()
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

  let toast = `<!-- Then put toasts within -->
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="..." class="rounded mr-2" alt="...">
        <strong class="mr-auto">My BucketList</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="toast-body">
        Your goal is empty.
      </div>
    </div>`

    $(toast).appendTo('form');

  $('.toast').toast('show');
}

/**
 * Parses BucketList of at least one item into friendly format to email user.
 */
function parseBucketList() {
  // TODO function to parse List Content
}

// TODO test function
// TODO scroll window to center the email form
// TODO adding button to hide email form again if the user changes his mind
/**
 * Event Listener for send email button show email form and hides send-list button
 * 
 */
$('#send-list-by-email').on('click', function () {
  console.log('Replacing button with form')
  $(this).siblings('div').removeAttr('hidden');
  $(this).hide()   
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
  }
  console.log(emailDetails) // TODO function WIP
  if (emailDetails['username']) {
  //   console.log('sending Email, but no really')
  //   // sendEmail(emailDetails)
  } else {
    const message = 'Check your added details'
    const id = '#emailDetails'
    showToast(message, id);  // TODO bug Toast Shows in both 
  }
});

// TODO emailJs email my list
/**
 * Receives a data obejct with email, name and list and calls emailJS Api.
 * @param {Object} data 
 */
function sendEmail(data) {
  emailjs.init('user_ON7XddmWkEX1msv4OfqwC');
  emailjs.send("service_leir2b4","template_z8rftx6",{
    email: `${data['email']}`,
    to_name: `${data['name']}`,
    message: `${data['list']}`,
    });  
}
