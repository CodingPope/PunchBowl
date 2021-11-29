import './post.css';
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../dummyData.js';
import { useState } from 'react';

export default function Post({ post }) {
  const [like, setlike] = useState(post.like);
  const [disliked, setDisliked] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = () => {
    setlike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const dislikeHandler = () => {
    setDisliked(isDisliked ? disliked - 1 : disliked + 1);
    setIsDisliked(!isDisliked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">
            {post?.description}
            <img src={PF + post.photo} alt="" className="postImg" />
          </span>
        </div>
        <div className="postBottom">
          <div className="postbottomLeft">
            <img
              src={`${PF}icons8-heart-100.png`}
              alt=""
              className="likeButton"
              onClick={likeHandler}
            />
            <span className="postLikeCounter" onClick={likeHandler}>
              {like}
            </span>
            <img
              src={`${PF}icons8-salt-48.png`}
              alt=""
              className="dislikeButton"
              onClick={dislikeHandler}
            />
            <span className="postDisikeCounter" onClick={dislikeHandler}>
              {disliked}
            </span>
          </div>
          <div className="postbottomRight">
            <div className="postCommentText">{post.comment} Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
