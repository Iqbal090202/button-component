import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css"

const loading = (
    <div className="pt-3 text-center">
      <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)
  
const TheLayout = React.lazy(() => import('./containers/TheLayout'))

function App() {
    return (
        <BrowserRouter>
            <React.Suspense fallback={loading}>
                <Switch>
                    <Route path="/" name="Home" render={props => <TheLayout {...props} />} /> 
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    );
}

export default App;