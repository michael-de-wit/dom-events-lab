/*-------------------------------- Constants --------------------------------*/
const buttonElements = document.querySelectorAll(`.button`)
console.log(buttonElements.length);

// for(element of buttonElements) {
//     element.addEventListener('click', () => {
//         console.log('Element clicked:', element);
//     })
// }

let buttonSelected = `` //Can be any of the buttons
let numberSelectedArray = [] //Individual number button, pre-concatenation
let builtNumberAsString = '' //Concatenated/full number as string data type
let builtNumberAsNumber = 0 //Concatenated/full number as number data type
let currentTotal = 0
let arthimeticOperator = ``
let NumbersToOperateOnArray = []

buttonElements.forEach(element => {
    element.addEventListener('click', () => {
        // console.log('Element clicked:', element);
        buttonSelectedElement = element
        console.log(buttonSelectedElement.innerHTML);
        buttonSelected = buttonSelectedElement.innerHTML

        if (buttonSelectedElement.innerHTML != `C` && buttonSelectedElement.innerHTML != `=`) {
            //Combine the selected numbers
            if (!isNaN(parseInt(buttonSelected))) { //If the button selected can be parsed into an integer; i.e. the string can be converted into an number
                numberSelected = parseInt(buttonSelected) //Convert the number in string data type into number data type

                numberSelectedArray.push(numberSelected) //Append the selected number to an array
                console.log(numberSelectedArray);

                builtNumberAsString = numberSelectedArray.join(``) //Concatenate the numbers in the array into a full number, in string data type
                console.log(builtNumberAsString);

                builtNumberAsNumber = parseInt(builtNumberAsString)// Convert the full number from string to number data type
                console.log(typeof builtNumberAsNumber);

                //When you select /,*,-,+ ; i.e. an operator that does something; an arithmetic operator
            } else if (buttonSelectedElement.className.includes(`operator`) && buttonSelectedElement.innerHTML != `C`) {
                arthimeticOperator = buttonSelectedElement.innerHTML
                console.log(`arthimeticOperator: ${arthimeticOperator}`);
                console.log(buttonSelectedElement.className);
                NumbersToOperateOnArray.push(builtNumberAsNumber)
                console.log(`NumbersToOperateOnArray: ${NumbersToOperateOnArray}`);

                if(NumbersToOperateOnArray.length === 2) {
                    console.log(`2 numbers`);
                    if(arthimeticOperator === `+`) {
                        currentTotal = NumbersToOperateOnArray[0] + NumbersToOperateOnArray[1]
                        console.log(`currentTotal: ${currentTotal}`);

                        NumbersToOperateOnArray = []
                        NumbersToOperateOnArray.push(currentTotal)
                    } else if(arthimeticOperator === `-`) {
                        currentTotal = NumbersToOperateOnArray[0] - NumbersToOperateOnArray[1]
                        console.log(`currentTotal: ${currentTotal}`);
                    } 
                }

                

                //Clear the previous number
                numberSelected = ``
                numberSelectedArray = []
                builtNumberAsNumber = ''
                builtNumberAsNumber = 0
            };
        }

        // console.log(`Most recent numberSelected: ${numberSelected} ${typeof numberSelected}`);





    });
});



// const individualButtonElement = buttonElements
// console.dir(buttonElements[0].innerHTML);
console.dir(buttonElements);


/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

// buttonArray.addEventListener('click', storeButtonSelected)

/*-------------------------------- Functions --------------------------------*/

function storeButtonSelected(event) {
    console.log(`clicked3`);
};