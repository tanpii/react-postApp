import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: "1", title: "Пост", body: "это пост хихихи"},
    {id: "2", title: "Пост", body: "это пост хихихи"},
    {id: "3", title: "Пост", body: "это пост хихихи"},
    {id: "4", title: "Пост", body: "это пост хихихи"}
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList remove={removePost} posts={posts} title={"Список постов"}/>
    </div>
  );
}

export default App;
