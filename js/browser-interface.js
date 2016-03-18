var search = require('./../js/search.js').search;
var getRepos = require('./../js/search.js').getRepos;

$(document).ready(function(){
  $('#userName').click(function(){
    var searchUserName = $('#userName').val();
    var newUser = new search(searchUserName);
    $.get(newUser.getRepos, function(response) {
    	$('.showUser').prepend("<h3>The repos for " + searchUserName + " are :</h3><hr>");
    	for (var i=0; i<response.length; i++) {
        $('.showName').append("<h4>" + response[i].name + "</h4><br>" + response[i].description + "<br><hr>");
	    }
    }).fail(function(error) {
      $('.showUser').text(error.responseJSON.message);
      console.log(response);
    });
    $('.showUser').empty();
    $('.showName').empty();
  });
});
