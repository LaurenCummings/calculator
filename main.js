//Number button clicks
$('#numZero').click(function (){
	var keyEntered = '0';			//prints a 0 to the display area when 0 
	setVal(keyEntered);				//key is clicked
});

$('#numOne').click(function (){
	var keyEntered = '1';			//prints a 1 to the display area when 1 
	setVal(keyEntered);				//key is clicked
});

$('#numTwo').click(function (){
	var keyEntered = '2';			//prints a 2 to the display area when 2 
	setVal(keyEntered);				//key is clicked
});

$('#numThree').click(function (){
	var keyEntered = '3';			//prints a 3 to the display area when 3 
	setVal(keyEntered);				//key is clicked
});

$('#numFour').click(function (){
	var keyEntered = '4';			//prints a 4 to the display area when 4 
	setVal(keyEntered);				//key is clicked
});

$('#numFive').click(function (){
	var keyEntered = '5';			//prints a 5 to the display area when 5 
	setVal(keyEntered);				//key is clicked
});

$('#numSix').click(function (){
	var keyEntered = '6';			//prints a 6 to the display area when 6 
	setVal(keyEntered);				//key is clicked
});

$('#numSeven').click(function (){
	var keyEntered = '7';			//prints a 7 to the display area when 7 
	setVal(keyEntered);				//key is clicked	
});

$('#numEight').click(function (){
	var keyEntered = '8';			//prints a 8 to the display area when 8 
	setVal(keyEntered);				//key is clicked
	
});

$('#numNine').click(function (){
	var keyEntered = '9';			//prints a 9 to the display area when 9 
	setVal(keyEntered);				//key is clicked
	
});

//Decimal button click
$('#decPlace').click(function (){
	nullCheck();
	var keyEntered = '.';			//prints a . to the display area when . 
	setVal(keyEntered);				//key is clicked
	
});


//Sign button clicks
$('#addSign').click(function (){
	nullCheck();
	if (checkLast() == true)
		{
			delLast();
		}
	newMath();
	var keyEntered = '+';			//prints a + to the display area when + 
	setVal(keyEntered);				//key is clicked
	
});

$('#subSign').click(function (){
	nullCheck();
	if (checkLast() == true)
		{
			delLast();
		}
	newMath();
	var keyEntered = '-';			//prints a - to the display area when - 
	setVal(keyEntered);				//key is clicked
	
});

$('#mulSign').click(function (){
	nullCheck();
	if (checkLast() == true)
		{
			delLast();
		}
	newMath();
	var keyEntered = '*';			//prints a * to the display area when * 
	setVal(keyEntered);				//key is clicked
});

$('#divSign').click(function (){
	nullCheck();
	if (checkLast() == true)
		{
			delLast();
		}
	newMath();
	var keyEntered = '/';			//prints a / to the display area when / 
	setVal(keyEntered);				//key is clicked
});

//Backspace button click
$('#backspace').click(function (){	//deletes the last character entered from display
	delLast();
});

//Clear button click
$('#clear').click(function () {		//clears the display
	clrDisp();
});

//Clear Entry button click
$('#clearEnt').click(function () {	//clears the display (in the future this should
	clrDisp();						//only clear the current entry)
});

//Square Root button click
$('#sqrt').click(function () {
	if (checkLast() == true)
		{
			delLast();
		}
	dispArea.value = Math.sqrt(dispArea.value);
});

//Reciprocal button click
$('#recip').click(function() {
	dispArea.value = (1 / (dispArea.value));
});

//Negate button click
$('#plusMinus').click(function() {
	dispArea.value = (dispArea.value * -1);
});

//Equal sign click
$('#equalSign').click(function () {
	dispArea.value = evalExp();
});


//Functions

function setVal(x) {
	if (dispArea.value === "") {		//on button click, appends value onto 
		newVal = x;						//values currently displayed in 
	}									//display area
	else {								//if display area is blank, prints
		currentVal = dispArea.value;	//newly clicked value there alone
		newVal = currentVal + x;		
	}

	dispArea.value = newVal;
}

function nullCheck() {
	if (dispArea.value === "") {		//if the display area is blank
		dispArea.value = '0';			//when user enters sign, 0 is 
	}									//put in display area before sign
}

