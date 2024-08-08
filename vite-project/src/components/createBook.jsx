export function addBook(book){
    let myBooks = JSON.parse(localStorage.getItem("bookTable"));
    console.log("prop of the ADDBOOK",book);

    myBooks.push(book);
    localStorage.setItem("bookTable",JSON.stringify(myBooks))

}