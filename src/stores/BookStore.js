import { observable, action } from 'mobx';
import { BookList } from './lists/BookList';

class BookStore {
  @observable books = BookList;

  @observable filteredBooks: [];

  @observable isFilterActive: false;

  @action filterBooks = value => {
    const { books } = this.state;
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );

    let isFilterActive = true;
    if (value.length === 0) {
      isFilterActive = false;
    }
    this.setState({ filteredBooks: filtered, isFilterActive });
  };
}

export default new BookStore();
