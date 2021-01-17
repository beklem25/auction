import './App.css';
import Header from './Header/Header'
import Profile from './Profile/Profile'
import './Nav/Nav'
import Nav from "./Nav/Nav";
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom"
import Lot from "./Lots/Lot";


const App = () => {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-profile'>
                <Profile/>
                <Route path='/profile' component={Profile}/>
                <Route path='/dialogs' component={Dialogs}/>
                <Dialogs/>
                <Lot/>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
