import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import './share.css';

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/2.jpeg" alt="" className="shareProfileImg" />
          <input placeholder="What's on your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <div className="shareOptionText">Photo or Video</div>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <div className="shareOptionText">Tag</div>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <div className="shareOptionText">Location</div>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <div className="shareOptionText">Feelings</div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
