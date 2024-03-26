
import './App.css';
import { BusinessList } from './BusinessList';
import { SearchFor } from './search';
function App() {
  return (
    <div className="App">
      <div id="top">ravenous</div>
      <div id="headerimage">
        
        <div id="Search">
          <div id="upper">
            < button id="headerlink">Best Match</button>
            < button id="headerlink">Highest Rated</button>
            < button id="headerlink">Most Reviewed</button>
            <hr color='white'></hr>
            </div>
          <input id= "BusinessSearch" type='text' placeholder='Business Search' ></input>
          <input id="location" type='text' placeholder='Location'></input>
          <button type='submit' id='itemSubmit'>Lets Go!</button>
        </div>

      </div>
      <div id="content">
          <BusinessList />
      </div>
    </div>
  );
}

export default App;
