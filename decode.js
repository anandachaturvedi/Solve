const jsonString = '{ "bookTitle": "Dune", "author": "Frank Herbert", "year": 1965, "genres": ["Science Fiction", "Adventure"], "isAvailable": true }';

console.log("--- Starting the program ---");
console.log("This is the original JSON string:");
console.log(jsonString);
console.log("Type of this variable is:", typeof jsonString); // This will print "string"
console.log("\n----------------------------------\n");



let bookObject; 

try {
    bookObject = JSON.parse(jsonString);

    console.log("Successfully decoded the JSON string!");
    console.log("Type of the new variable is:", typeof bookObject); 

} catch (error) {
    console.error("Error: The JSON string is invalid and could not be decoded.");
    console.error(error.message);
}



if (bookObject) {
    console.log("\n--- Accessing data from the decoded object ---");
    console.log("Book Title:", bookObject.bookTitle);     
    console.log("Author:", bookObject.author);         
    console.log("First Genre:", bookObject.genres[0]);    
    console.log("Is it available?", bookObject.isAvailable); 
}

console.log("\n--- Program finished ---");