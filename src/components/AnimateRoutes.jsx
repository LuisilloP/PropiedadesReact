import React from 'react';
import Home from '../pages/principal/home';
import Propiedades from '../pages/propiedades/Propiedades';
import Informacion from '../pages/informacion/Informacion';
import Login from '../pages/login/Login';
import PropiedadesSelected from '../pages/propiedades/PropiedadSelected';
import { Route, Routes, useLocation } from 'react-router-dom';
import PrincipalPageCrud from '../pages/CRUD/PrincipalPageCrud';
import CreateUpdateProperty from '../pages/CRUD/CreateUpdateProperty';
import { AnimatePresence } from 'framer-motion';
import Contact from '../pages/contact/Contact';
import ScrollToTop from '../lib/ScrollToTop';

const AnimateRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<ScrollToTop />
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/Propiedades" element={<Propiedades />} />
				<Route path="/Informacion" element={<Informacion />} />
				<Route path="/LoginAdmin" element={<Login />} />
				<Route path="/Contacto" element={<Contact />} />
				<Route
					path="/PrincipalPageCrud"
					element={<PrincipalPageCrud />}
				></Route>
				<Route
					path="/PrincipalPageCrud/:CrearPropiedad"
					element={<CreateUpdateProperty />}
				/>
				<Route
					path="/PrincipalPageCrud/:ModificarPropiedad/"
					element={<CreateUpdateProperty />}
				/>
				<Route
					path="/PropiedadSelected/:idPro"
					element={<PropiedadesSelected />}
				/>
				<Route
					path="*"
					element={
						<div>
							<h1>404 Soft</h1>
						</div>
					}
				></Route>
			</Routes>
		</AnimatePresence>
	);
};
{
	/* <Route path="/PrincipalPageCrud/*" element={<PrincipalPageCrud />}>
					<Route path="CrearPropiedad" element={<CreateProperty />} /> RUTAS ESPECIALES PARA NO CARGAR NUEVAMENTE LA PAGINA 
				</Route> */
}
export default AnimateRoutes;
