import React from 'react';
import PropTypes from 'prop-types';
import {BIO} from '../../constants/bio';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {useNavigate, useParams} from 'react-router-dom';
import {scrollTop} from '../../helpers';
import st from './Biography.module.scss'

const ParsedItem = ({type, text, src}) => {
  if (type.length === 2 && type[0] === 'h') {
    return <Heading level={type.slice(1)}>{text}</Heading>
  } else {
    switch (type) {
      case 'paragraph':
        return <Text element="p">{text}</Text>
      case 'img':
        return <img src={src} alt={''}/>
    }
  }
}

ParsedItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  src: PropTypes.string,
  onBackClick: PropTypes.func,
}

const Biography = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
    scrollTop()
  }
  return (
    <div className={st.root}>
      {BIO[id].map((item, index) => (
          <ParsedItem
            key={index}
            type={item.type}
            text={item.text}
            src={item.src}
          />
        )
      )}
      <Button isDark onClick={handleBackClick}>Go Back</Button>
    </div>
  );
};

export default Biography;
