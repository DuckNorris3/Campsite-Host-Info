var mysql = require('mysql');
var faker = require('faker');

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
  connection.query(`CREATE TABLE host(id int NOT NULL AUTO_INCREMENT, hostName varchar(40), avatar varchar(240), primary key(id) )`,(err, result) => {
    if (err) throw err;
    console.log('table host created');
  });
  connection.query(`CREATE TABLE guest(id int NOT NULL AUTO_INCREMENT, guestName varchar(40), avatar varchar(240), primary key(id) )`,(err, result) => {
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
  var counter = 1;
  for (let i = 0; i < 100; i++ ) {
    var hostName = faker.name.findName();
    var hostAvatar = faker.internet.avatar();
    var guestName = faker.name.findName();
    var guestAvatar = faker.internet.avatar();
    var siteName = faker.company.companyName();
    var description = faker.commerce.productDescription();
    var hostId = faker.random.number(99);
    var location = {country: 'United States', state: `${faker.address.state()}`};
    var guestId = faker.random.number(99);
    var siteId = faker.random.number(99);



    connection.query(`INSERT INTO host (hostName, avatar) values ("${hostName}", "${hostAvatar}")`, (err, result) => {
      if (err) throw err;
    });
    connection.query(`INSERT INTO guest (guestName, avatar) values ("${guestName}", "${guestAvatar}")`, (err, result) => {
      if (err) throw err;
    });
    connection.query(`INSERT INTO site (siteName, hostId, location, description) values ("${siteName}", "${counter}", "${location}", "${description}")`, (err, result) => {
      if (err) throw err;
    });
    connection.query(`INSERT INTO guestRecommendSite (guestId, siteId) values ("${counter}", "${counter}")`, (err, result) => {
      if (err) throw err;
    });
    counter++;
  }

  connection.end();
})



