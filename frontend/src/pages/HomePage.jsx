

import { Link } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: 1,
    name: 'T-shirt',
    price: 20,
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Comfortable cotton T-shirt',
  },
  {
    id: 2,
    name: 'Jeans',
    price: 50,
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Classic blue jeans',
  },
  {
    id: 3,
    name: 'Sneakers',
    price: 80,
    imageUrl: 'https://via.placeholder.com/150',
    description: 'Stylish sneakers for everyday wear',
  },
];

function HomePage() {
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-black font-bold text-xl">Your Logo</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-black hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our E-Clothing Store</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
              <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
              <div className="px-4 py-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
