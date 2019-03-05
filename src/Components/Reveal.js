import React from 'react'
import { Image, Reveal } from 'semantic-ui-react'

const ImageReveal = ({image, info, direction}) => {
  return (
    <div>
        <Reveal animated={direction}>
            <Reveal.Content visible>
                <Image circular size='medium' src={image} />
            </Reveal.Content>
            <Reveal.Content hidden>
                <Image circular size='medium' src={info} />
            </Reveal.Content>
        </Reveal>
    </div>  
    )
}

export default ImageReveal