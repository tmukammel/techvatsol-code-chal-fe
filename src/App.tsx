import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './views/pages/events.list.page';
import Edit from './views/pages/events.edit.page';

export default function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<List />} />
					<Route path="/edit" element={<Edit />} />
				</Routes>
			</div>
		</Router>
	);
}
