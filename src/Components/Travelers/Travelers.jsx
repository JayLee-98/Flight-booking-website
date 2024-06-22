import React from 'react';

import paris from '../../assets/paris.jpeg';
import london from '../../assets/london.jpeg';
import seoul from '../../assets/seoul.jpeg';
import dubai from '../../assets/dubai.jpeg';
import traveler1 from '../../assets/user (1).png';
import traveler2 from '../../assets/user (2).jpeg';
import traveler3 from '../../assets/user (3).jpg';
import traveler4 from '../../assets/user (4).png';


const travelers = [
    {
        id: 1,
        destinationImage: paris,
        travelerImage: traveler1,
        travelerName: 'Sophia Oi',
        socialLink: '@Sophia_1231'
    },
    {
        id: 2,
        destinationImage: london,
        travelerImage: traveler2,
        travelerName: 'Rodrigo Diaz',
        socialLink: '@rdiaz'
    },
    {
        id: 3,
        destinationImage: seoul,
        travelerImage: traveler3,
        travelerName: 'Goozal',
        socialLink: '@GoozalTV'
    },
    {
        id: 4,
        destinationImage: dubai,
        travelerImage: traveler4,
        travelerName: 'Nicole Web',
        socialLink: '@nicoleweb'
    }
]

const Travelers = () => {
    return (
        <div className='travelers container section'>
            <div className="sectionContainer">
                <h2>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">
                    {
                        travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink}) => {
                            return(
                                // {/* Single passenger card */}
                                <div key={id} className="singleTraveler">
                                <img src={destinationImage} className='destinationImage' />
                                
                                <div className="travelerDetails">
                                    <div className="travelerPicture">
                                        <img src={travelerImage} className='travelerImage'/>
                                    </div>
                                    <div className="travelerName">
                                        <span>{travelerName}</span>
                                        <p>{socialLink}</p>
                                    </div>
                                </div>
        
                            </div>
                            )
                        })
                    }

                </div>
            </div>
            
        </div>
    )
}

export default Travelers;