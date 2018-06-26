const fs=require('fs');
const os=require('os');
const _=require('lodash');
const yargs=require('yargs');


const notes=require('./notes2.js');

command=process.argv[2];
const argv = yargs.argv;


if(command==='add'){
  //console.log('Add');
  notes.addNote(argv.title, argv.body);
}
else if (command==='list'){
  //console.log('remove');
  notes.getAll();
}
else if (command==='read'){
  //console.log('reading note');
  notes.read(argv.title);
}

else if (command==='remove'){
  //console.log('reading note');
  notes.remove(argv.title);
}

else{
  console.log('nothing in command or unrecognized');
}
