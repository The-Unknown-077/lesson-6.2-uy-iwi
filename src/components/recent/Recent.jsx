import React from "react";
import "./Recent.css";
import { RECENT_POSTS } from "../../static/static";

const Recent = () => {
  return (
    <section className="recent">
      <div className="container">
        <div className="r_wrapper">
          <div className="p_title_box">
            <p className="p_title">Most Recent</p>
          </div>
          <div className="r_cards">
            {RECENT_POSTS?.map((post, index) => (
              <div className="r_card" key={index}>
                <img src={post.image} alt={post.title} />
                <div className="r_card_context">
                  <h3 className="r_card_title">{post.title}</h3>
                  <p className="r_card_spoiler">{post.spoiler}</p>
                  <div className="r_card_info">
                    <div className="r_info_img">
                      <img src={post.authorImg} alt={post.author} />
                      <p className="r_image_owner">{post.author}</p>
                    </div>
                    <p className="r_date">{post.date}</p>
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

export default Recent;
