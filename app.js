console.log('App Started');

const fs=require('fs');
const os=require('os');
const _=require('lodash');

const notes=require('./notes.js');

console.log(process.argv);

var command = process.argv[2];
var user =os.userInfo();

console.log(_.isString('String'));
console.log(_.isString(true));

var filteredArray=_.uniq(['Andrew', 1, 2, 1, 'Miles', 1 , 4, 2, 'Mike']);
console.log(filteredArray);

fs.appendFile('greetings.txt', `Helloworld ${user.userName}!`, function(err){
  if(err){

    console.log('unable to write the file');

  }
  else{

    notes.addFunction();

  }

  if(command==='add'){
    console.log('Add');
  }
  else if (command==='remove'){
    console.log('remove');
  }

  else{
    console.log('nothing in command or unrecognized');
  }












});
