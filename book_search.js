/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 


// PSEUDOCODE:

// Function:
    // Data:
        // scannedTextObject is an array of objects
        // data needed from scannedTextObj: ISBN, Page, and Text for each Content object that is a positive search result
        // Content key/value pair: array of objects

    // Strategy: 
        // iterate through parent array, access Content array of objects
        // iterate through Content array, access Content.Text
        // conditional: if Content.Text includes searchTerm, push requested data to result.Results array

    // Note: 
        // For positive search, object pushed to result.Results should include ISBN, Page, and Text --> construct new object

// Unit Tests:
    // Positive Tests:
        // Known input, known output (test provided)
        // Right number of results (test provided)
        // Expanded books data set with positive search - does function push multiple books to results array?

    // Negative Tests:
        // If searchTerm is null or undefined
        // If scannedTextObj is null or undefined
        // searchTerm that is multiple words
        // Expanded books data set with negative search - does function push anything to results array?

    // Case Sensitive: 
        // If searchedTerm has different cases

    // Edge Cases to Consider:
        // searchTerm that is multiple words

 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    // Reassign SearchTerm to searchTerm 
    result.SearchTerm = searchTerm

    // Iterate through parent array scannedTextObj to access each title/book object
    scannedTextObj.forEach((book) => {
        // console.log('book', book)
        // console.log('book content', book.Content)

        // Access the Content array of objects, iterate through to access each object
        book.Content.forEach((scannedText) => {
            // console.log('scannedText', scannedText)

            // Check each Text submission for the searched term
            if (scannedText.Text.includes(searchTerm)) {
                // console.log('success')

                // Create object with required details, push into result.Results array
                result.Results.push({
                    "ISBN": book.ISBN,
                    "Page": scannedText.Page,
                    "Line": scannedText.Line
                })
            }
        })
    })

    console.log(result)
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */


/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}
