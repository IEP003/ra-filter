import React, { Component, useEffect, useState } from 'react'
import { cards } from '../cards'
import { Toolbar } from '../Toolbar/Toolbar';
import { Card } from '../Card/Card';

export function Portfolio() {
    const [selected, setSelected] = useState('All');
    const [card, setCard] = useState(cards);

    const onSelectFilter = (filter) => {
      setSelected(filter)
    };

    useEffect(() => {
      if(selected === 'All'){
        setCard(cards);
      } else {
        setCard(cards.filter((card) => card.category === selected));
      }
    }, [selected])

    return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <Card card={card} />
    </>)
}
