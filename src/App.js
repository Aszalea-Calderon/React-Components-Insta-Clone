/* 
//*This needs all the rest of the functions so that it can be passed to the kids
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/
//This is all the imports
//// Import the state hook
import React, { useState } from "react";
import Posts from "./components/Posts/Posts";
import SearchBar from "./components/SearchBar/SearchBar";
//// Import the Posts (plural!)
////and SearchBar components, since they are used inside App component
import Styles from "./App.css"; //TODO?
//// Import the DummyData
import DummyData from "./dummy-data"; //Does this need to be import DummyData from './dummy-data" instead?

//end all imports
//*alskdfje
//TODO adskfjalsdfkj;alk🍝🎂

//This is our App
const App = () => {
  const [posts, setPosts] = useState(DummyData); //This is rehydrating it and bringing it in
  const [search, setSearch] = useState(SearchBar);
  // console.log(posts);
  // console.log(search, "this");
  //// Create a state called `posts` to hold the array of post objects, **initializing to DummyData**.
  //// This state is the source of truth for the data inside the app. You won't be needing DummyData anymore.
  //// To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const likePost = (postId) => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.


      The state of the app lives at the top of the React tree, 
      
      We are at the top of the react tree, with it lies the entrance for the posts to come in? This funciton  gives the ability for the children and grandchilern to change information such as likes and or mood. changing the mood? 

      //*We don't need to unpack the info at every turn. 
      //*It is easier to take the dehydrated piece, and bring it in to 
      //* data managment -- the flow always has to come from the top
      //*This becomes more scaleable
      //*It has to start at the top and then go into pieces within the next functions

      but it wouldn't be fair for nested components not to be able to change state!

      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      --React--
      <App name={'Aszalea'};
      --Vanillia js--
      app('aszalea');

      <>
      </>

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`. without manipulating the origianl data array
      //* Invoke > call> pass() is something > new state >> 

      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (...use the spread operator).
        - otherwise just return the post object unchanged.

        --Green tech, if that or some other road were appeal to me, No investment in a project can be wasted. If you went down another path would it make you sad? and would I regt it, or is it nesscarry. What appeals more devpolement? 

        -- With these skills what do I like the most? As I continue to grow things?


        --Map and forEach
        - forEach -- excutues a provided function once for each array
        -- map -- creates a new array with the results of calling a provided function on evey elemnent in calling the array. 

          --Longest friendship you have had... 
          -- High SChool 

     */
    setPosts(
      posts.map((item) => {
        return item.id === postId ? { ...item, likes: item.likes + 1 } : item;
      })
    );
  };
  // setPosts(
  //   posts.map((post) => {
  //     if (postId === post.id) {
  //       return { ...post, likes: post.likes + 1 };
  //     } else {
  //       return post;
  //     }
  //     //  return postId.id === id  ? {...post, likes : post.likes+1 } : likes;
  //   })

  return (
    //THIS IS ONLY PLACE WHERE JSX, THIS IS THE ONLY PLACE WHERE THE FUCNTIONS ARE INVOKED.
    <div className="App">
      {/* Add SearchBar and Posts here to render them */}
      {/* Check the implementation of each component, to see what props they require, if any! */}
      <SearchBar />
      <Posts likePost={likePost} posts={posts} />
      {/*This passes them down*/}
    </div>
  );
};

//The {} is what holds the import from the top...
export default App;
