// Question 3: Why does the counter start at NaN?
//because it needs a number in the innerText not a string
let count = parseInt(document.getElementById('counter-value').innerText, 10);

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
//nothing will happen because the value is set to be 10
//unless you change 10 to count so it can increment one by one.
incrementButton.addEventListener('click', function() {
    count++;
    document.getElementById('counter-value').innerText = count;
});

// Question 5: Why does the decrement button not work?
// a typo grabbing the element by id count instead of counter
decrementButton.addEventListener('click', function() {
    count--;
    document.getElementById('counter-value').innerText = count;
});

// Question 6: Why does the reset function set the count to '0' as a string?
//because is in quotes it could cause problems with math operations
resetButton.addEventListener('click', function() {
    count = 0;
    document.getElementById('counter-value').innerText = count;
});

// Question 7: How can you monitor the value of count using breakpoints?
//Inspect your code go to "sources" tab, see your JS  
//set a breakpoint in the line where you want your code to pause
//run your code and watch the behavior(increment, decrement)
// hover over variable

//  Question 8: What is the scope of the count variable in DevTools?
//is global scope variable 

// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
//yes status 200

// Question 10: Use the Console to track errors. Are there any errors being thrown?
// there is verbose [violation] in the increment count click event, that is taking
//longer than expected.  to fix this problem, I removed debugger statement.
//