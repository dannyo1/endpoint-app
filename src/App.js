import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { app_background } from "./data/markdown";

// import your custom data fetching function
// TODO: add a data fetching function to the api.js file in the endpoints folder
import { getAllAvatarCharacters } from "./data/endpoints";
import { getDogPictures } from "./data/endpoints";

const App = () => {
  const [pictures, setPictures] = useState(null);

  /**
   * TODO: modify this useEffect to pass as many params as you want
   * - at minimum, pass your state setting function from above
   * - you could also create more state variables to handle multiple params for your endpoint / user input
   */
  useEffect(() => {
    if (!pictures) {
      // if our characters is null, fetch some data!
      getDogPictures(setPictures);
    }
    // don't forget to add every state variable you're monitoring to this array!
  }, [pictures]);

  return (
    <div className="home">
      <div id="content">
        <ReactMarkdown className="background" source={app_background} />

        <div className="container">
          {/**
           * Code explanation:
           * Feel free to delete this or modify this. It is creating a grid using Boostrap classes
           * - map has a 2nd parameter that tells you the elements index in the array, its good practice to pass this as the key prop
           * - remember to print to console the data you fetch, it will definitely have different properties & values than my data!
           */}
          <div className="row justify-content-md-center">
            {/**
             * - TODO: use a ternary to add conditional react elements
             * - in this case, if characters is null, it displays "No characters"
             * - otherwise, it maps through characters and renders info for each person!
             */}
            {pictures ? (
              pictures.map((pic, idx) => (
                <div className="col-3 dog" key={idx}>
              
                  {/* Displays image of each character + adds an additional class (character-img) so I can customize in my CSS file*/}
                  <img
                    src={pic.photoUrl}
                    className="img-fluid character-img"
                    alt="dog"
                  ></img>
                </div>
              ))
            ) : (
              <div> No Dogs :-( </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
