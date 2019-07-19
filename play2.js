let person ={
    name : "Thang",
    age: 35,
    greet() {
        console.log('my name is ' + this.name)
    }
};

console.log(person);

let destruc = ({name}) =>{
    console.log('name is' + name)
}

destruc(person)

const arr = ['thang','tran'];
for (let ho of arr){
    console.log(ho);
}

const [hobby1,hobby2,hobby3] = arr;
console.log(hobby1,hobby2,hobby3);

console.log(arr.map( name =>{
    return "firstnane " + name;
}))