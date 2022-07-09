// Import data

// Import components
import './App.css';
import {useState, useEffect} from 'react';
import Gallery from './Gallery';
import ButtonsBar from './ButtonsBar';


function App(){
  let [score, setScore] = useState(0)
  let [data, setData] = useState({})
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }
  useEffect(() => {
    document.title='Welcome to ArtWorld!'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artId])
  return (
    <div>
      <h1>Art Gallery</h1>
      <div className="App">
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
        <ButtonsBar handleIterate = {handleIterate}/>
      </div>
    </div>
  );
}

export default App;