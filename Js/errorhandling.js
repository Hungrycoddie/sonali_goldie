// try {
//     let result = 10/0;
//     console.log(result);
// throw new Error("custom error example")
// }catch(error){
//     console.log("An error occured");
// }finally {
//     console.log("this will exucute regrdless of an error ");
// }


// try {
//     console.log(nonexixtingVariable);
// }catch (error){
//     console.error("cught aan error ", error.message)
// }finally {
//     console.log("clean up the code ");
// }

// function divideNumbers (a, b ){
//     let result;
//     try {
//         if(b === 0 ) throw new Error ("cannot divide by Zero")
//         result = a/b;
//     console.log("Result:" ,result );
//         }catch (error){
//             console.log("error", error.message);
//         }finally{
//             console.log("Division attempt is complete");
//         }
// }


// divideNumbers(20, 0)



// async function fetchData (){
//     try {
//         let response = await fetch (`https://api.github.com/users/${arun-cloud-dev}/followers`)
//     }
// }



// async function fetchGithubFollowers (){
//     try{

//         let response = await fetch ("https://api.github.com/users/Arun-cloud-dev")

    
//         if (!response.ok){
//             throw new Error(`Failed to fetch the followers : ${response.status} ${response.statusText}`)
//         }

//         let followers = await response.json();

        
//         const container = document.getElementById("followers-container")
//         followers.forEach(follower => {
//             const img = document.createElement("img");
//             img.src = follower.avatar_url;            
//             img.title = follower.login;
//             container.appendChild(img);
//         });

//     }catch (error){
//         console.log("Error", error.message);
//     }finally{
//         console.log("fetch atempt for followers complete");
//     }
// }


// fetchGithubFollowers();


async function fetchGitHubFollowers() {
    try {
        // Fetching user data from your API
        let response = await fetch("https://api.github.com/users/Arun-cloud-dev/followers");

        if (!response.ok) {
            throw new Error(`Failed to fetch followers: ${response.status} ${response.statusText}`);
        }

        // Parsing response JSON
        let followers = await response.json();

        // Displaying followers' avatars
        const container = document.getElementById("followers-container");
        followers.forEach(follower => {
            const img = document.createElement("img");
            img.src = follower.avatar_url;
            img.alt = `${follower.login}'s avatar`;
            img.style.width = "100px";
            img.style.height = "100px";
            img.style.margin = "5px";
            img.title = follower.login;
            container.appendChild(img);
        });

    } catch (error) {
        // Handling errors
        console.error("Error:", error.message);
    } finally {
        console.log("Fetch attempt for followers completed.");
    }
}

// Call the function to fetch followers
fetchGitHubFollowers();
