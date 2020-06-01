let url="https://api.github.com/users";

let findGitUsers=async()=>{

let data=await window.fetch(url);
let response=await data.json();
console.log(response);
};
findGitUsers();