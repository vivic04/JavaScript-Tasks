//Task 1
arr = [2,4,7,9,3, 4]
var accum = 0;
for (i = 0 ; i < arr.length; i++) {
    accum += arr[i] 
}

console.log(accum)

var accum = 0
for (i = 0 ; i < arr.length; i++) {
    accum -= arr[i] 
}

console.log(accum)


var accum = 1;
for (i = 0 ; i < arr.length; i++) {
    accum *= arr[i] 
}
console.log(accum)

var accum = 1;
for (i = 0 ; i < arr.length; i++) {
    accum /= arr[i] 
}

console.log(accum)
   
function checkPassword(password) {  

strength = 0
tips = ''
if (password.length < 6) { 
    tips += 'Too short'
}

if (password.length > 7) {

    strength += 1
}

if (password.match(/[a-z]/) && password.match(/[A-Z]/)) {
    strength += 1 
} else {
    tips += "Try capital and small letters"
}

if (password.match(/\d/)) {
    strength += 1;
} else {
    tips += "try letters"
}
if (password.match(/[^a-zA-Z\d]/)) {
    strength += 1;
} else {
    tips += "try special characters"
}

if (strength < 2) {
    return "Easy to guess. " + tips;
  } else if (strength == 2) {
    return "Medium difficulty. " + tips;
  } else if (strength == 3) {
    return "Difficult. " + tips;
  } else {
    return "Extremely difficult. " + tips;
  }
}

console.log(checkPassword("Animation12#"))

function pricesanddiscount (quantities, discount_percent, percent_tax) {
    var accum = 0;
    for (i = 0 ; i < quantities.length; i++) {
    accum += quantities[i] 
    }
    const total = accum
    const total_with_tax = (total + (total * percent_tax))
    const Final_price = (total_with_tax - (discount_percent * total_with_tax))
    return Final_price

}

console.log(pricesanddiscount([2,9,8,5], 0.2, 0.1))


//Task 2 
const animal = [
{
    firstname: 'Dog',
    sound: 'bark',
    type: 'ground',
    legs: 4
}, 
{
    firstname: 'Cat',
    sound: 'meow',
    type: 'ground',
    legs: 4
}, 
{
    firstname: 'Fish',
    sound: 'bobobo',
    type: 'water',
    legs: -1
}, 
{
    firstname: 'Pigeon',
    sound: 'brrbrr',
    type: 'sky',
    legs: 2
}
]

const OnlyGround = animal.filter(x => x.type === "ground")
console.log(OnlyGround)
const index_animal = animal.findIndex(animal => animal.firstname === "Cat"); 
console.log(index_animal)
const pigeon = animal.find(anim => anim.firstname === 'Pigeon'); 
console.log(pigeon)
const Onlyfourlegs = animal.filter(x => x.legs === 4); 
console.log(Onlyfourlegs)
console.log(animal)
const IsEveryoneAdded = animal.every(x => x.legs >= 0); 
console.log(IsEveryoneAdded)
const Doesthereexist = animal.some(x => x.firstname === "Fish"); 
console.log(Doesthereexist)
animal[2].legs = 0
const fish = animal.find(anim => anim.firstname === 'Fish'); 
console.log(fish)

const person = { 
    firstname: "yash", 
    lastname: "sharma", 

}

person.lastname = "singh"

console.log(person)


//Task 3
const languages = [
{ 
    name:'java',
    used:'often',
}, 
{ 
    name:'python',
    used:'less',
},{ 
    name:'c++',
    used:'often',
},{ 
    name:'assembly',
    used:'less',
},

]

const a = languages.pop()
console.log(a)
console.log(languages)
const assembly  =  { 
    name: 'assembly',
    used: 'often',
}
languages.push(assembly)
console.log(languages)
const removed = languages.shift()
console.log(removed)
languages.unshift(removed)
console.log(languages)

// mapping:
const index = languages.findIndex(x => x.name === 'python')
console.log (index)
languages[index].used = "often"
//languages[index].ver = "1.0"
console.log(languages)
//const new_python = {...languages[index], version : "1.0"}
//languages[index] = new_python
console.log(languages)


const Updatedlangauges = languages.map(lang => {
    if (lang.used === "often") {
    return {...lang,  profession: 'backend'};
    } else {
        return {...lang,  profession: 'frontend'};
    }
    
});

console.log(Updatedlangauges)

languages[index].used = "often"
console.log(languages)

//Task 4
const index_i = 2
const csharp  =  { 
    name: 'csharp',
    used: 'often',
    profession: 'frontend'
}
const Updatedslice = [
    ...Updatedlangauges.slice(0,index_i), 
    csharp,
    ...Updatedlangauges.slice(index_i+1, languages.length)

]

