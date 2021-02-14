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
  }
});

/**
 * Append your goal to your Bucket List
 * @param {*} bucketListItem
 */
function AddItemToBucketList(bucketListItem) {
  let newItem = `<li>${bucketListItem['action']}`
  if (bucketListItem['location']) {
    newItem += `, ${bucketListItem['location']}`
  }
  if (bucketListItem['datePlanned']) {
    // TODO make date human readable
    newItem += `, ${bucketListItem['datePlanned']}`
  }
  newItem += `.</li>`
  /* remove first sample Item */
  removeEmptyLines()
  /* Add Item to list */
  $('#bucketList').prepend(newItem);
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

  let firstItem = $('.removed-on-first-iteraction').text()
  if (firstItem === 'Add your first Item') {
    $('.removed-on-first-iteraction').remove();
  }
}