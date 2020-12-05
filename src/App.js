import React, { useState } from "react";
import Header from "./Components/Header";
import Person from "./Components/Person";
import Lonely from "./Components/Lonely";
import data from "./data.json";
import "./App.css";

function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState(data);
  const [superLikedUser, setsuperLikedUser] = useState(data);
  const [disliked, setDisliked] = useState(data);
  const activeUser = 0;

  const removedPersonFromDataScr = (peopleSource, userId) =>
    peopleSource.filter((user) => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUser];
    const newDislikedUsers = [...disliked];

    console.log(action);

    switch (action) {
      case "ADD_TO_LIKED_USERS":
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);
          newLikedUsers.push(data[userId]);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataScr(people, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);
          newDislikedUsers.push(data[userId]);

          setDisliked(newLikedUsers);
          setPeople(removedPersonFromDataScr(people, userId));
        }
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);
          newSuperLikedUsers.push(data[userId]);

          newSuperLikedUsers(newSuperLikedUsers);
          setPeople(removedPersonFromDataScr(people, userId));
        }
        break;
      default:
      return people;
    }
  };

  return (
    <div className="app">
      <Header />

      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUser={superLikedUser}
        />
      )}
    </div>
  );
}

export default App;
