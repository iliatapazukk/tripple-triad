import React from 'react';
import PropTypes from 'prop-types';
import {BIO} from '../../constants/bio';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Button from '../../components/Button';
import {Navigate, useNavigate, useParams, useLocation} from 'react-router-dom';
import {ReactComponent as NavIocn} from '../../assets/images/link_icon.svg';
import st from './Biography.module.scss'

const ParsedItem = ({type, text, src}) => {
  const navigate = useNavigate()
  const anchor = text && text.replace(/\s/g, '')
  const handleClick = () => {
    navigate(`#${anchor}`)
  }
  if (type.length === 2 && type[0] === 'h') {
    return (
      <Heading id={anchor} withIconOnHover level={type.slice(1)}>
      {text} <NavIocn onClick={handleClick} />
      </Heading>
    )
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
  id: PropTypes.string,
}

const Biography = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const handleBackClick = () => {
    navigate(-1)
  }
  if (!BIO[id]) return <Navigate to={'404'} replace/>
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
