import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Blog from './views/Blog'
import RedirectPage from './views/RedirectPage'
import NotFound from './views/NotFound'

import Navbar from './Navbar'

const App = () => {
    return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/hakkimizda' element={<About />} />
				<Route path='/blog/:blogId/:commentId' element={<Blog />} />
				<Route path='/redirect' element={<RedirectPage />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
