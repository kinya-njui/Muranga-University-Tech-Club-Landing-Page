import "./Tracks.css";
import tracks from "../../data/tracks";
import Title from "../Title/Title";
import TracksForm from "../TracksForm/TracksForm";

function TrackCard({ trackImage, trackName, trackDescription }) {
  return (
    <div className="track-card">
      <img src={trackImage} alt={trackName} className="track-card-image" />
      <h4 className="track-card-name">{trackName}</h4>
      <p className="track-card-description">{trackDescription}</p>
    </div>
  );
}

function Tracks() {
  return (
    <section>
      <Title maintitle="Explore Our Tracks" subtitle="Choose Your Path" />
      <div className="tracks-container">
        {tracks.map((track, index) => (
          <TrackCard
            key={index}
            trackImage={track.trackImage}
            trackName={track.trackName}
            trackDescription={track.trackDescription}
          />
        ))}
      </div>
      <div className="TracksForm">
        <TracksForm />
      </div>
    </section>
  );
}

export default Tracks;
