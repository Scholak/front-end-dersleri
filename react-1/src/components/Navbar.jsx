import React, { useState } from 'react'

const Navbar = ({active, textColor}) => {
  return (
		<nav>
			<ul>
				<li style={{ color: textColor }}>Anasayfa</li>
				<li>Hakkımızda</li>
				<li>İletişim</li>
			</ul>
		</nav>
  )
}

export default Navbar
