import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {About} from './pages/About'
import {Home} from './pages/Home'
import {Contact} from './pages/Contact'
import { NotFound } from './pages/NotFound';

const App = () => {
	return <>
			<Header/>

			<main className='container content'>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/contacts" element={<Contact/>}/>
						<Route element={<NotFound/>}/>
					</Routes>
				
			</main>

			<Footer/>
		</>
}

export default App;