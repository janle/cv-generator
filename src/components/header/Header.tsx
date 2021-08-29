import React from 'react';
import './Header.scss';
import Email from '../../assets/email.svg';
import Phone from '../../assets/phone.svg';
import House from '../../assets/house.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';

type props = {
    fornavn: string,
    etternavn: string,
    fodselsdato: string,
    yrke: string,
    telefon: string,
    epost: string,
    adresse: string,
    linkedIn: {
        url: string,
        text: string
    } | null,
    github: {
        url: string,
        text: string
    } | null
}

const Header: React.FC<props> = (props) => {
    return (
        <header className="header">
            <img className="portrait" src={process.env.PUBLIC_URL + '/images/portrait.png'} alt={''}/>
            <div className="about-me">
                <p className="navn">{props.fornavn} {props.etternavn}</p>
                <p className="yrke">{props.yrke}</p>
                <p>Fødselsdato: {props.fodselsdato}</p>
            </div>
            <div className="details">
                <div>
                    <p><a href={`tel:+47${props.telefon}`}>+47 {props.telefon}</a></p>
                    <img src={Phone} alt=""/>
                </div>
                <div>
                    <p><a href={`mailto:${props.epost}`}>{props.epost}</a></p>
                    <img src={Email} alt=""/>
                </div>
                <div>
                    <p>{props.adresse}</p>
                    <img src={House} alt=""/>
                </div>
                <div>
                    <p><a href={props.linkedIn?.url}>{props.linkedIn?.text}</a></p>
                    <img src={LinkedIn} alt=""/>
                </div>
                <div>
                    <p><a href={props.github?.url}>{props.github?.text}</a></p>
                    <img src={Github} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;