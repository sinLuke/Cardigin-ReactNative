const { _api } = require('./_api');

module.exports = {
  post: function(url, body, handler) {
    console.log('post');
    fetch(`${_api.protocol}${_api.domain}${_api.port}${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(responseJSON => {
        console.log(responseJSON);
        handler(responseJSON, null);
      })
      .catch(err => {
        handler(null, err);
      });
  },
  get: function(url, handler) {
    fetch(`${_api.protocol}${_api.domain}${_api.port}${url}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(responseJSON => {
        handler(responseJSON, null);
      })
      .catch(err => {
        handler(null, err);
      });
  }
};
