import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [bhk, setBhk] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [area, setArea] = useState(1000);
  const [estimatedPrice, setEstimatedPrice] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/get_location_names")
      .then((response) => response.json())
      .then((data) => setLocations(data.locations))
      .catch((error) =>
        console.error("Error al cargar las ubicaciones:", error)
      );
  }, []);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleEstimatePrice = () => {
    const formData = new FormData();
    formData.append("total_sqft", area);
    formData.append("bhk", bhk);
    formData.append("bath", bathrooms);
    formData.append("location", selectedLocation);

    fetch("http://127.0.0.1:5000/api/predict_home_price", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => setEstimatedPrice(data.estimated_price + " Lakh"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="container">
      <h1>Home Price Prediction</h1>
      <label>Area (Square Feet)</label>
      <input
        type="number"
        value={area}
        onChange={(e) => setArea(e.target.value)}
      />
      <label>BHK</label>
      <select value={bhk} onChange={(e) => setBhk(parseInt(e.target.value))}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <label>Bathrooms</label>
      <select value={bathrooms} onChange={(e) => setBathrooms(parseInt(e.target.value))}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <label>Location</label>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="" disabled>Choose a Location</option>
        {locations.map((location) => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      <button onClick={handleEstimatePrice}>Estimate Price</button>
      {estimatedPrice && (
        <div className="result">
          <h2>{estimatedPrice}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
