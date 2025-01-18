function changeTheme (){
    let body = document.querySelector("body");
        if (body.classList.contains ("dark")) {
           body.classList.remove("dark");
        } else {
            body.classList.add("dark");
           }    
}
let themeButton = document.querySelector(".changeThemeBtn");
themeButton.addEventListener("click", changeTheme);


function contactUs() {
    // let question = prompt("Interested in my journey?");
    let answer = prompt("Enter Yes or No");
    if (answer.toLowerCase() === "yes") {
        let h1 = document.querySelector('h1');
        h1.innerHTML = "Thanks! I will work on it."; 
    } else {
                let h1 = document.querySelector('h1');
                h1.innerHTML = "I appreciate your honesty.";
            }
        }
let callToAction = document.querySelector(".callToAction");
callToAction.addEventListener("click", contactUs);


// function contactUs() {
//     // Prompt user for interest
//     let question = prompt("Are you interested in my journey?");
//     if (question === null) {
//         // If the user cancels the prompt, exit the function
//         return;
//     }

//     // Prompt for Yes or No
//     let answer = prompt("Enter Yes or No:");
//     if (answer === null) {
//         // If the user cancels the prompt, exit the function
//         return;
//     }

//     // Normalize the input for case-insensitive comparison
//     answer = answer.toLowerCase();

//     // Check the user's response
//     if (answer === "yes") {
//         let h1 = document.querySelector("h1");
//         h1.innerHTML = "Thanks! I will work on it.";
//     } else if (answer === "no") {
//         let h1 = document.querySelector("h1");
//         h1.innerHTML = "I appreciate your honesty.";
//     } else {
//         alert("Please enter a valid response: Yes or No.");
//     }
// }

