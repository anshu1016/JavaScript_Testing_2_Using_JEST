import postReducer, { initialState } from "./post.reducer";

describe("postReducer", () => {
  it("should return the initial state when no action is provided", () => {
    expect(postReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle CREATE_POST action", () => {
    const newPost = {
      id: 1,
      author: "John Doe",
      content: "This is a test post."
    };
    const action = {
      type: "CREATE_POST",
      payload: newPost
    };
    const expectedState = {
      ...initialState,
      posts: [{ ...newPost, likes: 0 }]
    };
    expect(postReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle EDIT_POST action", () => {
    const initialStateWithPost = {
      posts: [
        { id: 1, author: "John Doe", content: "Original content", likes: 0 }
      ]
    };
    const action = {
      type: "EDIT_POST",
      payload: { id: 1, newContent: "Updated content" }
    };
    const expectedState = {
      ...initialStateWithPost,
      posts: [
        { id: 1, author: "John Doe", content: "Updated content", likes: 0 }
      ]
    };
    expect(postReducer(initialStateWithPost, action)).toEqual(expectedState);
  });

  it("should handle DELETE_POST action", () => {
    const initialStateWithPost = {
      posts: [{ id: 1, author: "John Doe", content: "Some content", likes: 0 }]
    };
    const action = {
      type: "DELETE_POST",
      payload: { id: 1 }
    };
    expect(postReducer(initialStateWithPost, action)).toEqual(initialState);
  });

  it("should handle LIKE_POST action", () => {
    const initialStateWithPost = {
      posts: [{ id: 1, author: "John Doe", content: "Some content", likes: 5 }]
    };
    const action = {
      type: "LIKE_POST",
      payload: { id: 1 }
    };
    const expectedState = {
      ...initialStateWithPost,
      posts: [{ id: 1, author: "John Doe", content: "Some content", likes: 6 }]
    };
    expect(postReducer(initialStateWithPost, action)).toEqual(expectedState);
  });

  it("should not modify state when editing a non-existent post", () => {
    const action = {
      type: "EDIT_POST",
      payload: { id: 999, newContent: "New Content" }
    };
    expect(postReducer(initialState, action)).toEqual(initialState);
  });

  it("should not modify state when liking a non-existent post", () => {
    const action = {
      type: "LIKE_POST",
      payload: { id: 999 }
    };
    expect(postReducer(initialState, action)).toEqual(initialState);
  });
});
