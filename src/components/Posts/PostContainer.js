import React, { useState } from "react";
import Posts from "./Posts";
import PostCategories from "./PostCategories";
import data from "../../data";

const allCategories = ["tümü", ...new Set(data.map((item) => item.category))];

const PostContainer = () => {
  const [posts, setPosts] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const [isActive, setIsActive] = useState("tümü");

  const filterPosts = (category) => {
    setIsActive(category);

    if (category === "tümü") {
      setPosts(data);
      return;
    }
    const filteredPosts = data.filter((post) => post.category === category);
    setPosts(filteredPosts);
  };

  return (
    <section>
      <div className="container">
        <div className="post">
          <h6>KEŞFETMENİN TAM ZAMANI</h6>
          <PostCategories
            filterPosts={filterPosts}
            items={categories}
            active={isActive}
          />
          <Posts posts={posts} />
        </div>
      </div>
    </section>
  );
};

export default PostContainer;
