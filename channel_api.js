var raw_connect = require('./lib/connect').connect;
var ChannelModel = require('./lib/channel_model').ChannelModel;
var bluebird = require('bluebird');

function connect(url, connOptions) {
  return new bluebird(function(resolve, reject) {
    raw_connect(url, connOptions, function(err, conn) {
      if (err === null) resolve(new ChannelModel(conn));
      else reject(err);
    });
  });
};

module.exports.connect = connect;
module.exports.credentials = require('./lib/credentials');
