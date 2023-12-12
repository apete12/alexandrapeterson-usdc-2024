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

// // // // // // // // // // // // // // // // // // // 

// Unit Tests:
    // Positive Tests:
        // Known input, known output (test provided)
        // Right number of results (test provided)
        // Expanded books data set with positive search - does function push multiple books to results array?
        // Expanded books data set with single positive search results
        // Substring match: searchTerm is included in Results when it is within another word (i.e. moment returns positive due to 'momentum')

    // Negative Tests:
        // If searchTerm is null or undefined
        // If scannedTextObj is null or undefined
        // Expanded books data set with negative search - does function push anything to results array?

    // Case Sensitive: 
        // If searchedTerm has different cases, returns unsuccessful search result

    // Edge Cases to Consider:
        // searchTerm that is multiple words, or different data type other than string

 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    // Reassign SearchTerm to searchTerm 
    result.SearchTerm = searchTerm

    // Check if searchTerm and scannedTextObj are not null
    if (searchTerm != null && scannedTextObj != null) {

        // Iterate through parent array scannedTextObj to access each title/book object
        scannedTextObj.forEach((book) => {

            // Access the Content array of objects, iterate through to access each object
            book.Content.forEach((scannedText) => {

                // Check each Text submission for the searched term
                if (scannedText.Text.includes(searchTerm)) {

                    // Create object with required details, push into result.Results array
                    result.Results.push({
                        "ISBN": book.ISBN,
                        "Page": scannedText.Page,
                        "Line": scannedText.Line
                    })
                }
            })
        })
        return result; 

        // If either searchTerm or scannedTextObj are null, return error message
    } else {
        return 'Error: invalid search.'
    }
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
                "Text": "now simply went on by her own momentum.  The dark-moment"
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

// Test 5 Expected Output 
const caseSensitiveSearch = {
    "SearchTerm": "MomEntUm",
    "Results": []
}

// Test 6 Expected Output 
const partialSearchTerm = {
    "SearchTerm": "moment",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

// Test 7 Input
const expandedBookList = [
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
    },
    {
        "Title": "The Midnight Library",
        "ISBN": "9780000000000",
        "Content": [
            {
                "Page": 32,
                "Line": 12,
                "Text": "Never underestimate the big importance of small things"
            },
            {
                "Page": 90,
                "Line": 12,
                "Text": "There is no rejection, there is only redirection."
            }
        ] 
    }
]

// Test 7 Expected Output
const expandedSuccessfulResults = {
    "SearchTerm": "small",
    "Results": [
        {
            "ISBN": "9780000000000",
            "Page": 32,
            "Line": 12
        }
    ]
}

// Test 8 Expected Output
const expandedUnsuccessfulResults = {
    "SearchTerm": "unsuccessful",
    "Results": []
}

// Test 9 Expected Output
const multipleSuccessfulResults = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000000000",
            "Page": 32,
            "Line": 12
        },
        {
            "ISBN": "9780000000000",
            "Page": 90,
            "Line": 12
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

// Test 3: Should return results object with empty Results array when searchTerm is null 
const test3result = findSearchTermInBooks(null, twentyLeaguesIn); 
if (test3result === 'Error: invalid search.') {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", 'Error: invalid search.');
    console.log("Received:", test3result);
}

// Test 4: Should return results object with empty Results array when scannedTextObj is null, searchTerm should equal "the"
const test4result = findSearchTermInBooks("the", null); 
if (test4result === 'Error: invalid search.') {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", 'Error: invalid search.');
    console.log("Received:", test4result);
}

// Test 5: Case Sensitive - Should return results object with empty Results array when searchTerm cases do not have match
const test5result = findSearchTermInBooks("MomEntUm", twentyLeaguesIn); 
if (JSON.stringify(test5result) === JSON.stringify(caseSensitiveSearch)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", caseSensitiveSearch);
    console.log("Received:", test5result);
}

// Test 6: Should return successful search results for substring match
const test6result = findSearchTermInBooks("moment", twentyLeaguesIn); 
if (JSON.stringify(test6result) === JSON.stringify(partialSearchTerm)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", partialSearchTerm);
    console.log("Received:", test6result);
}

// Test 7: Should return successful search results when given expanded book list 
const test7result = findSearchTermInBooks("small", expandedBookList); 
if (JSON.stringify(test7result) === JSON.stringify(expandedSuccessfulResults)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", expandedSuccessfulResults);
    console.log("Received:", test7result);
}

// Test 8: Should return unsuccessful search results when given expanded book list 
const test8result = findSearchTermInBooks("unsuccessful", expandedBookList); 
if (JSON.stringify(test8result) === JSON.stringify(expandedUnsuccessfulResults)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", expandedUnsuccessfulResults);
    console.log("Received:", test8result);
}

// Test 9: Should return array of successful search results when given expanded book list
const test9result = findSearchTermInBooks("the", expandedBookList); 
if (JSON.stringify(test9result) === JSON.stringify(multipleSuccessfulResults)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", multipleSuccessfulResults);
    console.log("Received:", test9result);
}
