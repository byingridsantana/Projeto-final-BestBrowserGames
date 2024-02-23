import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Header from "../../components/header"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [name, setName] = useState('');  
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        dateOfBirth,
        state,
        country,
        password,
      }),
    })
      .then((r) => r.json())
      .then(() => {
        alert ('usuário criado com sucesso!') 
        navigate ('/')
      })
      .catch(() => {
        alert ('falha ao criar usuário')         
      })
      
  }

  return (
    <>
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" >
          <Form className="mt-5" onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control type="text" placeholder="Nome Completo" value={name} onChange={({ target }) => setName(target.value)} required />              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Data de Nascimento</Form.Label>
              <Form.Control type="date" value={dateOfBirth} onChange={({ target }) => setDateOfBirth(target.value)} required />              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Control type="text" placeholder="Estado" value={state} onChange={({ target }) => setState(target.value)} required />              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>País</Form.Label>
              <Form.Control type="text" placeholder="País" value={country} onChange={({ target }) => setCountry(target.value)} required />              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value={email} onChange={({ target }) => setEmail(target.value)} required />              
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Senha" value={password} onChange={({ target }) => setPassword(target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
        </Row>                
      </Container>
    </>
  )
}


export default Register