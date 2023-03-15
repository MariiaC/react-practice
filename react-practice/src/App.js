import React, {  useState } from "react";
import { PostForm } from "./components/PostForm";
// import { Counter } from "./components/Counter";
// import { PostItem } from "./components/PostItem";
import { PostList } from "./components/PostList";
// import { MySelect } from "./components/UI/select/MySelect";
// import { MyButton } from "./components/UI/button/MyButton";
// import { MyInput } from "./components/UI/input/MyInput";
import "./styles/App.css";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/modal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // Важливо не змінюємо стан напряму. Викликаємо ф-цію setPosts куди
  // розгортаємо старий масив з існуючими постами та в кінець додаємо новий пост

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };
  //для видалення. Отримуємо пост з дочірнього компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton
      style={{marginTop:30}}
        onClick={() => setModal(true)}>
        Create user
</MyButton>

      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
      </MyModal>

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
