// App.js
import React, { useState } from 'react';

const data = [
  { id: 1, name: ' Mens-Tshirt', link: './Tshirt' },
  { id: 2, name: 'Mens Blazer', link: './Linenshirt' },
  { id: 3, name: 'Mens Jacket', link: '/Jacket1' },
  { id: 4, name: 'Mens Shos', link: '/Shoes1' },
  { id: 5, name: 'Mens Suit', link: '/Suit' },
  { id: 6, name: 'Mens Bags', link: '/Bags1' },
  { id: 7, name: 'Mens', link: '/Mens' },
  { id: 6, name: 'Womens', link: '/Womens' },
  { id: 8, name: 'Women-Blazer', link: '/Womens3' },
  { id: 9, name: 'Women-Tshirt', link: '/Womens4' },
  { id: 9, name: 'Women-Jackets', link: '/Womens5' },
  { id: 9, name: 'Jumpsuit', link: '/Womens6' },
  { id: 9, name: 'Women-Boots', link: '/Womens7' },
  { id: 9, name: 'Womens-Sweater', link: '/Womens8' },

];

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-[10vh]">
      <label htmlFor="search" className="text-sm font-medium">Search:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Enter search items..."
        className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md">
        Search
      </button>
    </form>
  );
}

function ProductCard({ product }) {
  return (
    <div className="w-full p-4 border rounded-md shadow-md hover:shadow-lg">
      
      <a href={product.link} className="text-decor text-black hover:underline no-underline">
      {product.name}
      </a>
    </div>
  );
}

function App() {
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (searchTerm) => {
    const results = data.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleSearch} />
      <div className="grid grid-cols-1 gap-4 mt-4">
        {searchResults.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
