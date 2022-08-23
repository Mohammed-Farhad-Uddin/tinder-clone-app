import React, { useState } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import farhad from '../image/farhad.jpg';


const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            name: "Mohammed Farhad Uddin",
            url: `${farhad}`,
        },
        {
            name: "Mohammed Farhad Uddin",
            url: `${farhad}`,
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