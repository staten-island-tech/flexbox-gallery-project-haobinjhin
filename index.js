//console.log("Hello World")

//dont use var
var x = 45;

//let makes it so that for now y = something and you can redefine it later
let y = 45;
y = 34;
//this lets you make it so that the computer knows that a is a variable but can be defined later
let a;

//data types
let string = "Zhu Ba Jie";
let integer = 45;
let bool = true;
let nulls = null;
let undefind = undefined;

function add(x,y){
    return x + y
    //cant write a code after a return statement`
}

//conditional statements
/* let b = 3434;
if(b > 0){
    console.log("positive");
} else if(b < 0){
    console.log("negative");
} else if (b === 0){
    console.log("zero");
} else{
    console.log("not a number");
} */

function even(c){
    if(c%2 === 0){
        console.log("even");
    } else{
        console.log("odd");
    }
}


function bigger(a,b){
    if(a>b){
        console.log(a + " is bigger");
    } else if(a<b){
        console.log(b +" is bigger");
    } else if (a=b){
        console.log(a +" and " + b)
    }
}


// x = y ? t : f
// is x = to y if true print t if false print f
function juice_or_beer(age) {
    age = age >= 21 ? "1 million beers" : "fruit juice";
    return age
}





function zooornot(type,weight,preyorpred){
    if (((type === "Herbivore") || (weight <50)) && (preyorpred === "Prey")){
        return true
    }else {
        return false
    }
}

console.log(zooornot("Carnivore", 100, "Prey"))

function themepark(age, membership, resident){
    if (((age <12) || (age >65)) && ((membership === "Yes") || (resident ==="Yes"))){
        return true
    }else {
        return false
    }
}
console.log(themepark(15,"NO","YES"))


