import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {//this is how you make arguement: this has no arguements
  // code to run on server at startup
  People.remove({});  // clear the database, this is really bad usually
  People.insert({name:'Tim',birthyear:1955});
  People.insert({name:'Caitlin',birthyear:1995});
});
