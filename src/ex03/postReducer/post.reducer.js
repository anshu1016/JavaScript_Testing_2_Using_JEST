export const initialState = {
  posts: []
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_POST":
      const newPost = {
        id: action.payload.id,
        author: action.payload.author,
        content: action.payload.content,
        likes: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case "EDIT_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? { ...post, content: action.payload.newContent }
            : post
        )
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.id)
      };
    case "LIKE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? { ...post, likes: post.likes + 1 }
            : post
        )
      };
    default:
      return state;
  }
}

export default postReducer;
