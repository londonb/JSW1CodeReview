var getRepos = require('./../js/search.js').getRepos;

$(document).ready(function(){
  $('#userRepo').click(function(){
   var userName = $('#userName').val();
   getRepos(userName);
  });
});
