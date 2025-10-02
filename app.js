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
let arithmeticOperatorArray = []

buttonElements.forEach(element => {
    element.addEventListener('click', () => {
        // console.log('Element clicked:', element);
        buttonSelectedElement = element
        console.log(buttonSelectedElement.innerHTML);
        buttonSelected = buttonSelectedElement.innerHTML

        if (buttonSelectedElement.innerHTML === `=`) {
            storeFullNumberAndArithmeticOperator(buttonSelectedElement.innerHTML)
            if (NumbersToOperateOnArray.length === 2) {
                performArithmetic(NumbersToOperateOnArray[0], NumbersToOperateOnArray[1], arithmeticOperatorArray[0])
            }
            clearNumberInProgressAfterOperatorSelected()
        }

        if (buttonSelectedElement.innerHTML != `C` && buttonSelectedElement.innerHTML != `=`) {
            //Combine the selected numbers
            if (!isNaN(parseInt(buttonSelected))) { //If the button selected can be parsed into an integer; i.e. the string can be converted into an number

                buildFullNumberFromDigits(buttonSelected)

                //When you select /,*,-,+ ; i.e. an operator that does something; an arithmetic operator
            } else if (buttonSelectedElement.className.includes(`operator`) && buttonSelectedElement.innerHTML != `C`) {
                storeFullNumberAndArithmeticOperator(buttonSelectedElement.innerHTML)


                if (NumbersToOperateOnArray.length === 2) {
                    performArithmetic(NumbersToOperateOnArray[0], NumbersToOperateOnArray[1], arithmeticOperatorArray[0])
                }

                //Clear the previous number
                clearNumberInProgressAfterOperatorSelected()
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

function buildFullNumberFromDigits(numberAsString) {
    numberSelected = parseInt(numberAsString) //Convert the number in string data type into number data type

    numberSelectedArray.push(numberSelected) //Append the selected number to an array
    console.log(numberSelectedArray);

    builtNumberAsString = numberSelectedArray.join(``) //Concatenate the numbers in the array into a full number, in string data type
    console.log(builtNumberAsString);

    builtNumberAsNumber = parseInt(builtNumberAsString)// Convert the full number from string to number data type
    console.log(typeof builtNumberAsNumber);
}

function storeFullNumberAndArithmeticOperator(arithmeticOperator) {
    arthimeticOperatorLead = arithmeticOperator
    console.log(`arthimeticOperator: ${arthimeticOperatorLead}`);

    arithmeticOperatorArray.push(arthimeticOperatorLead)
    console.log(`arithmeticOperatorArray: ${arithmeticOperatorArray}`);

    NumbersToOperateOnArray.push(builtNumberAsNumber)
    console.log(`NumbersToOperateOnArray: ${NumbersToOperateOnArray}`);
}

function performArithmetic(LeadingNumberToOperateOn, TrailingNumberToOperateOn, LeadingArithmeticOperator) {

    console.log(`2 numbers`);
    if (LeadingArithmeticOperator === `+`) {
        performAdd(LeadingNumberToOperateOn, TrailingNumberToOperateOn)

    } else if (LeadingArithmeticOperator === `-`) {
        performSubtract(NumbersToOperateOnArray[0], NumbersToOperateOnArray[1])

    } else if (LeadingArithmeticOperator === `*`) {
        performMultiply(NumbersToOperateOnArray[0], NumbersToOperateOnArray[1])

    } else if (LeadingArithmeticOperator === `/`) {
        performDivide(NumbersToOperateOnArray[0], NumbersToOperateOnArray[1])
    }
};


function storeButtonSelected(event) {
    console.log(`clicked3`);
};

function performAdd(LeadingNumberToOperateOn, TrailingNumberToOperateOn) {
    currentTotal = LeadingNumberToOperateOn + TrailingNumberToOperateOn

    console.log(`currentTotal: ${currentTotal}`);

    resetAfterArithmetic()
}

function performSubtract(LeadingNumberToOperateOn, TrailingNumberToOperateOn) {
    currentTotal = LeadingNumberToOperateOn - TrailingNumberToOperateOn

    console.log(`currentTotal: ${currentTotal}`);

    resetAfterArithmetic()
}

function performMultiply(LeadingNumberToOperateOn, TrailingNumberToOperateOn) {
    currentTotal = LeadingNumberToOperateOn * TrailingNumberToOperateOn

    console.log(`currentTotal: ${currentTotal}`);

    resetAfterArithmetic()
}

function performDivide(LeadingNumberToOperateOn, TrailingNumberToOperateOn) {
    currentTotal = LeadingNumberToOperateOn / TrailingNumberToOperateOn

    console.log(`currentTotal: ${currentTotal}`);

    resetAfterArithmetic()
}


function resetAfterArithmetic() {
    NumbersToOperateOnArray = []
    NumbersToOperateOnArray.push(currentTotal)

    arithmeticOperatorArray = []
    arithmeticOperatorArray.push(arthimeticOperatorLead)
}

function clearNumberInProgressAfterOperatorSelected() {
    numberSelected = ``
    numberSelectedArray = []
    builtNumberAsNumber = ''
    builtNumberAsNumber = 0
}