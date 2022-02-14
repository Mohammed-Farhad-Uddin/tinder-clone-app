import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';


const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirections(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "Left the screen!");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
                {
                    people.map(person => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                            preventSwipe={['up', 'down']}>
                            <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TinderCards;