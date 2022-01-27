import React from 'react'

import Button from './Button'

import '../styles/PreviewCard.scss'

interface PreviewCard {
  image: string
  title: string
  text: string
  bgClass: string
}

const PreviewCard = ({ image, title, text, bgClass }: PreviewCard) => (
  <div className={`PreviewCard PreviewCard--${bgClass}`}>
    <img src={image} alt={title} />
    <h2>{title}</h2>
    <p>{text}</p>
    <Button textClass={bgClass} />
  </div>
)

export default PreviewCard
