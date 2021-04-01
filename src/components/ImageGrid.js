import React from 'react';
import Masonry from 'react-masonry-component';
import aki from '../imgs/akili.png';
import and from '../imgs/Andela.png';
import asc from '../imgs/Ascent.jpg';

function ImageGrid() {
  return (
            <Masonry
                className={'gallery'}
                disableImagesLoaded={true}
                updateOnEachImageLoad={true}
            >
                <img src={aki}/>
                <img src={and}/>
                <img src={asc}/>
                <img src={asc}/>
                <img src={asc}/>
                <img src={and}/>
                <img src={asc}/>
            </Masonry>
  );
}
   
export default ImageGrid;