import cx from 'classnames'
import st from './style.module.css';

const Slider = () => {
  return (
    <div>
      <section className={st.section}>
        <div className={st.slider}>
          <div className={cx(st.container, st.sliderContent)}>
            <h1 className={st.header}>Wow</h1>
            <h2 className={st.subheader}>Wow.Wow.Wow</h2>
            <div className={st.call}>
              <button className={st.button}>Wow</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;