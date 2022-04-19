import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Text from './components/Text';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <div style={{
        backgroundColor: '#f7f7f7',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div>
          <Text element="span">Span</Text>
        </div>
        <div>
          <Text element="p">Paragraph</Text>
        </div>
        <Text element="div">Block</Text>
        <Text element="div" italic>Block italic</Text>
        <Text element="div" disabled>Block disabled</Text>
        <Text element="div" strong>Block bold</Text>
      </div>
      <Footer />
    </>
  );
}

export default App;
