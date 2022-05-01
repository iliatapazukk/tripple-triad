import React from 'react';
import CHARACTERS from './CHARACTER.json'
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import Heading from './components/Heading';
import CharacterCard from './components/CaracterCard';
import st from './App.module.scss';
import Biography from './pages/Biography';
import Button from './components/Button';
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}
function App() {
  const [characters, setCharacters] = React.useState(CHARACTERS)
  const [characterId, setCharacterBioId] = React.useState(null)
  const handleReadBioClick = (id) => {
    setCharacterBioId(id)
    scrollTop()
  }
  const resetBio = () => {
    setCharacterBioId(null)
    scrollTop()
  }
  const handleLikeClick = (id) => {
    setCharacters((prevState) => prevState.map(
        clickedHero => clickedHero.id === id ? {...clickedHero, isLike: !clickedHero.isLike} : clickedHero
      )
    )
  }

  return (
    <>
      <Header />
      {characterId ? (
        <section className={st.cardSection}>
          <Biography id={characterId}/>
          <Button
            isDark
            onClick={resetBio}
            >
            Go Back
          </Button>
        </section>
      ): (
        <>
          <Slider />
          <section className={st.cardSection}>
            <div className={st.cardTitle}>
              <Heading level={1} backLine>Marvel cards</Heading>
              <Heading level={2}>Collect your best five</Heading>
            </div>
            <div className={st.cardWrap}>
              {characters.map((character) => {
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
                      onReadBioClick={handleReadBioClick}
                    />
                  </div>
                )
              })}
            </div>
          </section>
        </>
      )}
      <Footer />
    </>
  );
}

export default App
