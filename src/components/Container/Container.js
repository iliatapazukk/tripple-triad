import cx from 'classnames'
import st from './style.module.css';

const Container = (props) => {
  return (
    <div className={cx(st.root, props.className)}>
      {props.children}
    </div>
  );
};

export default Container;