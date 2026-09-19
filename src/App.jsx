import { useState } from "react";
const robots = [
  {
    id: 1,
    name: "NILA",
    location: "Kozhikode",
    available: true,
  },
  {
    id: 2,
    name: "APEX",
    location: "Kannur",
    available: false,
  },
  {
    id: 3,
    name: "Lisa",
    location: "Malappuram",
    available: true,
  },
  {
    id: 4,
    name: "Robot Dog",
    location: "Kochi",
    available: true,
  },
  {
    id: 5,
    name: "Drone X1",
    location: "Thrissur",
    available: false,
  },
];

function App() {
const [search, setSearch] = useState("");
  return (
    <>
      <h1>🤖 RobuVerse Search</h1>
      <input
  type="text"
  placeholder="Search robots..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
      {robots.filter((robot) => 
        robot.name.toLowerCase().includes(search.toLowerCase()) || robot.location.toLowerCase().includes(search.toLowerCase())).map((robot) => (
        <div key={robot.id}>
        <h2>🤖 {robot.name}</h2>
        <h3>📍 {robot.location}</h3>
        <hr />
        </div>
      ))}
    </>
  );
}

export default App;