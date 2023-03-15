import React, { useState } from "react";
import { PostForm } from "./components/PostForm";
// import { Counter } from "./components/Counter";
// import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
// import { MyButton } from "./components/UI/button/MyButton";
// import { MyInput } from "./components/UI/input/MyInput";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Phyton", body: "Description" },
    { id: 3, title: "PHP", body: "Description" },
  ]);

   // Важливо не змінюємо стан напряму. Викликаємо ф-цію setPosts куди
    // розгортаємо старий масив з існуючими постами та в кінець додаємо новий пост

  const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Post List" />
    </div>
  );
};

export default App;
