import React from 'react'

import PreviewCard from './PreviewCard'

import luxuryIcon from '../images/icon-luxury.svg'
import sedansIcon from '../images/icon-sedans.svg'
import suvsIcon from '../images/icon-suvs.svg'

const cards = [
  {
    image: sedansIcon,
    title: 'sedans',
    text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    bgClass: 'orange',
  },
  {
    image: suvsIcon,
    title: 'suvs',
    text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    bgClass: 'cyan',
  },
  {
    image: luxuryIcon,
    title: 'luxury',
    text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    bgClass: 'darkCyan',
  },
]

const App = () => (
  <>
    <h1>3 Column Preview Card Component</h1>
    <section className='container'>
      {cards.map((card, index) => (
        <PreviewCard {...card} key={index} />
      ))}
    </section>
  </>
)

export default App
