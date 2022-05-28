import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addReaction } from "../../features/postSlice";
const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const PostReactionBtn = ({ post }) => {
  const dispatch = useDispatch();
  const btnStyle = {
    background: "none",
    border: "none",
  };
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        style={btnStyle}
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reactionName: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <ReactionBtnContainer>{reactionButtons}</ReactionBtnContainer>;
};

const ReactionBtnContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
`;

export default PostReactionBtn;
