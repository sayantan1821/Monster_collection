import React from 'react';
import './card-list.style.css';
import { Card } from '../card/card.component';

export const CardList = props => (
    <div className='card-list'>
    
    {props.monsters.map(mon => (
        <Card key = {mon.id} monster={mon} />
    ))}    
    </div>
    
);