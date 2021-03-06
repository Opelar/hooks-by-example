import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import AccordionScreen from './components/accordion';
import FormLibraryScreen from './components/form-library';
import WindowWidthScreen from './components/window-width';
import TodoList from './components/todo-list';
import SortableScreen from "./components/sortable";

function App() {
  return (
    <Router>
      <div className="main">
        <nav className="sidebar">
          <div className="item">
            <Link className="link" to="/accordion">
              Accordion
            </Link>
            <span>
              Panels scroll into view if not fully visible when toggled.
              Using <pre>useEffect</pre>, <pre>useRef</pre>.
            </span>
          </div>
          <div className="item">
            <Link className="link" to="/form-library">
              Extremely basic form validation library
            </Link>
            <span>Pass state deeper using context, then read it using <pre>useContext</pre>. Heavily inspired by <pre>formik</pre>.</span>
          </div>
          <div className="item">
            <Link className="link" to="/window-width">
              Window width
            </Link>
            <span>Multiple <pre>useEffects</pre> are allowed.</span>
          </div>
          <div className="item">
            <Link className="link" to="/todo-list">
              Todo-list
            </Link>
            <span>Look mum, <pre>useReducer</pre> is almost Redux!</span>
          </div>
          <div className="item">
            <Link className="link" to="/sortable">
             Sortable
            </Link>
          </div>
        </nav>

        <div className="content">
          <Route path="/" exact component={() => <div>use navigation on the left</div>}/>
          <Route path="/accordion" component={AccordionScreen}/>
          <Route path="/form-library" component={FormLibraryScreen}/>
          <Route path="/window-width" component={WindowWidthScreen}/>
          <Route path="/todo-list" component={TodoList}/>
          <Route path="/sortable" component={SortableScreen}/>
        </div>
      </div>
    </Router>
  )
}

export default App;
