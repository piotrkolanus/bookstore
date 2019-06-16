import { observable, action } from 'mobx';
import { BookList } from './lists/BookList';

class BookStore {
  @observable books = BookList;

  @observable filteredBooks = [];

  @observable isFilterActive = false;

  @action filterBooks = value => {
    const filtered = this.books.filter(book =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    let isFilterActive = true;
    if (value.length === 0) {
      isFilterActive = false;
    }
    this.isFilterActive = isFilterActive;
    this.filteredBooks.replace(filtered);
  };

  @action sortByTitle = () => {
    const currentBooks = [...this.books];

    const sorted = currentBooks.sort((a, b) => a.title.localeCompare(b.title));

    this.books.replace(sorted);
  };
}

export default new BookStore();
