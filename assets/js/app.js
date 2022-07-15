var favoriteBooks = []

function addFavoriteBook(bookName) {
    if (!bookName.includes('Great')) {
        favoriteBooks.push(bookName)
    }
}

function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`) // Favorite Books: 3
    for (let bookName of favoriteBooks) {
        console.log(bookName) // A Song of Ice and Fire // Crime & Punishment // You Don't Know JS
    }
}

addFavoriteBook("A Song of Ice and Fire")
addFavoriteBook("The Great Gatsby")
addFavoriteBook("Crime & Punishment")
addFavoriteBook("Great Expectations")
addFavoriteBook("You Don't Know JS")

printFavoriteBooks()