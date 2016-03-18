var apiKey = require('./../.env').apiKey;

exports.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName +'/repos?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    $('#results').append('<h3>Public Repositories</h3><ul>');
    response.forEach(function(repo){
    $('#results').append('<li>' + repo.name + ' : ' + repo.description + '</li>');
    });
    $('#results').append('</ul>');

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
