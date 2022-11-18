// ****************************shorcut example*******************************
// 1... TRUTHY AND FALSY examples
// 1.A.. truthy lists
 // >>> i) 'abc',ii) 4, iii) true iv) {}, v) []

// 1.B.. falsy lists
 // >>> i) '',ii) 0, iii) null,iv) undefined, v) false



 // 2....ternary examples : what is it? eti condition er motoi but 1 line diya
//        diclare kora jai.
// normal condition 
const bankBalace= 20;
let decision;
if( bankBalace > 30){
      decision = 'i will take dinner in a hotel!'
}else{
    decision = 'i will take nothing !'
}
// console.log(decision);
// ternary exam :..1..
let decision2 = (bankBalace < 10 )?'i will take cokes!':'i will take kichuna !'
// console.log(decision2)
// ternary exam :..2..
let decision3 = (bankBalace > 10 && bankBalace < 30 )?'i will take cokes!':'i will take kichuna !'
// console.log(decision3)


 // 3.
//  number to String
let roll = 13;
// console.log(roll + '' ); //  13   << this is string !
// string to number
let roll2 = ' 14';
// console.log(+roll2); // 14   <<< this number was numeric !


 // 4.    truthy 
const isActive = false;
const showUser = () => console.log('show user')
const hideUser = () => console.log('hide user')
// 4..i)
 isActive ?  showUser() : hideUser();
// 4..ii) use '&&' if the left side variable value is true then left  will  be excuted
// isActive && showUser() 
// 4..iii) use '||' if the left side variable value is false then it will  be excuted
// isActive  ||  hideUser() 

//..5...toggle boolean :>> (boolean values are changed using toggle boolean way)
let isActive2 = true// let isActive = false; 
isActive2 = !isActive2 // isActive = !isActive
// console.log(isActive2);//>>op>>false // console.log(isActive) 