import { useState } from 'react';

const photos = [
  { src: '../images/CastleView', caption: 'Caption for photo 1' },
  { src: '../images/CastleWall', caption: 'Caption for photo 2' },
];

function App() {
  const [index, setIndex] = useState(0);
  if ( index === 0 ){
    setIndex(5);
  }

  return (
    <div>
      <header>
        <p>
          The current index number is: {index}
        </p>
      </header>
    </div>
  );
}

export default App;
