import {BrowserRouter as Router, Route, Routes}from 'react-router-dom';
// import Home from './pages/Home';
// import Info from './pages/Info';
import Home from './pages/Home';

function App() {
  return (
    <Router>
    <div className="App">
    
      <div className="content">
      <Routes>
         <Route path="/" element={<Home />} />
          {/* <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound />
          </Route> */}
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
