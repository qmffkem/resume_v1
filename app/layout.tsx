import React from "react";
import './globals.css'
import { Inter } from 'next/font/google'

import Header from './components/layout/header'
import Footer from './components/layout/footer'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: `${"Jaeung Jang's Personal Website"}`,
	description: `${"Welcome to Jaeung Jang's personal website"}`,
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className}`} >
				<Header />
				<div className="flex flex-col overflow-hidden">
					<div className="">
						{children}
					</div>
					<div className="absolute w-[300px] h-[calc(100%-(100vh-60px))] bg-secondary z-[-1] top-[calc(100vh-60px)] left-[calc(50%-150px+400px)]"></div>
				</div>
				{/* <Footer /> */}
			</body>
		</html>
	)
}
