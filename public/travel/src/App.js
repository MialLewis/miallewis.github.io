import { useState } from 'react';

const photos = [
  { src: '../../images/CastleView', heading: 'Pena Palace, Sintra', date: '01/10/2023', caption: 'View from Castelo dos Mouros', alt: 'View of Pena Palace, Sintra' },
  { src: '../../images/CastleWall', heading: 'Castelo dos Mouros, Sintra', date: '01/10/2023', caption: 'Castle walls', alt: 'Walls of Castelo dos Mouros' },
];

function App() {
  const [index, setIndex] = useState(0);
  if ( index === 0 ){
    setIndex(1);
  }

  return (
    <div className = "container container-anim">
        <div className = "image-txt-container">
            <img src={photos[index].src} className = "blog-img-ls content-anim" style={{'--end-opacity': 'var(--opaque)'}} alt={photos[index].alt}/> 
            <div className = "text-block content-anim">
                <h4>{photos[index].heading}<span style={{'float' : 'right'}}>{photos[index].date}</span></h4>
                <p>{photos[index].caption}</p>
            </div>
        </div>
    </div>
  );
}

export default App;
