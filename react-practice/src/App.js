import React, { useMemo, useState } from "react";
import { PostForm } from "./components/PostForm";
// import { Counter } from "./components/Counter";
// import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
// import { MySelect } from "./components/UI/select/MySelect";
// import { MyButton } from "./components/UI/button/MyButton";
// import { MyInput } from "./components/UI/input/MyInput";
import "./styles/App.css";
import { PostFilter } from "./components/PostFilter";

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "1-Description" },
    { id: 2, title: "Phyton", body: "2-Description" },
    { id: 3, title: "PHP", body: "3-Description" },
  ]);

  // відповідає за логіку зміни компонента сортування
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    console.log("funtion works");
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  // Важливо не змінюємо стан напряму. Викликаємо ф-цію setPosts куди
  // розгортаємо старий масив з існуючими постами та в кінець додаємо новий пост

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  //для видалення. Отримуємо пост з дочірнього компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: 15 }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Post List"
      />
    </div>
  );
};

export default App;
