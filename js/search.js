var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName +'/repos?per_page=100&access_token=' + apiKey).then(function(response){

    console.log(response);

    $('#results').append('<h3>Public Repositories</h3><ul>');
    response.forEach(function(repo){

      if(repo.description === ""){
        $('#results').append('<li>' + repo.name + ' : <p>FILL OUT YOUR DESCRIPTIONS!!!</p></li>');
      } else {
        $('#results').append('<li>' + repo.name + ' : ' + '<br>' + repo.description + '</li>');
         }
         $('#results').append('</ul>');

    })
    }).fail(function(error){
    console.log(error.responseJSON.message);;
  });
};
