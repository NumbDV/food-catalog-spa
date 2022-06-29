import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
// import {About} from './pages/About'
import {Home} from './pages/Home'
// import {Contact} from './pages/Contact'
import { NotFound } from './pages/NotFound';
import {Category} from './pages/Category';
import { Recipe } from './pages/Recipe';

const App = () => {
	return <>
			<React.StrictMode>
				<Header/>

				<main className='container content'>
						<Routes>
							<Route path="/" element={<Home/>}/>
							{/* <Route path="/about" element={<About/>}/>
							<Route path="/contacts" element={<Contact/>}/> */}
							<Route path="/category/:name" element={<Category/>}/>
							<Route path="/meal/:id" element={<Recipe/>}/>
							<Route element={<NotFound/>}/>
						</Routes>
					
				</main>

				<Footer/>
			</React.StrictMode>
			
		</>
}

export default App;