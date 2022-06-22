import './App.css';
import Flights from './Components/Flights';
import BottomAdds from './Components/BottomAdds';
import Tempreature from './Components/Tempreature.js';
import Time from './Components/Time.js';

function App() {
  return (
    <div className="App">
<Time/>
<BottomAdds/>
<div className='center_data'>
<Tempreature/>
{/* <Flights/> */}
</div>
    </div>

  );
}

export default App;
