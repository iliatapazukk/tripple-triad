import React from 'react';
import PropTypes from 'prop-types';
import {BIO} from './bio';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import st from './Biography.module.scss'

const ParsedItem = ({type, text, src}) => {
  switch (type) {
    case 'h1': return <Heading level={1}>{text}</Heading>
    case 'h2': return <Heading level={2}>{text}</Heading>
    case 'paragraph': return <Text element="p">{text}</Text>
    case 'img': return <img src={src}/>
  }
}

ParsedItem.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  src: PropTypes.string,
}

const Biography = ({id}) => {
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
    </div>
  );
};

Biography.propTypes = {
  id: PropTypes.number,
}

export default Biography;