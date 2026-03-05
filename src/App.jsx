import "./App.css";
import Navbar from "./components/Navbar";
import CakeCard from "./components/CakeCard";

function App() {
  const Cakes = [
    {
      id: 1,
      name: "Chocolate Cake",
      price: 10,
      image: "https://images.unsplash.com/photo-1605472569505-0c52c52f8a5a",
    },
    {
      id: 2,
      name: "Strawberry Cake",
      price: 12,
      image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729",
    },
    {
      id: 3,
      name: "Vanilla Cake",
      price: 9,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {Cakes.map((cake) => (
            <CakeCard
              key={cake.id}
              name={cake.name}
              price={cake.price}
              image={cake.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
