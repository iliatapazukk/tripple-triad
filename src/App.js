import React from 'react';
import CHARACTER from './CHARACTER.json'
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Heading from './components/Heading';
import CharacterCard from './components/CaracterCard';
import st from './App.module.scss';

function App() {
  const [character, setCharacter] = React.useState(CHARACTER)
  const handleLikeClick = (id) => {
    setCharacter(character.map(
      clickedHero => clickedHero.id === id ? { ...clickedHero, isLike: !clickedHero.isLike } : clickedHero
    ))
  }
  return (
    <>
      <Header />
      <Slider />
      <section className={st.cardSection}>
        <div className={st.cardTitle}>
          <Heading level={1} backLine>Marvel cards</Heading>
          <Heading level={2}>Collect your best five</Heading>
        </div>
        <div className={st.cardWrap}>
          {character.map((character) => {
            return (
              <div key={character.id}>
                <CharacterCard
                  id={character.id}
                  src={character.thumbnail.path}
                  name={character.name}
                  isLike={character.isLike}
                  humanName={character.humanName}
                  description={character.description}
                  onLikeClick={handleLikeClick}
                />
              </div>
            )
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App
