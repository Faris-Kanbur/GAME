document.getElementById("submit_btn").addEventListener("click", ssubmitUser);

let counter = 0;
const random = Math.floor(Math.random() * 100) + 1;

function ssubmitUser() {

    let num = document.getElementById("result").value;

    counter +=1;
    if (random==num){
            document.getElementById("result_2").innerHTML ="You are right";
            alert("You are the winner" + "You guessed " + counter + " times!" );
            document.getElementById("counter").innerHTML = "Thanks for playing game.";
        }

    // else if (isNaN(num)) {
    //         document.getElementById("answer").innerHTML = "Are you sure that this is a number?";
    //         document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    // }
    else if (num > random){
            document.getElementById("result_2").innerHTML ="pls chose small number";
            document.getElementById("counter").innerHTML = "This is your test number:" + counter;
    }

    else {
            document.getElementById("result_2").innerHTML ="pls chose bigger number";
            document.getElementById("counter").innerHTML = "This is your test number:" + counter;
            
        }

        }
        
   
   
   
   
   







//         document.getElementById("submit_btn").addEventListener("click", ssubmitUser);

// function submitUser() {

// const inputx = document.getElementById("result").value;
// const outputx = Math.floor(Math.random() * 100) + 1;


// for (var i = 0; i < 5; i++) {
        
//         if (inputx===outputx){
//             document.getElementById("result_2").innerHTML ="pls enter a just number";
            
//         }

//         else if (inputx=outputx){
//             document.getElementById("result_2").innerHTML ="You are right";
//             break
//         }



//         else if (inputx > outputx){
//             document.getElementById("result_2").innerHTML ="pls chose small number";
//         }


//         else {
//             document.getElementById("result_2").innerHTML ="pls chose bigger number";
//         }
//             }


//         }
   
   
   
   
   