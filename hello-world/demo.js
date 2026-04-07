const Book = require('./book.model');

async function runDemo() {
  try {
    console.log("Starting Database Demonstration...");

    // 1. CREATE: Add a new book
    const book = await Book.create({
      title: "Demonstration Book",
      author: "Student Name",
      release_date: "2026-04-07",
      subject: 101
    });
    console.log("INSERT SUCCESSFUL: Created ID", book.id);

    // 2. READ: Find the book just made
    const foundBook = await Book.findOne({ where: { id: book.id } });
    console.log("READ SUCCESSFUL: Found book titled", foundBook.title);

    // 3. DELETE: Clean up the test data
    await foundBook.destroy();
    console.log("DELETE SUCCESSFUL: Record removed from database.");

  } catch (error) {
    console.error("Demonstration failed:", error);
  }
}

runDemo();