

import React, {useState} from "react";
import "./App.css";
import dummydata from './dummy-data';
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';


// import the PostsPage and SearchBar and add them to the App

const App = () => {

//State
const [state, setState] = useState(dummydata);
const [posts, setPosts] = useState(dummydata);
const [searchTerms, setSearchTerms] = useState("");

const searchPost = () => {
  const newState = state.filter(post => {
    return (post.username.toLowerCase() + post.comments[0].text.toLowerCase()).includes(searchTerms)
  })
  setPosts(newState)
}


  return (
    <div className="App">
      <SearchBar setSearchTerms={setSearchTerms}
      searchPost={searchPost} />
      <PostsPage dummydata={posts} />
    </div>
  );
};

export default App;
