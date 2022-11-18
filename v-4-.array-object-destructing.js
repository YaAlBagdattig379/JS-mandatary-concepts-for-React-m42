// two topics are disscussed in this  video 
// ************A..array and object destructing******************* 
// ************B.. optional chaining******************* 

//A...(i).....egp... array destructing 
const  array = [22,44];
// const first = array[0]; //22
// const second = array[1];//44
//egp..1.. destructing array way
const [first, second] = [22,44]
// console.log(first,second); // 22 44
//egp..2.. destructing array way
const [ frst, scnd] = array;
// console.log(frst, scnd) // 22 44
//egp..3.. destructing array way
function  boxfiy(first,second){
    const makeArray = [first,second] ;
    return makeArray;
}
// const result = boxfiy(22,33); // egp...1...op >>>  [ 22, 33 ] 
const [first1,second2] = [22,33];
const result = boxfiy(first1,second2); //egp...2...op >>>  [ 22, 33 ] 
// const [first1,second2] = boxfiy(22,33); //op >>>  [ 22, 33 ] 
const [first11,second22] = boxfiy(22,33); //egp...3...op >>>  22 33 
// console.log(first11,second22);
// const [first1,second2] = boxfiy(22,33); //op >>>  [ 22, 33 ] 
const boudi = {
    name : 'tunir Maa',
    age : 30,
    color : 'attracked',
    bankBalance : 3000,
    sisters : ['aporna','toporna','khoporna']
}
// cosnt [prothm,scmd,thrd] = boudi.sisters;
const [prothm,scmd,thrd] = boudi.sisters;
// console.log([prothm,scmd,thrd]); // op>> [ 'aporna', 'toporna', 'khoporna' ]


//A...(ii).....egp... object destructing 
// egp... 1
const {name, age, color} = {age: 45,name:'sonali',color:'glorious'}
const {id, balance , bfName} = {bfName: 'hero alam', id: 4445,balance:4646344}
// console.log({name, age, color})//op> {name: 'sonali', age: 45, color: 'glorious'}
//object destructing er bepare {name,age,color} right side a ja ache left a ulta palta {er viter}  thakle hoi but array destrukcing er hoi emon rule na ota index..
// egp... 2
const youngBoudi = {
    nameTitle : 'tuirMa',
    ide: 'vs code',
    professsion : 'influencer',
    closeFrieds : [ 'onamika','ponamika','khonamika'],
    specification :{
        aAge: 30,
        weight: 55,
        drink : 'water',
        watch :{
            name: 'sona',
            price: 500,
            model : 'id-sona4'
        }
    }
}
const {aAge , drink} = youngBoudi.specification; 
// console.log({aAge , drink}) // op>> { aAge: 30, drink: 'water' }
const {price,model} = youngBoudi.specification.watch; 
// console.log({price , model}) // op>> { price: 500, model: 'id-sona4' }
////// egp with "?" optional chaining 
const {heloo} = youngBoudi.specification.watch; 
console.log({heloo}); // op>> { price: 500, model: 'id-sona4' }
                                                                   
/**
 ********optional chaining...'?' this sign are called optional chain*****
 */


