// //fetch
// https://api.github.com/users/Arun-cloud-dev/followers

fetch('https://api.github.com/users/Arun-cloud-dev')
.then(response => response.json() )
.then(data => {
 console.log(`Followers : ${data.avatar_url}`);

 const arun = document.getElementById('sow');
arun.innerHTML = `<img src="${data.avatar_url}" alt="Avatar" width="100" />`;


const location = document.getElementById('sonali');
location.innerHTML = data.location;

})


