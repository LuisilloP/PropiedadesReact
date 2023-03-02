import React from 'react';
import SN_WSP from '../../public/iconos/redes/whatsapp.png';
import SN_FACEBOOK from '../../public/iconos/redes/facebook.png';
import SN_GITHUB from '../../public/iconos/redes/github.png';
import SN_IG from '../../public/iconos/redes/instagram.png';
import NUMBER from '../../public/iconos/telefono.png';
import MAIL from '../../public/iconos/correo.png';
import LOCATION from '../../public/iconos/direccion.png';
const Footer = () => {
	return (
		<div className="Footer-principal">
			<div className="contenedor-footer">
				<div>
					<h1>Logo</h1>
					<div>
						<ul className="ul-footer">
							<li>
								<a href="" className="subrayado">
									Principal
								</a>
							</li>
							<li>
								<a href="" className="subrayado">
									Informacion
								</a>
							</li>
							<li>
								<a href="" className="subrayado">
									Propiedades
								</a>
							</li>

							<li>
								<a href="" className="subrayado">
									Contacto
								</a>
							</li>
						</ul>
						<small>&copy; Copyright 2022, LPA Develloper</small>
					</div>
				</div>

				<div>
					<h1>Nosotros</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Consequuntur sodio quos perferendis a. Harum recusandae Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Culpa soluta
						praesentium blanditiis quisquam a, doloremque sed dolores iure!
						Itaque delectus explicabo voluptatem doloremque necessitatibus qu
					</p>
				</div>
				<div className="footer-contact">
					<h1>Contacto</h1>
					<div className="contact-logo">
						<img src={NUMBER} className="logo" />
						<p>+569 987654321</p>
					</div>
					<div className="contact-logo">
						<img src={MAIL} className="logo" />
						<p>correo@correo.com</p>
					</div>
					<div className="contact-logo">
						<a
							href="https://goo.gl/maps/yfTtYABg1tY7wh867"
							className="contact-logo"
							target="_blank"
						>
							<img src={LOCATION} className="logo" />
							<p>Municipalidad de Ovalle - Carmen, Ovalle</p>
						</a>
					</div>
				</div>
			</div>
			<div className="redes-sociales">
				<h2>Siguenos</h2>
				<div className="contenedor redes-sociales-logos">
					<img src={SN_FACEBOOK} className="logo-redes"></img>
					<img src={SN_IG} className="logo-redes"></img>
					<img src={SN_WSP} className="logo-redes"></img>
					<img src={SN_GITHUB} className="logo-redes"></img>
				</div>
			</div>
		</div>
	);
};

export default Footer;
