// let array = ["asadbek", 1, true, null, {a: 15}, [100, 200], {addres:["toshkent", "uzbekiston"]}]
// console.log(array[4].a);
// console.log(array[6].addres[1]);

// const USERS = [
//     {
//         id: "sbncbckl89",
//         usermame: "Asadbek21",
//         bio: "maqsad sari olga",
//         flovers: ["klsdjqoidoi", "knxcbdjacbij"],
//         floving: ["lndlkfnlm", "wenwiuet6e"],
//         posts: [{
//             url: "//htps...",
//             title: "ayriliq",
//             likes: [
//                 {
//                     id: "dnqdsxk",
//                     name: "asadbek",
//                 },
//                 {
//                     id: "dnqdsxk",
//                     name: "shoxrux",
//                 },
//             ],
//             comments:[
//                 {
//                     id: "qjqwd6q",
//                     name: "Asadbek",
//                 },
//                 {
//                     id: "djdhqdy8",
//                     name: "shoxruh",
//                     ims: "Nexi 2 legenda",
//                 },
//             ]
//         }

//         ]
//     },  
// ]
// console.log(USERS ); 




let count = document.querySelector(".count")
let offset = 0
function inc(){
    offset++
    count.innerHTML = offset
}
function reset(){
    offset = 0
    count.innerHTML = offset
    
}
function dec(){
    offset--
    count.innerHTML = offset
}