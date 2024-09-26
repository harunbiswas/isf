import Map from "./Map";

export default function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="container">
        <h2 className="title">Our Location</h2>
        <div className="map">google map</div>
        <Map />
      </div>
    </div>
  );
}
