import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import NavBar from "../components/Navbar";

export default function ProductDetail() {
  const [rating, setRating] = useState(5); // Example rating, you can set it dynamically
  const [selectedColor, setSelectedColor] = useState("black"); // State to track selected color

  // Function to handle color change
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  // Product object containing details
  const product = {
    name: "Acme Circles T-Shirt",
    description: "60% combed ringspun cotton/40% polyester jersey tee.",
    price: "$99",
    images: {
      black: "https://www.hallensteins.com/content/products/ab-22-heavyweight-tee-black-front-10002825.jpg?optimize=high&width=940",
      white: "https://files.cdn.printful.com/o/upload/variant-image/c5/c50aab3b49dac011cacd4a05509240c4_l",
      blue: "https://www.hallensteins.com/content/products/ab-22-heavyweight-tee-indigo-front-10002825.jpg?optimize=high&width=940",
    },
  };

  return (
    <>
      <NavBar />
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid md:grid-cols-5 gap-3 items-start">
          <div className="flex md:hidden items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-2xl sm:text-3xl">{product.name}</h1>
              <div>
                <p>{product.description}</p>
              </div>
              <div className="flex items-center gap-4">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    {index < rating ? <AiFillStar /> : <AiOutlineStar />}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-4xl font-bold ml-auto">{product.price}</div>
          </div>
          <div className="hidden md:flex flex-col gap-3 items-start">
            {/* Replace buttons with images */}
            <img
              alt="Preview thumbnail"
              className="aspect-[5/6] object-cover border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50"
              height={120}
              src={product.images[selectedColor]} // Dynamically change image source based on selected color
              width={100}
            />
            {/* Add more images here */}
          </div>
          <div className="md:col-span-4">
            <img
              alt="Product Image"
              className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
              height={900}
              src={product.images[selectedColor]} // Dynamically change image source based on selected color
              width={600}
            />
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="hidden md:flex items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
              <div>
                <p>{product.description}</p>
              </div>
              <div className="flex items-center gap-4">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-yellow-500">
                    {index < rating ? <AiFillStar /> : <AiOutlineStar />}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-4xl font-bold ml-auto">{product.price}</div>
          </div>
          {/* Replace form with HTML form */}
          <form className="grid gap-4 md:gap-10">
            <div className="grid gap-2">
              <label className="text-base" htmlFor="color">
                Color
              </label>
              <select
                id="color"
                className="border rounded-md p-2"
                onChange={handleColorChange} // Call handleColorChange function on select change
                value={selectedColor} // Set selected value to state
              >
                {Object.keys(product.images).map((color) => (
                  <option key={color} value={color}>
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-base" htmlFor="size">
                Size
              </label>
              <select id="size" className="border rounded-md p-2">
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="text-base" htmlFor="quantity">
                Quantity
              </label>
              <select id="quantity" className="border rounded-md p-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            {/* Replace button with HTML button */}
            <button className="w-full px-4 py-2 text-lg font-medium text-white bg-black rounded-md hover:bg-gra-900 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Add to cart
            </button>
          </form>
        </div>
      </div>
      
    </>
  );
}
