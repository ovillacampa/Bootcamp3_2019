//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
      uri: 'mongodb+srv://ovillacampa:Supzup99@cluster0-1snxj.mongodb.net/DbBootcamp2?retryWrites=true&w=majority', //place the URI of your mongo database here.
  },
  openCage: {
	  key: '99543bde7d144338a88a6bd691c5f290'
  },
  port: 8080
};