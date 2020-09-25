var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connected to mysql, but no db is selected yet');
  connection.query('DROP DATABASE IF EXISTS tenthopCampsiteInfo', (err, result) => {
    if (err) throw err;
    console.log('dropped database tenthopCampsiteInfo');
  });
  connection.query('CREATE DATABASE tenthopCampsiteInfo', (err, result) => {
    if (err) throw err;
    console.log('created database tenthopCampsiteInfo');
  });
  connection.query('USE tenthopCampsiteInfo');
  connection.query(`CREATE TABLE host(id int NOT NULL AUTO_INCREMENT, hostName varchar(40), primary key(id) )`,(err, result) => {
    if (err) throw err;
    console.log('table host created');
  });
  connection.query(`CREATE TABLE guest(id int NOT NULL AUTO_INCREMENT, guestName varchar(40), primary key(id) )`,(err, result) => {
    if (err) throw err;
    console.log('table guest created');
  });
  connection.query(`CREATE TABLE site(id int NOT NULL AUTO_INCREMENT, siteName varchar(120), hostId int, description varchar(1000), location varchar(240), primary key(id), foreign key (hostId) references host(id))`,(err, result) => {
    if (err) throw err;
    console.log('table site created');
  });

  connection.query(`CREATE TABLE guestRecommendSite (guestId int, siteId int, foreign key (guestId) references guest(id), foreign key (siteId) references site(id) )`, (err, result) => {
    if (err) throw err;
    console.log('table guestRecommendSite created');
  });

  connection.end();

})



