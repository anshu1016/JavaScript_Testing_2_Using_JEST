export const initialState = {
  books: [],
  categories: []
};

function bookshelfReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: action.payload.id,
            title: action.payload.title,
            author: action.payload.author,
            category: null
          }
        ]
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [
          ...state.categories,
          { id: action.payload.id, name: action.payload.name }
        ]
      };
    case "ASSIGN_CATEGORY":
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.bookId
            ? { ...book, category: action.payload.categoryId }
            : book
        )
      };
    default:
      return state;
  }
}

export default bookshelfReducer;
