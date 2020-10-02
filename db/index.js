/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting to database');
    throw err;
  }
  console.log('connected to db');
  connection.query('use tenthopCampsiteInfo', (error) => {
    if (error) {
      console.log('error connecting to tenthopCampsiteInfo');
      throw error;
    }
    console.log('connected to tentHopCampsiteInfo');
  });
});

const readSites = (siteId, callback) => {
  connection.query(`select site.siteName, host.hostName, host.hostAvatar, site.description, site.country, site.state  from site inner join host on (site.hostid = host.id)  where site.id = ${siteId};`, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
};

const siteRecommend = (siteId, callback) => {
  connection.query(`select guest.guestName, guest.guestAvatar, guestrecommendsite.recommend   from site inner join guestrecommendsite on (site.id = guestrecommendsite.siteid) inner join guest on (guest.id = guestrecommendsite.guestid) where site.id = ${siteId} order by recommend desc;`, (err, result) => {
    if (err) callback(err);
    callback(null, result);
  });
};

module.exports.readSites = readSites;
module.exports.siteRecommend = siteRecommend;
