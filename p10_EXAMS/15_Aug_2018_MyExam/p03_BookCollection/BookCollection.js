class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        this.shelfGenre = shelfGenre;
        if(!['livingRoom', 'bedRoom', 'closet'].includes(room)) {
            throw new Error(`Cannot have book shelf in ${value}`);
        }
        this.shelfCapacity = shelfCapacity;
        this.room = room;
        this.shelf = [];
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre){
        let book;
        if(genre){
            book = {
                bookName, bookAuthor, genre
            };
        }else{
            book = {
                bookName, bookAuthor
            };
        }

        if(this.shelfCondition <= 0){
            this.shelf.shift();
        }
        this.shelf.push(book);
        this.shelf.sort((a,b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(book => book.bookName !== bookName);
        return this;
    }

    showBooks(genre){
        let books = this.shelf.filter(book => book.hasOwnProperty('genre') && book.genre === genre);
        let result = `Results for search "${genre}":`;
        books.forEach(book =>{
            result += `\n\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"`
        });
        return result;
    }

    toString(){
        if(this.shelf.length === 0){
            return 'It\'s an empty shelf'
        }

        let result = `"${this.shelfGenre}" shelf in ${this.room} contains:`;
        this.shelf.forEach(book =>{
            result += `\n\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}`
        });
        return result;
    }

}





