import React from 'react';
import './Section.scss';
import { SectionItemType } from '../../types/common';
import SectionItem from '../sectionItem/SectionItem';

type props = {
    title: string
    sectionItems?: SectionItemType[],
    children?: React.ReactNode
}

const Section: React.FC<props> = (props) => {
    return (
        <section className="section">
            <div className="section-title">
                <h1>{props.title}</h1>
                <hr/>
            </div>

            {props.sectionItems 
                ? props.sectionItems.map(item => <SectionItem {...item}/>)
                : props.children
            }
        </section>
    )
}

export default Section;