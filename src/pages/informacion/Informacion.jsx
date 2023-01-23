import React from 'react';
import ImageInfo from '../../../public/img/infoImage.png';
function Informacion() {
	return (
		<div className="min-height-t ">
			<div className="layer-three spacer"></div>
			<div className="contenedor">
				<div className="info">
					<div className="info-title-text">
						<h1>Informacion</h1>
						<p>
							Quisque elementum porttitor justo, at gravida quam tincidunt eget.
							Vivamus lectus nisl, scelerisque suscipit tincidunt a, aliquam a
							tellus. Mauris et aliquet ligula. Sed id felis nec lacus
							condimentum tincidunt. Phasellus vel tellus lacinia, condimentum
							leo pharetra, scelerisque lectus. Pellentesque lacus nunc,
							vehicula vitae mauris a, consequat hendrerit metus. Mauris mattis
							id ante a viverra.
						</p>
					</div>
					<div className="info-text-image">
						<div className="info-textTwo">
							<h1>Vendemos Propiedades</h1>
							<p>
								Lat veritatis optio neque, ipsa cum dolorum, adipisci soluta,
								incidunt non placeat possimus. Neque, molestiae? Facere, quidem
								quisquam doloribus provident in dignissimos ipsam fugit, nobis
								vero ea laborum. Et, dolore delectus repellendus, perspiciatis
								ex sequi eaque iure sapie tur amet, ducimus ad ipsam numquam
								nemo itaque fuga. Blanditiis esse minus autem eaque, commodi
								tenetur animi distinctio! Nemo vel quos iure fugiaaiores quas
								repudiandae pariatur ea ipsa facere illo laudantium labore!
								Magni cumque cum in.
							</p>
						</div>
						<img className="image-info" src={ImageInfo}></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Informacion;
