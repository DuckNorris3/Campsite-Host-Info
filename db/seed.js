/* eslint-disable no-console */
const mysql = require('mysql');
// eslint-disable-next-line import/no-extraneous-dependencies
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to mysql, but no db is selected yet');
  connection.query('DROP DATABASE IF EXISTS tenthopCampsiteInfo', (error) => {
    if (error) throw error;
    console.log('dropped database tenthopCampsiteInfo');
  });
  connection.query('CREATE DATABASE tenthopCampsiteInfo', (error) => {
    if (error) throw error;
    console.log('created database tenthopCampsiteInfo');
  });
  connection.query('USE tenthopCampsiteInfo');
  connection.query('CREATE TABLE host(id int NOT NULL AUTO_INCREMENT, hostName varchar(40), hostAvatar varchar(240), starHost boolean, primary key(id) )', (error) => {
    if (error) throw error;
    console.log('table host created');
  });
  connection.query('CREATE TABLE guest(id int NOT NULL AUTO_INCREMENT, guestName varchar(40), guestAvatar varchar(240), primary key(id) )', (error) => {
    if (error) throw error;
    console.log('table guest created');
  });
  connection.query('CREATE TABLE site(id int NOT NULL AUTO_INCREMENT, siteName varchar(120), hostId int, description varchar(1000), country varchar(60), state varchar(60), covid boolean, verified boolean, nearby varchar(200), primary key(id), foreign key (hostId) references host(id))', (error) => {
    if (error) throw error;
    console.log('table site created');
  });

  connection.query('CREATE TABLE guestRecommendSite (guestId int, siteId int, recommend boolean, foreign key (guestId) references guest(id), foreign key (siteId) references site(id) )', (error) => {
    if (error) throw error;
    console.log('table guestRecommendSite created');
  });

  for (let i = 1; i <= 100; i += 1) {
    const hostName = faker.name.findName();
    const hostAvatar = faker.internet.avatar();
    const guestName = faker.name.findName();
    const guestAvatar = faker.internet.avatar();
    const siteName = faker.company.companyName();
    const description = faker.lorem.paragraphs();
    const country = 'United States';
    const state = faker.address.state();
    const nearby = `${faker.address.city()} State Park`;
    let covidCertified = false;
    if (Math.random() <= 0.8) {
      covidCertified = true;
    }
    let verified = false;
    if (Math.random() <= 0.8) {
      verified = true;
    }
    let starHost = false;
    if (Math.random() <= 0.8) {
      starHost = true;
    }

    connection.query(`INSERT INTO host (hostName, hostAvatar, starHost) values ("${hostName}", "${hostAvatar}", ${starHost})`, (error) => {
      if (error) throw error;
    });
    connection.query(`INSERT INTO guest (guestName, guestAvatar) values ("${guestName}", "${guestAvatar}")`, (error) => {
      if (error) throw error;
    });
    connection.query(`INSERT INTO site (siteName, hostId, country, state, description, covid, verified, nearby) values ("${siteName}", "${i}", "${country}", "${state}", "${description}", ${covidCertified}, ${verified}, "${nearby}")`, (error) => {
      if (error) throw error;
    });

    let min = 1;
    for (let j = 1; j <= (i / 4) + 1; j += 1) {
      if (min - 10 > 0) {
        min -= 10;
      }
      const guestId = Math.floor(Math.random() * (i - 1) + 1);
      const siteId = Math.floor(Math.random() * (i - min) + min);
      let recommend = false;
      if (Math.random() <= 0.8) {
        recommend = true;
      }
      connection.query(`INSERT INTO guestRecommendSite (guestId, siteId, recommend) values ("${guestId}", "${siteId}", ${recommend})`, (error) => {
        if (error) throw error;
      });
    }
  }

  connection.end();
});
