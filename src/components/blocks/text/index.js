import React from 'react';
import './text.scss'

const Block_Text = (props) => (
  <div className={`block block__text ${props.blockWidth} ${props.blockPosition}`}>
  {props.children}
  </div>
)

export default Block_Text
