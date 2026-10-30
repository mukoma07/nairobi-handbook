import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Location = {
  name: string;
  position: [number, number];
  description: string;
  category: string;
  type: string;
};

const locations: Location[] = [
  {
    name: "Nairobi CBD",
    position: [-1.2864, 36.8172] as [number, number],
    description: "Explore the heart of Nairobi, with shops, offices, and city attractions.",
    category: "Commercial",
    type: "Commercial District",
  },
  {
    name: "Westlands",
    position: [-1.2676, 36.8108] as [number, number],
    description: "A major commercial, dining, and entertainment district.",
    category: "Commercial",
    type: "Business & Entertainment District",
  },
  {
    name: "Kilimani",
    position: [-1.2921, 36.7875] as [number, number],
    description: "A popular residential and commercial area.",
    category: "Residential",
    type: "Residential & Commercial Area",
  },
  {
    name: "Karen",
    position: [-1.3197, 36.7073] as [number, number],
    description: "Known for leafy surroundings, shopping, and attractions.",
    category: "Residential",
    type: "Suburban & Leisure Area",
  },
  {
    name: "Parklands",
    position: [-1.2607, 36.8219] as [number, number],
    description: "A diverse neighborhood with restaurants, shops, and residential areas.",
    category: "Commercial",
    type: "Residential &Commercial Area",
  },
  {
    name: "Lavington",
    position: [-1.2865, 36.7695] as [number, number],
    description: "A residential neighborhood with shopping and dining options.",
    category: "Residential",
    type: "Residential Neighborhood",
  },
];

function NairobiMap() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const filteredLocations = locations.filter((location) => {
  const matchesCategory =
    selectedCategory === "All" ||
    location.category === selectedCategory;

  const matchesSearch = location.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase().trim());

  return matchesCategory && matchesSearch;
});

  return (

    <section className="map-section">
      <div className="map-section-container">
        <div className="section-heading">
          <p className="section-label">DISCOVER THE CITY</p>
          <h2>Explore Nairobi on the map.</h2>
          <p>
            Start exploring Nairobi's neighborhoods and discover
            what makes each area unique.
          </p>
        </div>

        
        <div className="map-search">
          <input
            type="text"
            placeholder="Search Nairobi neighborhoods..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search Nairobi neighborhoods"
          />

          {searchTerm && (
            <button
              type="button"
              className="map-clear-button"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </button>
         )}
       </div>

        
        <div className="map-filters">
          {["All", "Residential", "Commercial"].map((category) => (
            <button
              key={category}
              type="button"
              className={
                selectedCategory === category
                  ? "map-filter-button active"
                  : "map-filter-button"
             }
             onClick={() => setSelectedCategory(category)}
            >
             {category === "All" ? "All Locations" : category}
            </button>
         ))}
        </div>

        <p className="map-results-count" aria-live="polite">
          Showing {filteredLocations.length}{" "}
          {filteredLocations.length === 1 ? "location" : "locations"}
        </p>

        {filteredLocations.length === 0 && (
          <p className="map-empty-state">
          No locations found. Try another neighborhood or change your filters.
        </p>
      )}

        <div className="nairobi-map-wrapper">
          <MapContainer
            center={[-1.2864, 36.8172]}
            zoom={11}
            scrollWheelZoom={false}
            className="nairobi-map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {filteredLocations.map((location) => (
              <Marker key={location.name} position={location.position}>
              <Popup>
                <strong>{location.name}</strong>
                <br />
                <span>{location.type}</span>
                <br />
                {location.description}
                <br />
                <br />
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${location.position[0]},${location.position[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
             </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default NairobiMap;