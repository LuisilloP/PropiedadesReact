import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from '../components/navLink.jsx';
import ImageHeader from '../../public/img/propiedadfondo.jpg';

{
	/* <div className="contenedor centra_div estilo_txt_imagen">
			<h1 className="margin_0">¿Buscas una Propiedad?</h1>
			<h3>Nosotros te ayudamos!!</h3>
		</div> */
}
const HeaderNav = () => {
	const [stateSvg, setStateSvg] = useState(false);
	const [transition, Settransition] = useState('');
	const [portadaImg, SetPortadaImg] = useState(false);
	const location = useLocation();
	const clickSvg = () => {
		setStateSvg((stateSvg) => !stateSvg);
		Settransition('transition');
	};
	let toogleCheck = stateSvg ? 'active ' : '';

	window.addEventListener('resize', () => {
		if (window.screen.width < 1060) {
			setStateSvg(false);
			Settransition('');
		}
	});
	useEffect(() => {
		if (location.pathname == '/') {
			SetPortadaImg(true);
			//console.log(portadaImg);
		} else {
			SetPortadaImg(false);
			//console.log(portadaImg);
		}
	}, [location]);

	let tooglePortadaImg = portadaImg ? '' : 'header_default';
	let fondoHeaderNormal = portadaImg ? '' : 'fondo-headerBlack';
	return (
		<>
			<section className={tooglePortadaImg}>
				<div className={`fondo-header ${fondoHeaderNormal}`}>
					<header>
						<div>
							<h1 className="tituloNav border_wave">
								<NavLink
									to="/"
									className={(isActive) =>
										'tituloNav-a' + (!isActive ? ' unselected' : '')
									}
								>
									PROPIEDADES
								</NavLink>
							</h1>
							<h1 className="tituloNav wave">
								<NavLink
									to="/"
									className={(isActive) =>
										'tituloNav-a' + (!isActive ? ' unselected' : '')
									}
								>
									PROPIEDADES
								</NavLink>
							</h1>
						</div>
						<button className="boton-svg" onClick={clickSvg}>
							<svg
								className="svg"
								fill="#000000"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24px"
								height="24px"
							>
								<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
							</svg>
						</button>
						<nav className={`nav ${toogleCheck} ${transition}`}>
							<ul className="ul">
								<li className="li">
									<NavLink to="/" className="">
										Inicio
									</NavLink>
								</li>
								<li className="li">
									<NavLink to="Propiedades" className="">
										Propiedades
									</NavLink>
								</li>
								<li className="li">
									<NavLink to="Informacion" className="Informacion">
										Informacion
									</NavLink>
								</li>
								<li className="li">
									<NavLink to="Contacto" className="contacto">
										Contacto
									</NavLink>
								</li>
							</ul>
						</nav>
					</header>
				</div>
				<img
					src={ImageHeader}
					className={`${portadaImg ? 'portadaImg' : 'display-none'}`}
				></img>
			</section>
		</>
	);
};
export default HeaderNav;
