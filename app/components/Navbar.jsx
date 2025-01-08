import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.navContainer}>
				<div className={styles.navContainerLeft}>
				<div className='nav-til'><Link href="/TIL">TIL</Link></div>
				<div className='nav-study'><Link href="/Study">STUDY</Link></div>
				<div className='nav-projects'><Link href="/Projects">PROJECTS</Link></div>
				</div>
				<div className={styles.navContainerRight}>
				<div className='nav-home'><Link href="/"><Image src="/magenta.png" alt="home" width={40} height={40} /></Link></div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar