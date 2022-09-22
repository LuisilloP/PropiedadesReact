import React from 'react';
import Home from '../pages/principal/home';
import Propiedades from '../pages/propiedades/Propiedades';
import Informacion from '../pages/informacion/Informacion';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

const AnimateRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/Propiedades" element={<Propiedades />} />
				<Route path="/Informacion" element={<Informacion />} />
				<Route path="*"></Route>
			</Routes>
		</AnimatePresence>
	);
};
export default AnimateRoutes;
