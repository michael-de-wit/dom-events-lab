/*-------------------------------- Constants --------------------------------*/
const buttonElements = document.querySelectorAll(`.button`)
console.log(buttonElements.length);

// for(element of buttonElements) {
//     element.addEventListener('click', () => {
//         console.log('Element clicked:', element);
//     })
// }

let buttonSelectedElement = null

buttonElements.forEach(element => {
    element.addEventListener('click', () => {
        // console.log('Element clicked:', element);
        buttonSelectedElement = element
        console.log(buttonSelectedElement.innerHTML);
    });
});



// const individualButtonElement = buttonElements
// console.dir(buttonElements[0].innerHTML);
console.dir(buttonElements);


/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttonArray.addEventListener('click', storeButtonSelected)

/*-------------------------------- Functions --------------------------------*/

function storeButtonSelected (event){
    console.log(`clicked3`);
};