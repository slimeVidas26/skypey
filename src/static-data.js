console.clear();

const shortid = require('shortid');// shortid.generate() returns a unique "short" id
const txtgen = require('txtgen'); //txtgen.sentence() returns random "readable" sentences
const faker = require('faker');// faker is used for generating random fake data.
const _ = require('lodash')


/**
 * @returns {Object} - a new user object
 */
   function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.internet.avatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate()
  }
};

//console.log(generateUser())
// console.log(shortid.generate());
// console.log(shortid.characters());
// var randomName = faker.name.findName()
// console.log(randomName)
//console.log(Array.from('isaac'));

function generateUsers(numberOfUsers){

  return Array.from({length: numberOfUsers}, () => generateUser());
}

//console.log(generateUsers(1))


function generateMsg(number){
  return{
    number:number,
    text:txtgen.sentence(),
    is_user_msg:faker.random.boolean()
  }
}

//console.log(generateMsg())

function generateMsgs(numberOfMsgs){
  return Array.from({length:numberOfMsgs} , (v,i)=>generateMsg(i))
}
console.log(Array.from({length: 5}, (v, k) => {
  //console.log(v)
  return k
}));

//console.log(generateMsgs(3))

//console.log(generateUsers(2))





