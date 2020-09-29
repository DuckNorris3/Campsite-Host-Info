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
  connection.query(`CREATE TABLE host(id int NOT NULL AUTO_INCREMENT, hostName varchar(40), hostAvatar varchar(240), primary key(id) )`,(err, result) => {
    if (err) throw err;
    console.log('table host created');
  });
  connection.query(`CREATE TABLE guest(id int NOT NULL AUTO_INCREMENT, guestName varchar(40), guestAvatar varchar(240), primary key(id) )`,(err, result) => {
    if (err) throw err;
    console.log('table guest created');
  });
  connection.query(`CREATE TABLE site(id int NOT NULL AUTO_INCREMENT, siteName varchar(120), hostId int, description varchar(1000), country varchar(60), state varchar(60), primary key(id), foreign key (hostId) references host(id))`,(err, result) => {
    if (err) throw err;
    console.log('table site created');
  });

  connection.query(`CREATE TABLE guestRecommendSite (guestId int, siteId int, recommend boolean, foreign key (guestId) references guest(id), foreign key (siteId) references site(id) )`, (err, result) => {
    if (err) throw err;
    console.log('table guestRecommendSite created');
  });

  for (let i = 1; i <= 100; i++ ) {
    var hostName = faker.name.findName();
    var hostAvatar = faker.internet.avatar();
    var guestName = faker.name.findName();
    var guestAvatar = faker.internet.avatar();
    var siteName = faker.company.companyName();
    var description = faker.lorem.paragraphs();
    var hostId = faker.random.number(99);
    var country = 'United States';
    var state = faker.address.state();
    // var guestId = faker.random.number(i);
    // var siteId = faker.random.number(i);

    connection.query(`INSERT INTO host (hostName, hostAvatar) values ("${hostName}", "${hostAvatar}")`, (err, result) => {
      if (err) throw err;
    });
    connection.query(`INSERT INTO guest (guestName, guestAvatar) values ("${guestName}", "${guestAvatar}")`, (err, result) => {
      if (err) throw err;
    });
    connection.query(`INSERT INTO site (siteName, hostId, country, state, description) values ("${siteName}", "${i}", "${country}", "${state}", "${description}")`, (err, result) => {
      if (err) throw err;
    });
    // connection.query(`INSERT INTO guestRecommendSite (guestId, siteId) values ("${i}", "${i}")`, (err, result) => {
    //   if (err) throw err;
    // });

    var min = 1;
    for (var j = 1; j <= (i/4) + 1; j++) {
    if (min - 10 > 0) {
      min = min - 10;
    }
    var guestId = Math.floor(Math.random() * (i - 1) + 1);
    var siteId = Math.floor(Math.random() * (i - min) + min);
    var recommend = false;
    if (Math.random() <= .8) {
      recommend = true;
    }
      connection.query(`INSERT INTO guestRecommendSite (guestId, siteId, recommend) values ("${guestId}", "${siteId}", ${recommend})`, (err, result) => {
        if (err) throw err;
      });
    }
  }

  connection.end();
})





