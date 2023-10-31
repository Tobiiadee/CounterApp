const counter = document.querySelector(".input-counter");
const save = document.querySelector(".input-save");
let output = document.querySelector(".display");
let outputSaved = document.querySelector(".saved");

const displayContainer = document.querySelector(".saved-all");
const container = document.querySelector(".contain");

// console.log(container);



let increaseCount = 0;

//For counter

const count = () => {
   counter.addEventListener("click", (e) => {
    // console.log(`Event is active`);

    if (counter) {
        increaseCount += 1;
        // console.log(increaseCount)

        output.textContent = increaseCount

    }
   })
}
count();

//For Save
const error = document.createElement("div");
            error.classList.add("error");
            container.appendChild(error);


const saved = () => {
    save.addEventListener("click", (e) => {
        // console.log("second event active")

        // outputSaved.textContent = "Count: " + increaseCount

        const displayOut = document.createElement("div");
        displayOut.classList.add("saved");
        displayContainer.appendChild(displayOut)
        // console.log(displayOutput);

        displayOut.textContent = "Count: " + increaseCount;


        if (increaseCount < 1) {
            error.textContent = "Please make a count..."
            
            displayOut.style.display = "none";

            // console.log("Please make a count")
        }

        if (increaseCount > 0) {
            // error.classList.remove("error");
            error.style.display = "none";
            // console.log(error)
        }

        if (save) {
            increaseCount = 0;
            // console.log(increaseCount)
            output.textContent = 0
        }

    })
}
saved();