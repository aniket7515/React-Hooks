
import './App.css';
import ReducerTutorial from './ReducerTutorial';
import StateTutorial from './StateTutorial'
import EffectTutorial from './EffectTutorial'
import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
// import HookMouse from './components/HookMouse';
// import IntervalHookCounter from './components/IntervalHookCounter';
import React from 'react'
import DataFetching from './components/DataFetching';

import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';

export const UserContext=React.createContext()
export const ChannelContext= React.createContext()

function App() {
  return (
    <div className="App">
      {/* <StateTutorial/>
      <ReducerTutorial/>
      <EffectTutorial/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
           <ComponentC/>


        </ChannelContext.Provider>
        
      </UserContext.Provider> */}
      <CounterOne/>
     
    </div>
  );
}

export default App;
