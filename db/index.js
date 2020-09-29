var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root'
});

connection.connect(function(err) {
  if (err) {
    console.log('error connecting to database');
    throw err;
  }
  console.log('connected to db')
  connection.query('use tenthopCampsiteInfo', (err, result) => {
    if (err) {
      console.log('error connecting to tenthopCampsiteInfo');
      throw err;
    }
    console.log('connected to tentHopCampsiteInfo')
  });
});

var readSites = (siteId, callback) => {
    connection.query(`select site.siteName, host.hostName, host.hostAvatar, site.description, site.country, site.state, guest.guestName, guest.guestAvatar  from site inner join host on (site.hostid = host.id) inner join guestrecommendsite on (site.id = guestrecommendsite.siteid) inner join guest on (guest.id = guestrecommendsite.guestid) where site.id = ${siteId};`, (err, result) => {
      if (err) callback(err);
      callback(null, result);
    })
}

module.exports.readSites = readSites;
