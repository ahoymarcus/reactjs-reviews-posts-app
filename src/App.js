// https://www.youtube.com/watch?v=ly3m6mv5qvg
// 0 hr 57' 00 ''
import React from 'react';

import Review from './Review';
import { FaGithubSquare } from 'react-icons/fa';



function App() {
  return (
		<main>
			<section className="container">
				<div className="title">
					<h2>our reviews</h2>
					<div className="underline"></div>
				</div>
				<Review />
				
			</section>

		</main>
		
	);
}



export default App;


