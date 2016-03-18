var apiKey = require('./../.env').apiKey;


exports.search = function(userName) {
  this.userName = userName;
};

exports.getRepos = function() {
  return 'https://api.github.com/users/' + this.userName + '?access_token=' + apiKey;
};
