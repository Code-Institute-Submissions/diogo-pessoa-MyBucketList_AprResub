// TODO remove when development complete
console.log('Jquery script loaded')

// Section for Jumbotron Bucket list hide and toggle Event listener
$('#collapse-bucketList-info').hide();

$('#bucketlist-description').click(function (e) { 
    e.preventDefault();
    $('#collapse-bucketList-info').toggle('slow');
});
