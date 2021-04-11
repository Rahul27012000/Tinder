import React, { useState,useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './Tindercards.css'
import axios from './axios'

function Tindercards() {
    const [people, setpeople] = useState([
        {
            name:"Elon Musk",
            imgUrl:"https://wallpapercave.com/wp/wp2048432.jpg"
        },
        {
            name:"Jeff",
            imgUrl:"https://wallpapercave.com/wp/wp4025589.jpg"

        },
        {
            name:"Ambani",
            imgUrl:"https://wallpapercave.com/wp/wp6910753.jpg"
        },
        {
            name:"Modi",
            imgUrl:"https://wallpapercave.com/wp/wp6727827.jpg"
        },
        {
            name:"Zukerberg",
            imgUrl:"https://wallpapercave.com/wp/wp2126141.jpg"
        }
    ]);

    useEffect(() => {
        async function fetchData(){
            const req=await axios.get('/tinder/cards')

            setpeople(req.data)
        }
        fetchData();
    },[])

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }
    return (
        <div className="Tindercards">
            <div className="tindercards_cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default Tindercards
