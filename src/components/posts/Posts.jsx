import React from "react";
import "./Posts.css";
import { POSTS } from "../../static/static";

const Posts = () => {
  return (
    <section className="posts" id="about">
      <div className="container">
        <div className="p_wrapper">
          <div className="p_title_box">
            <h2 className="p_title">Featured Posts</h2>
          </div>

          <div className="p_cards">
            {POSTS?.map((item) => (
              <div
                className="p_card"
                key={item.id}
                style={{ backgroundImage: `url("${item.background}")` }}
              >
                <div className="card_context">
                  <h2 className="card_title">{item.title}</h2>
                  <p className="card_spoiler">{item.spoiler}</p>
                  <div className="card_info">
                    <div className="info_img">
                      <img src={item.avatar} alt="user" />
                      <p className="image_owner">{item.author}</p>
                    </div>
                    <p className="date">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
