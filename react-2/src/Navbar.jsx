import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
		<nav>
			<ul>
				<li>
					<NavLink to='/'>Anasyfa</NavLink>
				</li>
				<li>
					<NavLink to='/hakkimizda'>Hakkımızda</NavLink>
				</li>
				<li>
					<NavLink to='/blog/1/4'>1 numaralı blog</NavLink>
				</li>
				<li>
					<NavLink to='/redirect'>yönlendirme örneği</NavLink>
				</li>
			</ul>
		</nav>
  )
}

export default Navbar
