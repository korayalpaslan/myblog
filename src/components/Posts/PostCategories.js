import React from "react";

const PostCategories = (props) => {
  
  return (
    <ul className="post__categories">
      {props.items.map((category, index) => {
        return (
          <li 
          key={index} 
          className={props.active === category ? "post__category active" : "post__category"}
          onClick={()=>props.filterPosts(category)}>
            {category}
          </li>
        );
      })}
    </ul>
  );
};

export default PostCategories;
