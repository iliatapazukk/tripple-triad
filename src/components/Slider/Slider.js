import Container from '../Container';
import Heading from '../Heading';
import st from './Slider.module.css';

const Slider = () => {
  return (
    <div>
      <section className={st.section}>
        <div className={st.slider}>
          <Container className={st.sliderContent}>
            <Heading level={1} className={st.header}>
              <div>asd</div>
            </Heading>
            <Heading level={2} className={st.subheader}>
              <div>Sub Header</div>
            </Heading>
            <div className={st.call}>
              <button className={st.button}>Wow</button>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Slider;