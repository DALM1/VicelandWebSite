import { useState, useEffect } from "react";
import Atropos from "atropos/react";


const ranges = [
  { start: 1987, end: 1999 },
  { start: 2000, end: 2009 },
  { start: 2010, end: 2021 },
];

function Galerie() {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    const res = await fetch("Galerie.json");
    const resJSON = await res.json();
    setMovies(resJSON.movies);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderRange = (movies, start, end) => {
    return (
      <div className="row">
       
        {/* <h2>
          {start}-{end}
        </h2> */}
        <div className="photo-list">
          {movies
            .filter((m) => m.Year >= start && m.Year <= end)
            .sort((m1, m2) => parseInt(m1.Year) - parseInt(m2.Year))
            .map(renderMovie)}
        </div>
      </div>
    );
  };

  const renderMovie = (m) => {
    return (
      <Atropos key={m.Title} className="atropos">
        <img
          className="poster-image"
          src={m.Poster}
          alt={m.Title}
          data-atropos-offset="-3"
        />
      </Atropos>
    );
  };

  return (
    <div id="galerie">
      <h1>Viceland  Galerie</h1>
      {ranges.map((range) => {
        return renderRange(movies, range.start, range.end);
      })}
    </div>
  );
}

export default Galerie;