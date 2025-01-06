// const jsonString = '{"name": "Alpha", "age": 25, "skills": ["JavaScript", "Angular"]}';

// const jsonObject = { name: "Alpha", age: 25, skills: ["JavaScript", "Angular"] };



// const jsObject = JSON.parse(jsonString)



// console.log(jsObject.name);
// console.log(jsObject.skills);



// const jsString = JSON.stringify(jsonObject)

// console.log(jsString);


// const data = {
//     name: "Alpha",
//     age: 25,
//     address: {
//       city: "Chennai",
//       state: "Tamil Nadu"
//     }
//   };

//   console.log(data.name);
//   console.log(data.address.city);



// const jsonArray = [
//     { name: "Alpha", age: 25 },
//     { name: "Beta", age: 28 }
//   ];
  

//   jsonArray.forEach(item => {
//     console.log(item.name , item.age);
//   })
  


//   const jsonObject = {
//     name:"Aru",
//     age :25,
//   }


//   for (const key in jsonObject){
//     console.log(`${key}: ${jsonObject[key]}`);
//   }


// fetch ('https://api.github.com/users/Arun-cloud-dev/followers')

// .then(response => response.json())
// .then (data => {
//     console.log(data );
// })
// .catch(error => {
//     console.error('Error:', error);
//   });




// const user = {name :"ar" , age:25}


// localStorage.setItem("user" , JSON.stringify(user));





// fetch ('https://api.github.com/users/Arun-cloud-dev/followers')

// .then(response => response.json())
// .then (data => {
//     console.log(`${data.login}`);
// })


fetch('https://api.github.com/users/Arun-cloud-dev')
.then(response => response.json() )
.then(data => {
 console.log(`Followers : ${data.avatar_url}`);
})




const 