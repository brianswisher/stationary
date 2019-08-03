import React, { useState } from 'react';
import Tags from './tags';
import "./stations.css"

const Stations = () => {
  // Use hooks, Declare a new state variable, called "index" (the station's data index)
  const [index, setIndex] = useState();

  const { data } = require('./stationsPayload');

  const handleClick = e => {
    setIndex(e.target.getAttribute('data-index'));
  };

  const station = index && data[index];

  console.log(station);

  return (
    <div>
        <h2>
          {station && station.name}
          {station && <Tags data={station.tags} />}
        </h2>
        {index && <audio controls src={station && station.streamUrl} />}
        <p>{station && station.description}</p>
        <div style={{maxWidth: 688, padding: 0}}>
          {data.map((s, i) => (
            <span key={s.id} style={{maxWidth: 147}}>
              <img
                data-index={i}
                className="station"
                alt={s.name}
                src={s.imgUrl}
                onClick={handleClick}
              />
            </span>
          ))}
        </div>
    </div>
  );
}

export default Stations;
