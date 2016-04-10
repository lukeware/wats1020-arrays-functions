

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);



// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text) 

    function truncateWords(longText, numWords) {
     'use strict';
      
      
// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array

	var longTextArray = longText.split(' ');


// 2. Use the length attribute to find the number of words in the Array

	var textLength = longTextArray.length;
	console.log('Words in Array: ' + textLength);


// 3. Determine how many words should be removed from the String

	console.log('Words to Remove: ' + (textLength - numWords));


// 4. Remove those words from the Array

    var removeWords = longTextArray.splice(0, numWords);
	
	
// 5. Add an additional String item to the Array to put an ellipses in: "..."

	removeWords.push('...');


// 6. Use the join() function to convert the Array back into a String

    var shortText = removeWords.join(' ');


// 7. Return the truncated String from the Function

	return shortText;
	
	
}

