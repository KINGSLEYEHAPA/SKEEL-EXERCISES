const objectName ={
    name:"test",
    age: 21,
    country:"Earth"
};

for(key in objectName){
    let value;

    value =objectName[key];
    console.log(`${key}:${value}`);

}