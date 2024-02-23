import { FaStar } from 'react-icons/fa'
import styles from './styles.module.css'
import { useState } from 'react';

const BookMark = () => {
const [bookMarked, setBookMarked] = useState(false); 

  return (
    <div onClick={() => setBookMarked(!bookMarked)} className={styles.star}>
      <FaStar color={bookMarked ? "#e0c217" : 'black'} />
    </div>
  )
}

export default BookMark
