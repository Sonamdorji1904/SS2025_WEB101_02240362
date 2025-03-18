import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ProfileCard
        name="Sonam Dorji"
        job="Software Developer"
        skills={["React", "CSS", "JavaScript"]}
        image="https://via.placeholder.com/100"
      />

      <ProfileCard
        name="Jigden Norbu Namgyel"
        job="Software Developer"
        skills={["React", "CSS", "JavaScript", "Figma", "C++"]}
        image="https://via.placeholder.com/100"
      />
    </div>

  );
}

export default App;
