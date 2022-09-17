import { Route, Routes } from 'react-router-dom';
import './scss/index.scss';
import HeaderNav from './layouts/headerNav.jsx';
import {} from './layouts/header.js';
import Home from './pages/principal/home';
// <ContenidoTextoImagen />
const Propiedades = () => (
	<div>
		<h1>Busqueda </h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio quae
			minus necessitatibus facilis accusantium officiis, commodi in nemo,
			aspernatur voluptas? Rem quae ullam placeat unde, cumque voluptates
			voluptatem dignissimos. Cumque, labore eaque. Quidem, quaerat. Adipisci
			magnam in delectus, iste facilis minus iure earum corrupti, nisi, quaerat
			laboriosam aperiam fugiat quam animi sed voluptates inventore culpa nihil
			obcaecati. Voluptates, ut. Eos a quisquam similique cumque! Soluta,
			tempore fuga veritatis repudiandae voluptatibus at distinctio, architecto
			exercitationem molestias nam voluptatum, eos minima officia ullam? Rem nam
			aliquam quod repellendus pariatur consequuntur ipsum. Quod cum fugit
			eveniet nam quo deleniti sequi quas vitae. Alias aperiam deserunt id
			delectus aliquid, omnis neque vitae fugit ipsam, eius quam dolorem! Facere
			sed enim rem at id. Architecto vero molestiae dolorem sint voluptas,
			exercitationem molestias doloremque dicta tenetur, corrupti quae. Quo
			officia quos impedit? Aut, nemo quam voluptas error sapiente veritatis,
			laborum quasi ullam cumque excepturi impedit! Sunt assumenda adipisci ex.
			Vitae ipsum dolores est, hic id odit aliquam tempore nesciunt vel
			corporis! Similique deserunt, numquam id sequi impedit repellendus ratione
			quod facere dolorem doloremque necessitatibus vitae. Temporibus aperiam,
			tenetur eveniet corrupti magnam eligendi doloribus, neque saepe, at ea
			fuga. Dignissimos, autem mollitia fugit dolorum nisi iste! Soluta, illo
			nisi ratione velit distinctio sit laudantium amet labore! Molestias quos
			in quis eveniet non, fugiat laborum facere cupiditate? Accusamus fugiat
			dolor illum perferendis labore a amet iste consequatur earum laboriosam
			sequi dolorum voluptas alias, corrupti velit. Deleniti, quibusdam. Neque
			nihil voluptatem, ea quidem illum ab commodi dignissimos dolorem iste
			beatae rerum labore consequuntur ipsa non magnam quam impedit vero quia
			sunt, quaerat fugit pariatur aliquam illo natus! Nobis. Numquam ex
			quaerat, voluptas placeat eaque nostrum quod eius excepturi mollitia
			incidunt qui sequi soluta, tempora delectus doloribus laboriosam harum in
			praesentium perferendis et eveniet modi laudantium. Minus, nemo obcaecati.
		</p>
	</div>
);

function App() {
	return (
		<div className="App">
			<HeaderNav></HeaderNav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Propiedades" element={<Propiedades />} />
				<Route path="*"></Route>
			</Routes>
		</div>
	);
}

export default App;
