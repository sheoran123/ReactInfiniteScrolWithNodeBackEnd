
import './App.css';
import Images from './components/Images';

function App() {
  return (
    <div id="root">
  <div className="hero is-fullheight is-bold is-info">
    <div className="hero-body">
      <div className="container">
        <div className="header content">
          <h1 className="title is-1">
            Infinite Scroll Unsplash 
          </h1>
        </div>
        <Images /> 
        
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
