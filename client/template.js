
Template.showpeople.helpers({
  peoplelist() {return People.find()},
})

Template.addperson.events({
  'click button'(elt,instance) {
    const name = instance.$('#name').val();
    const year = instance.$('#birthyear').val();
    const birthyear = parseInt(year);
    console.log('adding ' + name);
    instance.$('#name').val("");
    instance.$('#birthyear').val("");
    //this empties the text boxes after you enter something
    People.insert({name:name, birthyear:birthyear})
    //People.insert({name,birthyear})
  }
})

Template.personrow.events({
  'click span'(elt,instance){
    console.dir(this);
    //this find the mongoid so we can delete something
    console.log(this.person._id);
    //this used to only show the word Object
    People.remove(this.person._id);
  }
})
