// console.log('start boiling the water ');



// setTimeout(()=>{
//     console.log("water is ready");
// }, 3000);


// console.log("strat choppin bveggies ");




// promise 


// const boilingwater = new Promise ((resolve , reject )=>{
//     setTimeout(() => {
//         resolve ("water is ready ")
//     }, 5000)
// } );

// console.log("start boiling the water ");


// boilingwater.then((a) =>{
//     console.log(a);
// } );

// console.log("start choppin the veggies ");


// async /await 

const boilWater = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("water is ready ")
        }, 5000)
    })
}

async function makeDinner(){
    console.log("start Boiling the water");
    const message = await boilWater ();
    console.log(message);
    console.log("Start Choppin the veggie");
}


makeDinner()


