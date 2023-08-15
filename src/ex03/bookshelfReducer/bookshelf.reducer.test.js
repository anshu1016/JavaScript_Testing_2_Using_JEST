import bookshelfReducer, { initialState } from "./bookshelf.reducer";

describe("bookshelfReducer", () => {
  it("should return the initial state when no action is provided", () => {
    expect(bookshelfReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_BOOK action", () => {
    const newBook = {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald"
    };
    const action = {
      type: "ADD_BOOK",
      payload: newBook
    };
    const expectedState = {
      ...initialState,
      books: [{ ...newBook, category: null }]
    };
    expect(bookshelfReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle ADD_CATEGORY action", () => {
    const newCategory = {
      id: 1,
      name: "Classics"
    };
    const action = {
      type: "ADD_CATEGORY",
      payload: newCategory
    };
    const expectedState = {
      ...initialState,
      categories: [newCategory]
    };
    expect(bookshelfReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle ASSIGN_CATEGORY action", () => {
    const initialStateWithBook = {
      books: [
        {
          id: 1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          category: null
        }
      ],
      categories: [{ id: 1, name: "Classics" }]
    };
    const action = {
      type: "ASSIGN_CATEGORY",
      payload: { bookId: 1, categoryId: 1 }
    };
    const expectedState = {
      ...initialStateWithBook,
      books: [
        {
          id: 1,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          category: 1
        }
      ]
    };
    expect(bookshelfReducer(initialStateWithBook, action)).toEqual(
      expectedState
    );
  });

  it("should not modify state when assigning a non-existent book to a category", () => {
    const action = {
      type: "ASSIGN_CATEGORY",
      payload: { bookId: 999, categoryId: 1 }
    };
    expect(bookshelfReducer(initialState, action)).toEqual(initialState);
  });
});
