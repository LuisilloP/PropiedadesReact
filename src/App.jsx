import './scss/index.scss';
import HeaderNav from './layouts/headerNav.jsx';
import Footer from './layouts/footer.jsx';
import {} from './layouts/header.js';

import AnimateRoutes from './components/animateRoutes.jsx';

// <ContenidoTextoImagen />

function App() {
	return (
		<div className="App">
			<HeaderNav></HeaderNav>
			<AnimateRoutes />
			<Footer></Footer>
		</div>
	);
}

export default App;
