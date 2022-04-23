import React from 'react';
import PropTypes from 'prop-types'
import {ReactComponent as Heart}  from './assets/heart.svg'
import Heading from '../Heading';
import Text from '../Text';
import cx from 'classnames'
import st from './CharacterCard.module.scss'

const CharacterCard = (
  {
    id,
    name,
    src,
    humanName,
    description,
    isLike,
    onLikeClick
  }) => {
  const handleLike = () => onLikeClick(id)
  return (
    <div className={st.root}>
      <img
        src={src}
        alt={name}
        className={st.cardImage}/>
      <div className={st.cardDetails}>
        <Heading level={2}  className={st.cardName}>
          {name}
        </Heading>
        <Heading level={3} className={st.cardHumanName}>
          {humanName}
        </Heading>
        <Text strong className={st.cardDescription}>
          {description}
        </Text>
        <div className={st.cardMeta}>
          <div
            onClick={handleLike}
            className={cx(st.like, {[st.active]: isLike})}
          >
            <Heart />
          </div>
          <div className={st.readBio}>
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

CharacterCard.defaultProps = {
  isLike: false
}

CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  isLiked: PropTypes.bool,
  humanName: PropTypes.string,
  description: PropTypes.string
}
export default CharacterCard;
