import React from "react";

const Home = () => {
  return (
    <div>
      <h1>World Universities app</h1>

      <p>
        This app is intended for informational purposes only, you could still
        make a proper search online for any information you find here.
      </p>
      <p style={{ fontWeight: "bold", marginBottom: 5, marginTop: 15 }}>
        Features:
      </p>
      <p>
        (1) Provide users with information about thousands of universities
        around the world.
      </p>
      <p>(2) Users can access the official websites of these institutions.</p>
      <p>(3) Users can add universities to their favourites tab.</p>
      <p>
        (4) Users can also make suggestions for universities to be added to the
        app (Note: We'll properly review every suggestion before adding it).
      </p>
    </div>
  );
};

export default Home;
