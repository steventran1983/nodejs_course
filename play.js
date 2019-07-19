const name = "Thang";
let age = "35";
const hasHobbies = true;

function summarize(userName, userAge, userhashobbie){
    return(
        'Name is ' + userName + "age " + userAge + 'user has hobby: ' + userhashobbie
    );
}

const summrizes = (name,age,hasHobbies)=>{
    return(
        'Name is ' + name + "age " + age + 'user has hobby: ' + hasHobbies
    );
}

const sum = (a,b) => (a +b);

console.log(summarize(name,age,hasHobbies));
console.log(summrizes(name,age,hasHobbies));
console.log(sum(1,2))