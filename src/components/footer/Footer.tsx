import React from 'react';
import './Footer.scss';
import { FooterItem } from '../../types/common';

type props = {
    skills: FooterItem[],
    properties: FooterItem[],
    referances: string,
}

const Footer: React.FC<props> = (props) => {
    return (
        <section className="footer">
            <hr/>
            <div className="footer-container">
                <div>
                    <h1>Referanser</h1>
                    <p>{props.referances}</p>
                </div>
                <div>
                    <h1>Ferdigheter</h1>
                    {props.skills.map(skill => <p>{skill.navn}</p>)}
                </div>
                <div>
                    <h1>Egenskaper</h1>
                    {props.properties.map(property => <p>{property.navn}</p>)}
                </div>
            </div>
        </section>
    )
}

export default Footer;