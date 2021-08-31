import React, { useState } from "react";
import "./styles.css";
const movierecommend = {
  SuperHero: [
    {
      Name: "Spider-Man: No Way Home (2021)",
      Description:
        "For the first time in the cinematic history of Spider-Man, our friendly neighborhood hero is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      Rating: "Rating : 8/10"
    },
    {
      Name: "What If...? (2021– )",
      Description:
        "Exploring pivotal moments from the Marvel Cinematic Universe and turning them on their head, leading the audience into uncharted territory.",
      Rating: "Rating : 7.6/10"
    },
    {
      Name: " The Suicide Squad (2021)",
      Description:
        "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",

      Rating: "Rating : 7.4/10"
    },
    {
      Name: "  Titans (I) (2018– )",
      Description: "A team of young superheroes combat evil and other perils.",

      Rating: "Rating : 7.6/10"
    },
    {
      Name: "   Shang-Chi and the Legend of the Ten Rings",
      Description:
        "Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",

      Rating: "Rating : 7.8/10"
    }
  ],

  Action: [
    {
      Name: " Shershaah (2021)",
      Description:
        "This is a story of a PVC awardee brave Indian soldier - Capt. Vikram Batra, who shot to fame and became a household name during the Kargil War in 1999. His indomitable spirit and his unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.",
      Rating: "Rating : 8.9/10"
    },

    {
      Name: " Loki (2021– )",

      Description:
        "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.",

      Rating: "Rating : 8.4/10"
    },

    {
      Name: "Money Heist ",

      Description:
        "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      Rating: "Rating : 8.3/10"
    },
    {
      Name: "  Jungle Cruise (2021)",
      Description:
        "Based on Disneyland's theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.",

      Rating: "Rating : 6.6/10"
    },
    {
      Name: "  Titans (I) (2018– )",
      Description: "A team of young superheroes combat evil and other perils.",

      Rating: "Rating : 7.6/10"
    }
  ],

  Horror: [
    {
      Name: " The Walking Dead (2010–2022)",
      Description:
        "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",

      Rating: "Rating : 8.2/10"
    },
    {
      Name: " American Horror Story (2011– )",
      Description:
        "An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, a slasher summer camp, and a bleak beach town and desert valley.",

      Rating: "Rating : 8/10"
    },
    {
      Name: "Candyman (2021)",

      Description:
        "A sequel to the horror film Candyman (1992) that returns to the now-gentrified Chicago neighborhood where the legend began.",
      Rating: "Rating : 6.4/10"
    },
    {
      Name: "   Chapelwaite (2021– )",
      Description:
        "In the 1850s, Captain Charles Boone relocates his family to his ancestral home in the small, sleepy town of Preacher's Corners. Charles will soon have to confront the secrets of his family's history and fight to end the darkness.",

      Rating: "Rating : 7.5/10"
    },
    {
      Name: "   Brand New Cherry Flavor (2021)",
      Description:
        "Lisa Nova, an aspiring film director in the sun-drenched but seamy world of 1990 Los Angeles, embarks on a mind-altering journey of supernatural revenge that gets nightmarishly out of control.",

      Rating: "Rating : 7.3/10"
    }
  ]
};

const randomNames = Object.keys(movierecommend);

export default function App() {
  const [moviesList, setmovielist] = useState(movierecommend.SuperHero);

  function ClickHandler(random) {
    var movies = movierecommend[random];
    setmovielist(movies);
  }

  function getmoviesPost(movies) {
    var name = movies.Name;
    var desc = movies.Description;
    var rating = movies.Rating;
    var moviesList = (
      <li>
        <div style={{ padding: "0rem 1rem" }}>
          <h3 style={{ marginBottom: "0.5rem", color: "red" }}>{name}</h3>

          <p style={{ fontSize: "1rem" }}>{desc}</p>
          <p style={{ color: "#FFFF66" }}>{rating}</p>
        </div>
      </li>
    );
    return moviesList;
  }

  return (
    <div className="App">
      <nav>
        <h1>Movie Recommendtions</h1>
      </nav>
      <header>
        <p>Checkout some of my favorite movies of different categories.</p>
      </header>
      <div>
        {randomNames.map((random) => {
          return (
            <button
              key={random}
              className="btn"
              onClick={() => ClickHandler(random)}
            >
              {random}
            </button>
          );
        })}
      </div>
      <hr />
      <ol>
        {moviesList.map((movies) => {
          return getmoviesPost(movies);
        })}
      </ol>
    </div>
  );
}