function checkLast() {
	x = dispArea.value.length;
	if (dispArea.value.charAt(x-1) === '+') {		
		return true									//Checks to see if the 
	}												//last character entered
	else if (dispArea.value.charAt(x-1) === '-') {	//was a sign character
		return true									//If yes, calls delLast
	}												//so old sign char is 
	else if (dispArea.value.charAt(x-1) === '*') {	//replaced with new one
		return true									//If last character is not
	}												//a sign character, returns
	else if (dispArea.value.charAt(x-1) === '/') {	//false
		return true
	}
	else {
		return false
	}
}

function delLast() {
	x = dispArea.value.length;						//deletes the last
	newVal = dispArea.value.slice(0,x-1);			//character entered
	dispArea.value = newVal;
}

function signCheck() {
	if (addSignCheck() === true) {			//checks if string contains a 
		return 1							//plus, minus, multiplication,
	}										//or division sign
	else if (minusSignCheck() === true) {	//returns 1, 2, 3, or 4 if it 
		return 2							//does
	}										//returns false if it doesn't
	else if (mulSignCheck() === true) {
		return 3
	}
	else if (divSignCheck() === true) {
		return 4
	}
	else {
		return false
	}
}

function addSignCheck() {
	
	if (dispArea.value.indexOf('+') === -1) {	
		return false						//checks if string contains
	}										//an addition sign
	else {									//returns true if it does and
		return true							//false if it doesn't

	}
}

//checks if string contains a minus sign. returns true if it does and
//false if it doesn't (return false if it contains a negative sign, but no minus sign)
function minusSignCheck() {
	if (dispArea.value.indexOf('-') === -1) {
		return false						
	}	
	else if ((dispArea.value.split('-').length-1 == 1) && (dispArea.value.indexOf('-') === 0)) {
		return false
	}							
	else {											
		return true							
	}	
}

function mulSignCheck() {
	if (dispArea.value.indexOf('*') === -1) {
		return false						//checks if string contains
	}										//a multiplication sign
	else {									//returns true if it does and 
		return true							//false if it doesn't
	}	
}

function divSignCheck() {
	if (dispArea.value.indexOf('/') === -1) {
		return false						//checks if string contains
	}										//a division sign
	else {									//returns true if it does and 
		return true							//false if it doesn't
	}	
}

function newMath() {
	if (signCheck() !== false && checkLast() === false) {		//Checks if 2 numbers and a sign
		dispArea.value = evalExp();								//have already been entered
	}															//if yes, calls evalExp to evaluate
}																//answer before printing new sign

function splitStr(sign) {
	return dispArea.value.split(sign);		//sign is equal to the math sign
}											//used in the expression (+-* or /)
											//returns an array with the numbers
											//in the expression as strings
										
function strToFloat(array) {
	num1 = parseFloat(array[0]);				//takes an array of 2 values and
	num2 = parseFloat(array[1]);				//returns them as floats
	return [num1, num2];
}

function getNums(signSym) {
	numArray = splitStr(signSym);			//signSym indicates which mathematical
	expNums = strToFloat(numArray);			//function the user entered
	return expNums							//This function uses that information to
}											//return the 2 numbers entered by the user

function evalExp() {
	signVal = signCheck();
	
	if (signVal === 1) {
		strNums = getNums('+');
		ans = strNums[0] + strNums[1];		//Performs the correct mathematical
	}										//function on the numbers entered
	else if (signVal === 2) {				//by the user
		strNums = getNums('-');
		ans = strNums[0] - strNums[1];
	}
	else if (signVal === 3) {
		strNums = getNums('*');
		ans = strNums[0] * strNums[1];
	}
	else if (signVal === 4) {
		strNums = getNums('/');
		ans = strNums[0] / strNums[1];
	}
	else {
		ans = 'Something is wrong';
	}
	return ans;
}

function clrDisp() {
	dispArea.value = "";					//Clears the display area
}


