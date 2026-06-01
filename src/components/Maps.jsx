import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MoveMap = ({ position }) => {
  const map = useMap();
  if (position) map.setView(position, 14);
  return null;
};

export default function Maps({goBack}) {
  const [position, setPosition] = useState([25.3176, 82.9739]);
  const [query, setQuery] = useState("");
  const [route, setRoute] = useState([]);
  const [distance, setDistance] = useState(null);
  const [dark, setDark] = useState(false);

  const searchPlace = async () => {
    if (!query) return;

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );

    const data = await res.json();

    if (data?.length > 0) {
      const latlng = [data[0].lat, data[0].lon];

      setPosition(latlng);
      setRoute([position, latlng]);
      setDistance(getDistance(position, latlng));
    }
  };

  const getDistance = (a, b) => {
    const toRad = (v) => (v * Math.PI) / 180;
    const R = 6371;

    const dLat = toRad(b[0] - a[0]);
    const dLon = toRad(b[1] - a[1]);

    const x =
      Math.sin(dLat / 2) ** 2 +
      Math.sin(dLon / 2) ** 2 *
        Math.cos(toRad(a[0])) *
        Math.cos(toRad(b[0]));

    return (2 * R * Math.asin(Math.sqrt(x))).toFixed(2);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
  };return (
    <div className={dark ? "darkApp" : "lightApp"}>
        <button
  className="backBtn"
  onClick={goBack}
>
  ← 
</button>
      {/* 🌟 PREMIUM SEARCH BAR */}
      <div className="searchWrapper">
       

        <div className="searchBox">

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search any place, city, landmark..."
          />

         <button
  onClick={() => {
    console.log("Search clicked");
    searchPlace();
  }}
>
  🔍 Search
</button>

        </div>

        <button className="iconBtn" onClick={getLocation}>
          📍
        </button>

        <button className="iconBtn" onClick={() => setDark(!dark)}>
          🌙
        </button>

      </div>

      {/* DISTANCE */}
      {distance && (
        <div className="info">
          📏 Distance: {distance} km
        </div>
      )}

      {/* MAP */}
      <div className="mapBox">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url={
              dark
                ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }
          />

          <Marker position={position}>
            <Popup>📍 Selected Location</Popup>
          </Marker>

          {route.length > 1 && (
            <Polyline positions={route} color="cyan" />
          )}

          <MoveMap position={position} />
        </MapContainer>
      </div>

      {/* 🎨 STYLES */}
      <style>{`
        .searchWrapper{
          position:fixed;
          top:20px;
          left:50%;
          transform:translateX(-50%);
          display:flex;
          align-items:center;
          gap:10px;
          z-index:1000;
        }

        /* 🌟 MAIN SEARCH BOX (PREMIUM LOOK) */
        .searchBox{
          display:flex;
          align-items:center;
          background:rgba(255,255,255,0.12);
          backdrop-filter:blur(12px);
          border:1px solid rgba(255,255,255,0.2);
          border-radius:999px;
          padding:6px;
          box-shadow:0 10px 25px rgba(0,0,0,0.3);
        }

        .searchBox input{
          border:none;
          outline:none;
          background:transparent;
          color:black;
          padding:14px 16px;
          width:350px;

          font-size:18px; /* 👈 better readable */
        }
//          .backBtn{
//   width:48px;
//   height:48px;

//   border:none;
//   border-radius:50%;

//   background:rgba(20,20,20,0.8);

//   color:white;

//   font-size:24px;
//   cursor:pointer;

//   backdrop-filter:blur(10px);

//   box-shadow:0 0 20px rgba(168,85,247,0.3);

//   transition:.3s;
// }

// .backBtn:hover{
//   transform:scale(1.08);
//   background:#a855f7;
// }
/* 🔥 IMPORTANT: Leaflet spacing fix */
.leaflet-container {
  margin-top: 0px;
  height: calc(100vh - 50px);
  width: 100%;
}
  .backBtn{
  position:fixed;
  top:20px;
  left:20px;

  width:50px;
  height:50px;

  border:none;
  border-radius:50%;

  background:linear-gradient(
    135deg,
    #9333ea,
    #d946ef
  );

  color:white;
  font-size:24px;
  cursor:pointer;

  z-index:10001;
}
  .leaflet-control-zoom{
  margin-top: 70px !important;
}
        .searchBox button{
  background:linear-gradient(
    135deg,
    #9333ea,
    #d946ef
  );

  color:white;

  border:none;

  padding:12px 28px;

  border-radius:999px;

  cursor:pointer;

  font-weight:700;
}
        .searchBox button:hover{
          transform:scale(1.05);
        }

        .iconBtn{
          padding:12px 14px;
          border-radius:50%;
          border:none;
          background:rgba(255,255,255,0.15);
          backdrop-filter:blur(10px);
          cursor:pointer;
          font-size:20px;
        }

        .iconBtn:hover{
          background:cyan;
          color:black;
        }

       .mapBox{
  height:100vh;
  width:100%;

  overflow:hidden;

  border-radius:24px;

  box-shadow:
    0 0 30px rgba(168,85,247,0.25);

  border:1px solid rgba(255,255,255,0.08);
}

        .info{
          position:fixed;
          bottom:20px;
          left:50%;
          transform:translateX(-50%);
          background:black;
          padding:10px 16px;
          border-radius:12px;
          z-index:1000;
        }

        .darkApp{
          background:black;
          color:white;
          min-height:100vh;
        }

        .lightApp{
          background:white;
          color:black;
          min-height:100vh;
        }
          @media (max-width: 768px){

  .searchWrapper{
    flex: 1;
    top:12px;
    width:95%;
    gap:6px;
    margin-left: 18px
  }

  .searchBox{
    width:;
    flex:1;
    padding:4px;
  }

  .searchBox input{
    width:60%;
    margin-left :29;
    padding:20px;
    font-size:13px;
  }

  .searchBox button{
    margin-left:19px;
    padding:15px 12px;
    font-size:13px;
  }

  .backBtn{
    width:42px;
    height:42px;
    font-size:20px;
      margin-top:650px;
    margin-right:1px;
  
  }

  .iconBtn{
    width:42px;
    height:42px;
    padding:0;
    font-size:18px;
  }

  .leaflet-control-zoom{
    margin-top:65px !important;
  }
}
    .mapBox{
    height:100vh;
    border-radius:0;
    }

  .info{
    width:90%;
    text-align:center;
    font-size:14px;
  }
}
      `}</style>
    </div>
  );
  
}