console.log(Updatedslice)

//Asyncronous Programming ,single threaded language (cannot use parallel)


const login = () => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        resolve('token')
    }, 1000);
    });
};

const users = (token) => {
    return new Promise((resolve, reject) => {
        if (token){
            setTimeout(() => {
                resolve('user data')

            }, 1000);
            

        } else {
        reject('token on available')
        }
    }); 
}
//Task 5
// Map - mutating methord (updates the data to store new attributes)
// Foreach - its an iterator, does not mutate the original array
// filter  - does not change the original array, just shows filtered data
// sort - does mutate the data, sorts it 
// find  - does not mutate the data, just finds info about something in that array
// findindex - does not mutate, just finds the index of data required
// some - does not mutate, just find if something is existant in the array
// every - does not mutate, just compares every element 
// indexOf - does not mutates, just finds first occuration 
// slice - does not mutate, creates a new variable
// splice - This method modifies the original array. 

const array_a = [
{
    name: 'john',
    sport: 'football',
    weight: 86,

},
{
    name: 'alex',
    sport: 'badminton',
    weight: 58,

},
{
    name: 'mellisa',
    sport: 'football',
    weight: 43,

},
{
    name: 'maria',
    sport: 'cricket',
    weight: 53,

},
{
    name: 'andrew',
    sport: 'cricket',
    weight: 78,

}
]

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 1, "Lemon", "Kiwi");
const dhruv  = {
    name: 'dhruv',
    sport: 'football',
    weight: 65
}
const rudy  = {
    name: 'rudy',
    sport: 'cricket',
    weight: 62
}

array_a.splice(3, 0, dhruv, rudy)
console.log(array_a)
array_a.splice(3,1)
console.log(array_a)
array_a.splice(1,1)
console.log(array_a)
//mutating

// const DisplayafterTime = {
//     return setTimeout(myfunc, 100)
// }
//Task 6
const my_promise  = new Promise(function(resolve, reject) {
    let n = 0
    if (n === 0) {
        const a = resolve('resolved')
    } else {
        const b  = reject('does not match')
    }
});
my_promise.then (x => {

    console.log("Fuillfilled", x);
}).catch(error => {

    console.log("rejected", error);
})


console.log(my_promise)

async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {(value);}, 
    function(error) {(error);}
  );
console.log(myFunction)

a1 = [1,2,4,7]

//Task 7
let str = " this is javascript training "
let b = str.toUpperCase()
console.log(b)

str1 = ['captalize',  'first',  'word',  'in' , 'this' , 'sentence']
str2 = "you can also do it for this one"
let words = str2.split(" ")
let cr  = words.slice(1)
console.log(cr)
console.log(str2)
str3 = ["and also this one"]


let c = [str1, str2, str3]
console.log(c)

const capatalize_first_words  = (c) => {
    for (list in c);
        list[0].toUpperCase() 
    console.log(c)
     
}


console.log(capatalize_first_words(c))

let arr9 = ['hello', 'hi' , "hello", 'this', 'is', 'hi']
const z = new Set(arr9)
console.log(z)
arr8 = new Array(z)
console.log(arr8 )
// Removed duplicates from the array


const new_promise = new Promise(function(resolve, reject) {
    let v = "hello, this is vihaan"
    if (v.includes('this')) {
        resolve('Included')
    } else {
        reject('Not included')
    }
}); 
new_promise.then (x => { 
    console.log("fuillfiled" , x);
}).catch (error  => {
  console.log("Rejected", error);
})

console.log(new_promise)

let arr5 = ['hello', 'hi' , "hello", 'this', 'is', 'hi']
function uniques (arr5) {
    accum = []
    for (words in arr9); 
        if (words in accum) {
            accum = accum
        } else {
            accum += words
        }
    return accum
}

string_longest = "find the longest word in this line"
var words1 = string_longest.split(" ");
console.log(words1[1])
// should be the word longest
const longest_func = (string) => {
    var words = string.split(" ");
    var longest_till_now = words[0]
    for (var i = 0; i < words.length; i ++) {
        if (words[i].length > longest_till_now.length); 
            longest_till_now = words[i]
    }
    return longest_till_now
}

console.log(longest_func(string_longest))

//Task nested

const nested_list = (nest) => {
    if ((typeof nest) === number) {
        return nest
    
    } else {
        accum = []
        accum += nested_list(nest)
    } return
}

const nest = 34
console.log(typeof nest)