let store = [];
let lentBooks = [];

  export function addBook(store, newBook) {
      //var newBook = prompt('\n Please add book in format: "Name, Author, ISBN" separating with comma\'s as shown.').trim();
      if (newBook && /(?:,\s*\S+){3}/.test(newBook)) {
        newBook = newBook.split(',');
        if (!isNaN(newBook[2]) || newBook[2].length == 10 || newBook[2].length == 13){
        newBook = ['Index: ' + function() { return store.length + 1 }(), ' Name: ' + newBook[0], ' Author: ' + newBook[1], ' ISBN: ' + newBook[2] + '\n']
        store.push(newBook);
        console.log('Succesfully added a book to store.')
        return true;
      } else {
        console.log('ISBN is incorrect.');
        addBook();
        return errorMsg'Incorrect ISBN';
      }
      } else {
        addBook();
        return 'Incorrect input format';
      }
    }

 export function displayAvailableBooks (store) {
    if (store.length == 0) {
      console.log('No books in store at the moment');
      return 'No books';
    } else {
      console.log('Here\'s the list of avalaible books: \n' + store);
      return 'Books displayed';
      }
}

export function lendBook(store, lentBooks) {
    if (displayAvailableBooks()) {
      let lendIndex = prompt('Please input the INDEX of a book to be lent from this list: ');
      lentBooks.push(store.splice(lendIndex - 1, 1));
      console.log('Succesfully lent book.');
      return 'Book lent';
    } else return 'No books';
}

export function displayLentBooks(lentBooks) {
    if (lentBooks.length == 0) {
      console.log('No lent/borrowed books to show');
      return 'No lent books'
    } else {
      console.log('Here\'s the list of lent/borrowed books: \n ' + lentBooks);
      return 'Lent books displayed';
    }
}

export function returnBook(store, lentBooks) {
    if (displayLentBooks()) {
      let returnIndex = prompt('Please input the INDEX of the book to be returned from this list: ');
      store.push(lentBooks.splice(returnIndex - 1, 1));
      console.log('Succesfully returned book');
    }  
}
 

console.log('Hello and welcome to the book store.');

export function doAction() {
  if (action) {
    switch (action.trim()) {
      case 'a': case 'Add book': case 'Donate book':
      return addBook();

      case 'b': case 'Lend book': case 'Borrow book':
      return lendBook();

      case 'c': case 'Return book':
      return returnBook();

      case 'd': case 'View available books':
      return displayAvailableBooks();

      case 'e': case 'View lent books': case 'View borrowed books':
      return displayLentBooks();

      default: 
      console.log('That was not a valid option. Pls re-enter.');
      return doAction();
    }
  }

export function leaveStore (end) {
  //var end = confirm('\n Do you want to exit the store?');
  if (end) {
    if (action == 'a' || action == 'b' || action == 'c'||action == 'd' || action == 'e') {
      console.log('Thank you for stopping by today.');} else {console.log('\n Thank you for stopping by to ' + action.toLowerCase() + '.');
      return 'Bye'
    }
  } else {
    doAction(); return 'Back to store'
  }
}

export function loginAgain (login) {
//var login = confirm('\n Login again?');
  if (login) {
    interface();
    return 'Logged in'
  } else {
    if (userName) { console.log('\n Alright, goodbye then, ' + userName);} else {console.log('\n Alright, goodbye then, Admin.')}
    return 'Bye'
    }
}

function wrapper () {
  let admin = confirm('Are you an Admin?');
    let userName;
    let action;

    if (admin) {
    action = prompt('\n Hey, Admin, what would you like to do? Pls state either \n a. Add book \n b. Lend book \n c. Return book \n d. View available books or \n e. View lent books \n');
  } else {
    if (!userName) {
      userName = prompt('\n Hey, User, what\'s your name?');
    }
    action = prompt('\n What would you like to do, ' + userName + '? Pls state either \n a. Donate book \n b. Borrow book \n c. Return book \n d. View available books or \n e. View borrowed books \n ');
    }

let account = admin || userName;
  if (account) {
    doAction();
    leaveStore();
    loginAgain (); return 'Done'
  } else return 'Not logged in.'
}

wrapper();