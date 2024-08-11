import { useState } from 'react';
import { photos } from './image_dict.js'

function App() {
  const [index, setIndex] = useState(0);
  const onClickLeft = () => {
    if (index == 0) {
      setIndex(photos.length - 1)
    } else {
      setIndex(index - 1)
    }
  };
  const onClickRight = () => {
    if (index == photos.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  };

  return (
    <div className = "container container-anim">
        <div className = "image-txt-container">
            <div className = "nav-button-container content-anim">
                <img src='../../assets/left-arrow.png' className = "nav-button" style={{'left': '10px'}} alt="left photo navigation button" onClick={onClickLeft}/>
                <img src='../../assets/right-arrow.png' className = "nav-button" style={{'float' : 'right', 'right': '10px'}} alt="right photo navigation button" onClick={onClickRight}/>
            </div>
            <img src={photos[index].src} className = {photos[index].class} style={{'--end-opacity': 'var(--opaque)'}} alt={photos[index].alt}/> 
            <div className = "text-block content-anim">
                <h4>{photos[index].heading}<span style={{'float' : 'right'}}>{photos[index].date}</span></h4>
                <p>{photos[index].caption}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
