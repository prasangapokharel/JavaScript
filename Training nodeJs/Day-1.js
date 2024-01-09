//PROGRAM 1

function test() {
    let a = 2;
    if (true) {
        let a = 1
        console.log(a, 'This is a') //Output is "1" because only under "if" function 
    }
    console.log(a, 'This is result a')
}
test();



//PROGRAM 2

//Call back function in where - function where written under function
function callMuGf(){
    return 'I love you'
}

function me(callMuGf){
    return callMuGf()
}


//PROGRAM 3

//Using "newarr" to find length
let newarr = [1,2,3,4,5,6,7,8,9,10]
console.log(newarr.length,'is the length of array')

//"forEach" return the each value and its length, P=Value and I=Length; till "newarr"
newarr.forEach((p,i) => {
    console.log(p,i);
});

newarr.forEach((item) =>{
    if (item ===4){
        console.log(item, 'This is four')
    }
});


//PROGRAM 4
let mapdata = newarr.map((item) => {
    return item +2
})

console.log(mapdata, 'This is mapped result')
console.log(newarr, 'This is mapped result')




//PROGRAM

//Finding sum
// let a = 20;
// let b = 10;
// return console.log(a+b)