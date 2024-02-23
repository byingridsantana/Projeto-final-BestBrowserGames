import PropTypes from 'prop-types';
import styles from './styles.module.css'
import { Button } from 'react-bootstrap';
import BookMark from '../bookMark';

const GameCard = ({thumbnail, title, platform, genre, game_url, short_description}) => {
  return (
    <div className={styles.card} >
      <BookMark />
      <img className={styles.image} src={thumbnail}/>
      <div className={styles.text} >
        <h2>{title}</h2>
        <span><strong>Plataforma:</strong> {platform}</span><br />
        <span><strong>Gênero:</strong> {genre}</span><br />
        <p>{short_description}</p>
        <a href={game_url} target="_blank" rel="noopener noreferrer">
          <Button className='w-100' variant="warning">Jogue Agora</Button>
        </a>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  thumbnail: PropTypes.string, 
  title: PropTypes.string, 
  platform: PropTypes.string, 
  genre: PropTypes.string,
  game_url: PropTypes.string, 
  short_description: PropTypes.string,
}

export default GameCard
