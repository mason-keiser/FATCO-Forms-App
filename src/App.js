import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import NavCarousel from './navCarousel';

const App = () => {
  const [user, setUser] = useState({
      user_id: 9,
      user_first_name: 'Guest'
  });

  return (
      /*<Router>
          <Switch>
              <Route exact path='/' render={(props) => (<Landing {...props} setUser={setUser} user={user} nightMode={nightMode} setNightMode={setNightMode}/>)}/>
          </Switch>
      </Router>  */
      <div className="App">
        <div className="FormContainer">
          <NavCarousel/>
          <div className='gtsCont'>
            <button className="gtsButton">Go to summary</button>
          </div>
          <div className="FragmentContent">

          </div>
          <div className='buttonPanel'>
            <button className='backButton'>Back</button>
            <button className='nextButton'>Next</button>
            <button className='exitButton'>Exit</button>
          </div>
        </div>
      </div>
  )
}


export default App;
