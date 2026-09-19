import { useState } from "react";

function App() {
  // Form State (Object State)
  const [robotForm, setRobotForm] = useState({
    robotName: "",
    location: "",
    price: "",
    available: true,
  });

  // Error State
  const [errorMessages, setErrorMessages] = useState({
    robotName: "",
    location: "",
    price: "",
  });

  // Robots List State
  const [robots, setRobots] = useState([]);

  // Search State
  const [search, setSearch] = useState("");

  // Submit Form
  function handleSubmit(e) {
    e.preventDefault();

    // Clear previous errors
    setErrorMessages({
      robotName: "",
      location: "",
      price: "",
    });

    // Validation
    if (robotForm.robotName === "") {
      setErrorMessages((prev) => ({
        ...prev,
        robotName: "Robot name is required",
      }));
      return;
    }

    if (robotForm.location === "") {
      setErrorMessages((prev) => ({
        ...prev,
        location: "Location is required",
      }));
      return;
    }

    if (robotForm.price === "") {
      setErrorMessages((prev) => ({
        ...prev,
        price: "Price is required",
      }));
      return;
    }

    // Create New Robot
    const newRobot = {
      id: Date.now(),
      ...robotForm,
    };

    // Add Robot
    setRobots((prev) => [...prev, newRobot]);

    console.log("🚀 Robot Registered", newRobot);

    // Reset Form
    setRobotForm({
      robotName: "",
      location: "",
      price: "",
      available: true,
    });
  }

  // Search Filter
  const filteredRobots = robots.filter(
    (robot) =>
      robot.robotName.toLowerCase().includes(search.toLowerCase()) ||
      robot.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🤖 RobuVerse Robot Registration</h1>

      <form onSubmit={handleSubmit}>
        <label>Robot Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter robot name"
          value={robotForm.robotName}
          onChange={(e) =>
            setRobotForm({
              ...robotForm,
              robotName: e.target.value,
            })
          }
        />
        {errorMessages.robotName && (
          <p style={{ color: "red" }}>{errorMessages.robotName}</p>
        )}

        <br />

        <label>Location</label>
        <br />
        <input
          type="text"
          placeholder="Enter location"
          value={robotForm.location}
          onChange={(e) =>
            setRobotForm({
              ...robotForm,
              location: e.target.value,
            })
          }
        />
        {errorMessages.location && (
          <p style={{ color: "red" }}>{errorMessages.location}</p>
        )}

        <br />

        <label>Rental Price (₹ / day)</label>
        <br />
        <input
          type="number"
          placeholder="Enter price"
          value={robotForm.price}
          onChange={(e) =>
            setRobotForm({
              ...robotForm,
              price: e.target.value,
            })
          }
        />
        {errorMessages.price && (
          <p style={{ color: "red" }}>{errorMessages.price}</p>
        )}

        <br />

        <label>Availability</label>
        <br />
        <select
          value={robotForm.available}
          onChange={(e) =>
            setRobotForm({
              ...robotForm,
              available: e.target.value === "true",
            })
          }
        >
          <option value={true}>Available</option>
          <option value={false}>Booked</option>
        </select>

        <br />
        <br />

        <button type="submit">🚀 Register Robot</button>
      </form>

      <hr />

      <h2>🔍 Search Robots</h2>
      <input
        type="text"
        placeholder="Search by name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      <h2>📋 Registered Robots ({filteredRobots.length})</h2>

      {filteredRobots.length === 0 ? (
        <p>No robots found.</p>
      ) : (
        filteredRobots.map((robot) => (
          <div
            key={robot.id}
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              padding: "15px",
              marginBottom: "15px",
            }}
          >
            <h3>🤖 {robot.robotName}</h3>
            <p>📍 {robot.location}</p>
            <p>💰 ₹{robot.price} / day</p>

            {robot.available ? (
              <p style={{ color: "green" }}>🟢 Available</p>
            ) : (
              <p style={{ color: "red" }}>🔴 Booked</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default App;