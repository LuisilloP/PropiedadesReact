import TextoIntro from './principaltext.jsx';
import ContenedorPropiedades from './contenedorPropiedades.jsx';
import { motion } from 'framer-motion';
const Home = () => {
	return (
		<div>
			<TextoIntro></TextoIntro>
			<ContenedorPropiedades></ContenedorPropiedades>
			<div className="contenedor separator"></div>
		</div>
	);
};
export default Home;
