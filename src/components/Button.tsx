import React from 'react'

import '../styles/Button.scss'

interface Button {
  textClass: string
}

const Button = ({ textClass }: Button) => (
  <button className={`Button Button--${textClass}`}>Learn More</button>
)

export default Button
