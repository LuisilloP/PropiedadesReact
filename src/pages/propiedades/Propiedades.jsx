import { useState, useEffect } from 'react';
import { Slider } from '@mui/material';
import ContenedorPropiedades from '../principal/contenedorPropiedades';

const Propiedades = () => {
	const [value, setValue] = useState([1, 25]);
	const [bathroom, setBathroom] = useState([1, 5]);
	const [beedrooms, setBeedrooms] = useState([1, 10]);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	useEffect(() => {});
	console.log('renders');
	const [isChecked, setIsChecked] = useState({ house: false, land: false });
	const followersMarks = [
		{
			value: 1,
			scaledValue: 1000000,
			label: '1M',
		},
		{
			value: 10,
			scaledValue: 10000000,
			label: '10M',
		},
		{
			value: 20,
			scaledValue: 20000000,
			label: '20M',
		},
		{
			value: 35,
			scaledValue: 35000000,
			label: '35M',
		},
		{
			value: 50,
			scaledValue: 50000000,
			label: '50M+',
		},
	];

	return (
		<div className="min-height-t ">
			<div className="layer-two spacer"></div>
			<div className="property-page ">
				<h1>Propiedades</h1>
				<div className="property-filter">
					<div className="filter">
						<h2>Filtro</h2>
						<div className="check-type">
							<p>Tipo</p>
							<label>
								<input
									type="checkbox"
									name="house"
									onChange={(event) => {
										const name = event.target.name;
										setIsChecked((types) => ({
											...types,
											[name]: !isChecked.house,
										}));
									}}
								/>
								<svg
									className={`checkbox ${
										isChecked.house ? 'checkbox--active' : ''
									}`}
									aria-hidden="true"
									viewBox="0 0 15 11"
									fill="none"
								>
									<path
										d="M1 4.5L5 9L14 1"
										strokeWidth="1.5"
										stroke={isChecked.house ? '#fff' : 'none'}
									/>
								</svg>
								Casas
							</label>
							<label>
								<input
									type="checkbox"
									name="land"
									onChange={(event) => {
										const name = event.target.name;
										setIsChecked((types) => ({
											...types,
											[name]: !isChecked.land,
										}));
									}}
								/>
								<svg
									className={`checkbox ${
										isChecked.land ? 'checkbox--active' : ''
									}`}
									aria-hidden="true"
									viewBox="0 0 15 11"
									fill="none"
								>
									<path
										d="M1 4.5L5 9L14 1"
										strokeWidth="1.5"
										stroke={isChecked.land ? '#fff' : 'none'}
									/>
								</svg>
								Terrenos
							</label>
						</div>
						{isChecked.house ? (
							<div className="type-house">
								<div className="rooms">
									<p>Habitaciones</p>
									<Slider
										aria-label="Temperature"
										defaultValue={30}
										size="small"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={10}
									/>
								</div>
								<div className="bathrooms">
									<p>Baños</p>
									<Slider
										aria-label="Temperature"
										defaultValue={30}
										size="small"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={10}
									/>
								</div>
							</div>
						) : (
							<></>
						)}

						{isChecked.land ? (
							<div className="type-land">
								<label className="light">
									Luz
									<select name="" id="">
										<option>cualquiera</option>
										<option>si</option>
										<option>no</option>
										<option>factible</option>
									</select>
								</label>
								<label className="water">
									{'Agua '}
									<select name="" id="">
										<option>cualquiera</option>
										<option>si</option>
										<option>no</option>
										<option>factible</option>
									</select>
								</label>
							</div>
						) : (
							<></>
						)}
						<div>
							<p>Precio</p>
							<Slider
								value={value}
								min={0}
								step={null}
								max={50}
								size="small"
								marks={followersMarks}
								onChangeCommitted={handleChange}
								valueLabelFormat={(value) => value * 1000000}
								valueLabelDisplay="auto"
							/>
							<p>
								Valor: ${value[0] * 1000000}-${value[1] * 1000000}
							</p>
						</div>
					</div>
					<div className="property-container">
						<ContenedorPropiedades cant={9}></ContenedorPropiedades>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Propiedades;
