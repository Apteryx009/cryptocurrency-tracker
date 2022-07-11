import {BrowserRouter, Route} from 'react-router-dom'
import "./App.css"; 
import Header from './components/Header'
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';

function App() {
    return (
    <BrowserRouter>
     <div>
        <Header />
        <Route path='/' component={Homepage} exact/>
        <Route path='/coins/:id' component={CoinPage}/> 

    </div>
    </BrowserRouter>
    )
}

export default App;