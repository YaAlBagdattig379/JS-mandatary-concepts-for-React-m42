/**
 1.. json : a) stringify b) parse 
 2..fetch
 3..keys and values
 4..  for (especiallay for looping) : a) forEach b) Map
 5.. for : a) for of
 */


// 1... json =   a) stringify b) parse  'both of are how to work ?'
const student = {
     name: 'hero alam',
     age: 30,
     bankBalance : 40000
 }
 // a) for stringify from object to strigify
 const stri = JSON.stringify(student); 
 // console.log(stri) //op >>> {"name":"hero alam","age":30,"bankBalance":40000}
 // b) parse stringify from stringify to object
 const pars = JSON.parse(stri);
 // console.log(pars) // { name: 'hero alam', age: 30, bankBalance: 40000 }
 
 
 
 // 2...fetch         'you have to know about fetch how to work it.'
 /**
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(res => res.json())
 .then(data => console.log(data)) 
 // console.log(data) "data" er ekhane kivabe data ache bujte sune lool ba j kichui chao chalao.
*/
 // 3..a) keys  b) value  'you have to kknow how these work' ?
 const heroAlam = {
     realName: 'asraful alam',
     age: 25,
     movies : ['dui prithibi','rajar hat','amazon']
 }
 // a) keys 
 const allObjectKeys = Object.keys(heroAlam);
 // console.log(allObjectKeys) //op >> [ 'realName', 'age', 'movies' ]
 // b) values 
 const allObjectValues = Object.values(heroAlam);
 // console.log(allObjectValues) 
 //op >> [ 'asraful alam', 25, [ 'dui prithibi', 'rajar hat', 'amazon' ] ]
 
 
 
 // 4..for    
 // 4..1.forEach ekhon theke sob number gulor upor loop chalate  "forEach" use korno
 const nums = [33,44,55,66,78,88];
 nums.forEach(num => console.log(num))
 // 4..2. map tokhon chalate hobe jokhon index element gulo ke kichu kore return hisabe notun ekta array  dorkar.
 const map = nums.map(nam => nam * 2)
 // console.log(map) // [ 66, 88, 110, 132, 156, 176 ]
 
 
 // 5..for of 
 // 5..1. for of   >> for of will be used  on 'array like object'
 // 5..2. for in   >> for in will be used  on 'object to loop'
 
 // array of  Object exams; 
 // add and remove form an array 
 const products = [
     {name : 'mobile', price: 3000, brands:'samsung',color:'sky-blue'},
     {name : 'watch', price: 500, brands:'jk_44',color:'silver'},
     {name : 'laptop', price: 9000, brands:'opo',color:'white'},
     {name : 'pen', price: 50, brands:'20/20',color:'green'}
 ]
 // new products
 const newProduct =   {name:'pods',price: 200,brands:'ip',color:'white'}
 
 // copy 'products' array and and then add 'newProducts' 
 const updataProducts = [newProduct,...products];
 console.log(updataProducts);
 
 // create a new array without specific item/ mobile oject ti
 const remaing = products.filter(product => product.price !== 50);
//  console.log(remaing )
 