import Header from "../../components/header"
import GameCard from "../../components/gameCard"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import SearchInput from "../../components/searchInput";


const Home = () => {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then((r) => r.json())
      .then((data) => setGames(data))    
  }, [])  

  const filteredGames = games.filter((game) => game.title.toUpperCase().includes(searchTerm.toUpperCase()))

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col className="my-5" lg="6" >
            <SearchInput  onSearch={(term) => setSearchTerm(term)}/>
          </Col>
        </Row>
        <Row>
          {filteredGames.map((game) => <Col md="6" lg="4" xxl="3" key={game.id}><GameCard {...game} /></Col>)}
        </Row> 
        {!filteredGames.length && <p>Nada Encontrado!</p>} 
      </Container>
    </>
  )
}

export default Home