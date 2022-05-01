import React from 'react';
import Slider from '../../components/Slider';
import Heading from '../../components/Heading';
import CharacterCard from '../../components/CaracterCard';
import CHARACTERS from '../../CHARACTER.json';
import st from './Main.module.scss';

const Main = () => {
  const [characters, setCharacters] = React.useState(CHARACTERS)
  const handleLikeClick = (id) => {
    setCharacters((prevState) => prevState.map(
      clickedHero => clickedHero.id === id ? {...clickedHero, isLike: !clickedHero.isLike} : clickedHero
      )
    )
  }
  return (
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
                />
              </div>
            )
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
