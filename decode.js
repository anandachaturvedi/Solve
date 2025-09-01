// --- Part 1: The JSON String ---
// In a real application, this string might come from a file, a database, or an API call.
// For this example, we will define it directly in our code.
// Notice it's enclosed in single quotes (') to make it a string variable.
const jsonString = '{ "bookTitle": "Dune", "author": "Frank Herbert", "year": 1965, "genres": ["Science Fiction", "Adventure"], "isAvailable": true }';


console.log("--- Starting the program ---");
console.log("This is the original JSON string:");
console.log(jsonString);
console.log("Type of this variable is:", typeof jsonString); // This will print "string"
console.log("\n----------------------------------\n");


// --- Part 2: The Decoding Step ---
// This is the most important step.
// We use the built-in JSON.parse() function to convert the string into a JavaScript object.
// We wrap this in a try...catch block to handle potential errors (like if the JSON string is malformed).

let bookObject; // We declare the variable here to use it outside the try block.

try {
    // The actual decoding happens here!
    bookObject = JSON.parse(jsonString);

    console.log("Successfully decoded the JSON string!");
    console.log("Type of the new variable is:", typeof bookObject); // This will now print "object"

} catch (error) {
    console.error("Error: The JSON string is invalid and could not be decoded.");
    console.error(error.message);
}


// --- Part 3: Using the Decoded Object ---
// Now that we have a real object, we can easily access its data using dot notation.
// This is only possible AFTER the JSON.parse() step.

if (bookObject) {
    console.log("\n--- Accessing data from the decoded object ---");
    console.log("Book Title:", bookObject.bookTitle);     // Accessing a string value
    console.log("Author:", bookObject.author);         // Accessing another string value
    console.log("First Genre:", bookObject.genres[0]);    // Accessing an item from an array
    console.log("Is it available?", bookObject.isAvailable); // Accessing a boolean value
}

console.log("\n--- Program finished ---");