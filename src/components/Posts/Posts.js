import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Posts = ({ posts }) => {
  return (
    <motion.div layout className="post__items">
      {posts.map((item) => {
        const { id, country, title } = item;
        return (
          <motion.div layout className="post__item" key={id}>
            <Link to={`/sehirler/${id}`}>
              <img src={require(`../../assets/${id}.jpg`)} alt="" />
              <div>
                <h6>{country}</h6>
                <p>{title}</p>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Posts;
