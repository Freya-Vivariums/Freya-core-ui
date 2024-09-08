/*
 *  Edgeberry UI
 *  User interface for the Edgeberry device application.
 * 
 *  Copyright 2024 Sanne 'SpuQ' Santens
 * 
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see <https://www.gnu.org/licenses/>.
 * 
 */


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/Navbar';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <NavigationBar />
        <br/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login user={null} onLogin={()=>{}}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
