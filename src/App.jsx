import data from './data/data.json'
import baraban from './assets/Beline.png'
import star from './assets/star.png'
import Books from './components/Books'

import './App.css'

function App() {
  function hedBaraban() {
    console.log('worked');
  }
  function hendLocal() {
    localStorage.setItem('data' , JSON.stringify(data));
  }

  return (
    <>
      <div className='hero'>
        
        <div className="container hero__container">
          <a href="#">
            <img src={baraban} className="logo react" alt="React logo" />
          </a>
          <button onClick={hedBaraban} className='btn'>Rotate</button>
          <img onClick={hendLocal} className='star' src={star} alt="" />
        </div>
      </div>

     
    <div className="section container">
    {data.map(data => (
      <Books
        key={data.id}
        language={data.language}
        country={data.country}
        link={data.link}
        author={data.author}
        pages={data.pages}
        title={data.title}
        year={data.year}
      />
    ))}
  </div>
    </>
  )
}

export default App