//Calculator Styling
$('#green').click(function (){
	document.getElementById('calc').className = 'grnCol';	
	document.getElementById('backspace').className = 'grnSignButton';
	document.getElementById('clearEnt').className = 'grnSignButton';
	document.getElementById('clear').className = 'grnSignButton';
	document.getElementById('plusMinus').className = 'grnSignButton';
	document.getElementById('sqrt').className = 'grnSignButton';
	document.getElementById('divSign').className = 'grnSignButton';
	document.getElementById('percentSign').className = 'grnSignButton';
	document.getElementById('mulSign').className = 'grnSignButton';
	document.getElementById('recip').className = 'grnSignButton';
	document.getElementById('subSign').className = 'grnSignButton';
	document.getElementById('addSign').className = 'grnSignButton';
	
	document.getElementById('numZero').className = 'grnZeroButton';
	document.getElementById('equalSign').className = 'grnEqualButton';
	
	document.getElementById('decPlace').className = 'grnNumButton';
	document.getElementById('numOne').className = 'grnNumButton';
	document.getElementById('numTwo').className = 'grnNumButton';
	document.getElementById('numThree').className = 'grnNumButton';
	document.getElementById('numFour').className = 'grnNumButton';
	document.getElementById('numFive').className = 'grnNumButton';
	document.getElementById('numSix').className = 'grnNumButton';
	document.getElementById('numSeven').className = 'grnNumButton';
	document.getElementById('numEight').className = 'grnNumButton';
	document.getElementById('numNine').className = 'grnNumButton';
});

$('#purple').click(function (){
	document.getElementById('calc').className = 'purCol';
	document.getElementById('backspace').className = 'purSignButton';
	document.getElementById('clearEnt').className = 'purSignButton';
	document.getElementById('clear').className = 'purSignButton';
	document.getElementById('plusMinus').className = 'purSignButton';
	document.getElementById('sqrt').className = 'purSignButton';
	document.getElementById('divSign').className = 'purSignButton';
	document.getElementById('percentSign').className = 'purSignButton';
	document.getElementById('mulSign').className = 'purSignButton';
	document.getElementById('recip').className = 'purSignButton';
	document.getElementById('subSign').className = 'purSignButton';
	document.getElementById('addSign').className = 'purSignButton';
	
	document.getElementById('numZero').className = 'purZeroButton';
	document.getElementById('equalSign').className = 'purEqualButton';
	
	document.getElementById('decPlace').className = 'purNumButton';
	document.getElementById('numOne').className = 'purNumButton';
	document.getElementById('numTwo').className = 'purNumButton';
	document.getElementById('numThree').className = 'purNumButton';
	document.getElementById('numFour').className = 'purNumButton';
	document.getElementById('numFive').className = 'purNumButton';
	document.getElementById('numSix').className = 'purNumButton';
	document.getElementById('numSeven').className = 'purNumButton';
	document.getElementById('numEight').className = 'purNumButton';
	document.getElementById('numNine').className = 'purNumButton';	
});

$('#red').click(function (){
	document.getElementById('calc').className = 'redCol';
	document.getElementById('backspace').className = 'redSignButton';
	document.getElementById('clearEnt').className = 'redSignButton';
	document.getElementById('clear').className = 'redSignButton';
	document.getElementById('plusMinus').className = 'redSignButton';
	document.getElementById('sqrt').className = 'redSignButton';
	document.getElementById('divSign').className = 'redSignButton';
	document.getElementById('percentSign').className = 'redSignButton';
	document.getElementById('mulSign').className = 'redSignButton';
	document.getElementById('recip').className = 'redSignButton';
	document.getElementById('subSign').className = 'redSignButton';
	document.getElementById('addSign').className = 'redSignButton';
	
	document.getElementById('numZero').className = 'redZeroButton';
	document.getElementById('equalSign').className = 'redEqualButton';
	
	document.getElementById('decPlace').className = 'redNumButton';
	document.getElementById('numOne').className = 'redNumButton';
	document.getElementById('numTwo').className = 'redNumButton';
	document.getElementById('numThree').className = 'redNumButton';
	document.getElementById('numFour').className = 'redNumButton';
	document.getElementById('numFive').className = 'redNumButton';
	document.getElementById('numSix').className = 'redNumButton';
	document.getElementById('numSeven').className = 'redNumButton';
	document.getElementById('numEight').className = 'redNumButton';
	document.getElementById('numNine').className = 'redNumButton';
});

