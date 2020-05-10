import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import './App.scss';

function App() {
  const opacity = useSpring({ config: { duration: 2500 }, opacity: 1, from: { opacity: 0 }, delay: 3200});
  const animate1 = useSpring({ config: { duration: 2500 }, from: {marginTop: -2000}, to: { marginTop: 0 }, delay: 500 });
  const animate2 = useSpring({ config: { duration: 1500 }, from: {marginLeft: -3500}, to: { marginLeft: 0 }, delay: 200 });

  return (
    <div className="App">
      <header className="App-header">
          <animated.div className="happyday">Happy</animated.div>
          <animated.div className="mother" style={animate1}>Mother's</animated.div>
          <animated.div className="happyday" style={opacity}>Day!</animated.div>
        <animated.div className="heart-shape" style={animate2}></animated.div>
      </header>
    </div>
  );
}

export default App;
