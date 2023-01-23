import TextoIntro from './principaltext.jsx';
import ContenedorPropiedades from './contenedorPropiedades.jsx';
import { motion } from 'framer-motion';
const Home = () => {
	window.scrollTo(0, 0);
	return (
		<div>
			<TextoIntro></TextoIntro>
			<ContenedorPropiedades cant={2}></ContenedorPropiedades>
			<div className="contenedor separator"></div>
		</div>
	);
};
export default Home;
