import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../forms/Input';

function SearchBar() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/repositories?q=${term}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search repositories"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
