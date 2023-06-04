import { createContext, useReducer } from 'react'

export const PostsContext=createContext()
//state is the current state of component
//action.payload is the object you are returning fom backedn
export const postsReducer=(state,action)=>{
    switch(action.type){
        case 'SET_POSTS':
            return {
                posts:action.payload
            }
        case 'CREATE_POST':
            return {
                posts: [action.payload, ...state.posts]
            }
          case 'DELETE_POST':
            return {
                posts: state.posts.filter((w) => w._id !== action.payload._id)
            }
            case 'UPDATE_POST':
              const { json } = action.payload;
              const updatedPosts = state.posts.map((post) =>
                post._id === json._id && !post.liked ? { ...post, likes: post.likes + 1, liked: true } : post
              );
            

              // const { json } = action.payload;
              // const updatedPosts = state.posts.map((post) =>
              //   post._id === json._id ? { ...post, likes: post.likes + 1 } : post
              // );
            return {
               ...state, posts: updatedPosts
               };
          default:
            return state
    }
}

export const PostsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postsReducer, {
      posts: null
    })
  
    return (
      <PostsContext.Provider value={{...state, dispatch}}>
        { children }
      </PostsContext.Provider>
    )
  }