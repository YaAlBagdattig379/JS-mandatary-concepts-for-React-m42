const products = [
    {name : 'mobile', price: 3000, brands:'samsung',color:'sky-blue'},
    {name : 'watch', price: 500, brands:'jk_44',color:'silver'},
    {name : 'laptop', price: 9000, brands:'opo',color:'white'},
    {name : 'pen', price: 50, brands:'20/20',color:'green'}
]
// 1..map
const brands = products.map(product => product.name);
// console.log(brands)
// 2.. forEach
products.forEach(product =>console.log(product.price));
// console.log(brands);