import React from 'react';
import './image.scss'

const Block_Image = (props) => (
  <div className={`block ${props.blockWidth} block__image block__image--${props.imageAlignment}`}>
  <div class="imageWrapper">
  <img src={`${props.imageSrc}`} />
  </div>
  <div class="imageTextWrapper">
  <p class="imageTitle">{`${props.imageTitle}`}</p>
  <p class="imageDescription">{`${props.imageDescription}`}</p>
  <div class="imageLink"><a href={`${props.imageLink}`}>View Case Study</a></div>
  </div>
  {props.children}
  </div>
)

export default Block_Image
