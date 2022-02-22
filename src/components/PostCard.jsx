import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostCardContent from './PostCardContent';
import PostCardFooter from './PostCardFooter';
import PostCardHeader from './PostCardHeader';

const PostCard = ({ card }) => {
  const isLogin = useSelector(state => state.user.is_login);
  const param = useParams();
  const {
    boardId,
    creater,
    content,
    imageurl,
    grid,
    likeCount,
    createdAt,
    likes,
  } = card;

  const navigate = useNavigate();

  const goToDetail = e => {
    !param.postId && isLogin && navigate(`/post/${boardId}`, { state: card });
  };

  return (
    <CardBox onClick={goToDetail}>
      <StyleBox>
        <PostCardHeader creater={creater} date={createdAt} />
        <PostCardContent grid={grid} content={content} image={imageurl} />
        <PostCardFooter
          card={card}
          likeCount={likeCount}
          likes={likes}
          boardId={boardId}
        />
      </StyleBox>
    </CardBox>
  );
};

const CardBox = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 100%;

  @media screen and (max-width: 50rem) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;
  }
  @media screen and (max-width: 30rem) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

const StyleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0.3em;
  padding: 0.5rem;
  width: calc(100%-0.6em);
  background-color: lightblue;
`;

export default PostCard;
