import cx from 'classnames'
import PropTypes from 'prop-types'
import st from './Container.module.scss';
import Heading from '../Heading';

const Container = ({children, className}) => {
  return (
    <div className={cx(st.root, className)}>
      {children}
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Container;