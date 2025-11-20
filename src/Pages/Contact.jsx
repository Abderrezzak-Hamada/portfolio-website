
const Contact = () => {
  return (
    <div className="contact-page">
      {/* Linkerkant met foto's */}
      <div className="photo-section">
        <div className="top-photo">
          <img src=".\images\gg4.jpg" alt="Grote foto" />
        </div>
        <div className="bottom-photos">
          <img src=".\images\gg5.jpg" alt="Kleine foto 1" />
          <img src=".\images\gg6.jpg" alt="Kleine foto 2" />
        </div>
      </div> 

      {/* Rechterkant met contactformulier */}
      <form>
        <input type="text" name="name" placeholder="Naam" />
        <input type="email" name="email" placeholder="E-mail" />
        <textarea name="message" placeholder="Bericht" rows="5"></textarea>
        <input type="submit" value="Verzenden" />
      </form>
    </div>
  );
};

export default Contact;
