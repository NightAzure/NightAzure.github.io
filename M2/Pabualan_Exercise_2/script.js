const jsonString = '{"name": "Nokie Pabualan", "age": 20, "hobbies":["Sleeping","Eating"]}'; 
const jsonObject = JSON.parse(jsonString); 
console.log(jsonObject.name);  
console.log(jsonObject.age);   
const newJsonString = JSON.stringify(jsonObject); 
console.log(newJsonString);  

document.getElementById("name").innerHTML='<b>Name</b>: '+jsonObject.name;
document.getElementById("age").innerHTML='<b>Age</b>: '+jsonObject.age;
for(let i=0;i<jsonObject.hobbies.length;i++){
    document.getElementById("hobbies").innerHTML+=`<li>${jsonObject.hobbies[i]}</li>`;
}