$('#blue').click(function (){
	document.getElementById('calc').className = 'blueCol';
	document.getElementById('backspace').className = 'blueSignButton';
	document.getElementById('clearEnt').className = 'blueSignButton';
	document.getElementById('clear').className = 'blueSignButton';
	document.getElementById('plusMinus').className = 'blueSignButton';
	document.getElementById('sqrt').className = 'blueSignButton';
	document.getElementById('divSign').className = 'blueSignButton';
	document.getElementById('percentSign').className = 'blueSignButton';
	document.getElementById('mulSign').className = 'blueSignButton';
	document.getElementById('recip').className = 'blueSignButton';
	document.getElementById('subSign').className = 'blueSignButton';
	document.getElementById('addSign').className = 'blueSignButton';
	
	document.getElementById('numZero').className = 'blueZeroButton';
	document.getElementById('equalSign').className = 'blueEqualButton';
	
	document.getElementById('decPlace').className = 'blueNumButton';
	document.getElementById('numOne').className = 'blueNumButton';
	document.getElementById('numTwo').className = 'blueNumButton';
	document.getElementById('numThree').className = 'blueNumButton';
	document.getElementById('numFour').className = 'blueNumButton';
	document.getElementById('numFive').className = 'blueNumButton';
	document.getElementById('numSix').className = 'blueNumButton';
	document.getElementById('numSeven').className = 'blueNumButton';
	document.getElementById('numEight').className = 'blueNumButton';
	document.getElementById('numNine').className = 'blueNumButton';
});

$('#yellow').click(function (){
	document.getElementById('calc').className = 'yelCol';
	document.getElementById('backspace').className = 'yelSignButton';
	document.getElementById('clearEnt').className = 'yelSignButton';
	document.getElementById('clear').className = 'yelSignButton';
	document.getElementById('plusMinus').className = 'yelSignButton';
	document.getElementById('sqrt').className = 'yelSignButton';
	document.getElementById('divSign').className = 'yelSignButton';
	document.getElementById('percentSign').className = 'yelSignButton';
	document.getElementById('mulSign').className = 'yelSignButton';
	document.getElementById('recip').className = 'yelSignButton';
	document.getElementById('subSign').className = 'yelSignButton';
	document.getElementById('addSign').className = 'yelSignButton';
	
	document.getElementById('numZero').className = 'yelZeroButton';
	document.getElementById('equalSign').className = 'yelEqualButton';
	
	document.getElementById('decPlace').className = 'yelNumButton';
	document.getElementById('numOne').className = 'yelNumButton';
	document.getElementById('numTwo').className = 'yelNumButton';
	document.getElementById('numThree').className = 'yelNumButton';
	document.getElementById('numFour').className = 'yelNumButton';
	document.getElementById('numFive').className = 'yelNumButton';
	document.getElementById('numSix').className = 'yelNumButton';
	document.getElementById('numSeven').className = 'yelNumButton';
	document.getElementById('numEight').className = 'yelNumButton';
	document.getElementById('numNine').className = 'yelNumButton';	
});

$('#orange').click(function (){
	document.getElementById('calc').className = 'ornCol';	
	document.getElementById('backspace').className = 'ornSignButton';
	document.getElementById('clearEnt').className = 'ornSignButton';
	document.getElementById('clear').className = 'ornSignButton';
	document.getElementById('plusMinus').className = 'ornSignButton';
	document.getElementById('sqrt').className = 'ornSignButton';
	document.getElementById('divSign').className = 'ornSignButton';
	document.getElementById('percentSign').className = 'ornSignButton';
	document.getElementById('mulSign').className = 'ornSignButton';
	document.getElementById('recip').className = 'ornSignButton';
	document.getElementById('subSign').className = 'ornSignButton';
	document.getElementById('addSign').className = 'ornSignButton';
	
	document.getElementById('numZero').className = 'ornZeroButton';
	document.getElementById('equalSign').className = 'ornEqualButton';
	
	document.getElementById('decPlace').className = 'ornNumButton';
	document.getElementById('numOne').className = 'ornNumButton';
	document.getElementById('numTwo').className = 'ornNumButton';
	document.getElementById('numThree').className = 'ornNumButton';
	document.getElementById('numFour').className = 'ornNumButton';
	document.getElementById('numFive').className = 'ornNumButton';
	document.getElementById('numSix').className = 'ornNumButton';
	document.getElementById('numSeven').className = 'ornNumButton';
	document.getElementById('numEight').className = 'ornNumButton';
	document.getElementById('numNine').className = 'ornNumButton';
});