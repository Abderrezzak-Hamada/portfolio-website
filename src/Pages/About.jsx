import React from "react";
import "../index.css";


const OverMij = () => {
  return (
    <div className="overmij-container">
      <div className="overmij-left">
        <h2 className="overmij-title">Over Mij</h2>
        <img src='./images/gg.jpg' alt="Foto links" className="overmij-img" />
      </div>

      <div className="overmij-middle">
        <p>
          Hey! Ik ben een frontend developer die het superleuk vindt om ideeën
          om te zetten in iets dat écht werkt in de browser. Met HTML, CSS en
          JavaScript bouw ik graag mooie en gebruiksvriendelijke websites. De
          laatste tijd ben ik ook aan het spelen met React, om wat meer dynamiek
          aan mijn projecten toe te voegen.
        </p>

        <p>
          Wat me het meest motiveert, is dat moment waarop alles eindelijk
          samenvalt — wanneer de code klopt, het design goed voelt en het gewoon
          “klikt”. Ik vind het tof om te blijven leren, nieuwe dingen uit te
          proberen en stap voor stap beter te worden in wat ik doe.
        </p>

        <p>
          Naast coderen besteed ik veel tijd aan fitness en kickboksen. Dat
          helpt me om mijn hoofd leeg te maken, discipline te houden en met
          nieuwe energie weer achter de computer te kruipen. Ik hou van
          eenvoud, structuur en dingen die gewoon goed werken — zowel in code
          als in het dagelijks leven.
        </p>
      </div>

      <div className="overmij-right">
        <img src='./images/gg1.jpg' alt="Foto rechts" className="overmij-img-right" />
      </div>
    </div>
  );
};

export default OverMij;
