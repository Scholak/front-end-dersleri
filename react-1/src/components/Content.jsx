import React from 'react'

const Content = ({active}) => {
  return (
		<main>
			{active === 'Anasayfa' && 'Anasayfa İçerik'}
			{active === 'Hakkımızda' && 'Hakkımızda İçerik'}
			{active === 'İletişim' && 'İletişim İçerik'}
		</main>
  )
}

export default Content
