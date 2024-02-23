import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import PropTypes from 'prop-types';

const SearchInput = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    onSearch(searchTerm)   
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <InputGroup >
        <Form.Control
          value={searchTerm}
          onChange={({target}) => setSearchTerm(target.value)}
          type="text"
          placeholder="Procurar"        
        />
        <Button variant="warning" type='submit'><FaSearch /></Button>
      </InputGroup>
    </form> 
  )
}

SearchInput.propTypes = {
  onSearch: PropTypes.func
}

export default SearchInput
