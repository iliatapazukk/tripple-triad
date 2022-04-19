import Container from '../Container';
import st from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={st.root}>
      <Container>
        <div className={st.footerWrap}>
          Coded with
          <span className={st.heart}/>
          by You
        </div>
      </Container>
    </footer>
  );
};

export default Footer;