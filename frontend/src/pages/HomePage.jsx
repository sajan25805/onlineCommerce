import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
// Sample product data
const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 20,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Comfortable cotton T-shirt",
  },
  {
    id: 2,
    name: "Jeans",
    price: 50,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Classic blue jeans",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 80,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Stylish sneakers for everyday wear",
  },
  {
    id: 4,
    name: "Stylish Hat",
    price: 30,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Fashionable hat for all occasions",
  },
  {
    id: 5,
    name: "Hoodie",
    price: 60,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Warm and stylish hoodie",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 25,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Trendy sunglasses for sunny days",
  },
  {
    id: 7,
    name: "Backpack",
    price: 70,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Spacious backpack for all your essentials",
  },
  {
    id: 8,
    name: "Watch",
    price: 100,
    imageUrl:
      "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
    description: "Elegant watch for every occasion",
  },
];

function HomePage() {
  return (
    <div>
      <NavBar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to Our E-Clothing Store
        </h1>
        <Link to="/product">
          <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white overflow-hidden shadow rounded-lg p-6 flex flex-col justify-between cursor-pointer"
              >
                <img
                  className="w-full h-64 object-contain mb-4"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div>
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-2">${product.price}</p>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
