import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navb from './Components/Navb.js';
import Cards from './Components/Cards.js';
import Sideb from './Components/Sideb.js';

function App() {
  let arr=[2]
  for (let index = 0; index < 10 ; index++) {
     arr[index] =<Cards />;
    
  }
  return (
    <div className="App">
     <Navb />
     <Sideb />
     <div class="cards-container">
     
     <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>{
  arr.map(el => 
     <p  style={{margin:"20px"}}>{el}</p>
  )
}
</div>

     </div>
    </div>
  );
}

export default App;
