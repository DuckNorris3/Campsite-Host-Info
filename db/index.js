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

var readSites = (callback) => {
    connection.query('SELECT * from site', (err, result) => {
      if (err) callback(err);
      callback(null, result);
    })
}

module.exports.readSites = readSites;
