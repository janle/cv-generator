import React from 'react';
import './SectionItem.scss';
import { SectionItemType } from '../../types/common';
import Pin from '../../assets/pin.svg';

const SectionItem: React.FC<SectionItemType> = (props) => {
    return (
        <section className="section-item">
            <div className="place">
                <p>{props.navn}</p>
                <p id="tidsperiode">{props.tidsperiode}</p>
            </div>

            <div className="details">
                <div className="header">
                    {props.url 
                        ? <a href={props.url}>{props.tittel}</a>
                        : <h2>{props.tittel}</h2>
                    }
                    <div className="location">
                        <img src={Pin} alt=""/>
                        <p>{props.lokasjon}</p>
                    </div>
                </div>
                {
                    props.beskrivelser && 
                    <ul>
                        {props.beskrivelser.map(beskrivelse => <li>{beskrivelse}</li>)}
                    </ul>
                }
            </div>
        </section>
    )
}

export default SectionItem;