import React, { useEffect } from 'react';
import { useState } from 'react';
import UploadSvg from '../../../../public/img/Upload.svg';
import HouseSvg from '../../../../public/img/HouseInput.svg';
import FieldSvg from '../../../../public/img/Field-input.svg';
import { MessageCreateUpdateProperty } from '../../../components/SweetBtn';
import ValidatePropertyCreateUp from '../../../lib/validator';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard, EffectFade } from 'swiper';

const ValidateValues = {
	title: [false, ''],
	ubication: [false, ''],
	description: [false, ''],
	type: [false, ''],
	meters: [false, ''],
	toilets: [false, ''],
	beedrooms: [false, ''],
	light: [false, ''],
	water: [false, ''],
	images: [false, ''],
	price: [false, ''],
};
let Inputs = {
	title: '',
	ubication: '',
	description: '',
	type: 'default',
	meters: '',
	toilets: '',
	beedrooms: '',
	light: '',
	water: '',
	images: '',
	price: '',
};
const FormProperty = (obj) => {
	const { ActionCU, dataUpdate } = obj;
	const [input, SetInput] = useState(Inputs);
	const [SelectImages, SetSelectImages] = useState([]);
	const [ValidateInput, SetValidateInput] = useState(ValidateValues);
	const usertoken = localStorage.getItem('UserToken');
	const token = JSON.parse(usertoken).jwt;
	const ImgChanged = (event) => {
		const SelectFiles = event.target.files;
		const SelectFilesArray = Array.from(SelectFiles);

		const ImagesArray = SelectFilesArray.map((file) => {
			return URL.createObjectURL(file);
		});
		const name = event.target.name;

		console.log(SelectFilesArray);
		SetInput((values) => ({ ...values, [name]: SelectFiles }));
		SetSelectImages(ImagesArray);
	};
	useEffect(() => {
		if (dataUpdate !== null) {
			SetInput({
				['title']: dataUpdate.title,
				['ubication']: dataUpdate.ubication,
				['description']: dataUpdate.description,
				['type']: dataUpdate.type,
				['meters']: dataUpdate.meters,
				['beedrooms']: dataUpdate.beedrooms == null ? '' : dataUpdate.beedrooms,
				['toilets']: dataUpdate.toilets == null ? '' : dataUpdate.toilets,
				['light']: dataUpdate.light == null ? '' : dataUpdate.light,
				['water']: dataUpdate.water == null ? '' : dataUpdate.water,
				['price']: dataUpdate.price,
			});
		}
	}, []);
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		SetInput((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = async (event, token, data) => {
		event.preventDefault();
		const { type } = data;

		const validate = ValidatePropertyCreateUp(data, SetValidateInput);
		let form = document.getElementById('form');
		let formData = new FormData(form);
		if (validate === true) {
			if (type === 'casa') {
				formData?.delete('ligth');
				formData?.delete('water');
			}
			if (type === 'terreno') {
				formData?.delete('beedrooms');
				formData?.delete('toilets');
			}
			let id = 1;
			if (dataUpdate !== null) {
				id = dataUpdate._id;
			}
			const ActionAndId = [ActionCU, id];

			const MessageResponse = await MessageCreateUpdateProperty(
				token,
				data,
				formData,
				ActionAndId
			);
		}
	};
	const OnClickSet = (event) => {
		const name = event.target.name;
		SetValidateInput((names) => ({
			...names,
			[name]: [false, ''],
		}));
	};
	return (
		<div>
			<form className="form-property" id="form">
				<div className="form-title-direction">
					<div className="form-label-input">
						<label>Titulo</label>
						<input
							name="title"
							type="text"
							onChange={handleChange}
							onKeyDown={(event) => OnClickSet(event)}
							onClick={(event) => OnClickSet(event)}
							value={input.title || ''}
							className="input-form-style"
						></input>
						{ValidateInput?.title[0] && (
							<p className="error-message">{ValidateInput?.title[1]}</p>
						)}{' '}
					</div>
					<div className="form-label-input">
						<label>Ubicacion</label>
						<input
							type="text"
							name="ubication"
							onChange={handleChange}
							onKeyDown={(event) => OnClickSet(event)}
							onClick={(event) => OnClickSet(event)}
							value={input.ubication || ''}
							className="input-form-style"
						></input>
						{ValidateInput?.ubication[0] && (
							<p className="error-message">{ValidateInput?.ubication[1]}</p>
						)}{' '}
					</div>
				</div>
				<div className="form-description-type">
					<div className="form-label-input">
						<label>Descripcion</label>
						<textarea
							name="description"
							onChange={handleChange}
							onClick={(event) => OnClickSet(event)}
							onKeyDown={(event) => OnClickSet(event)}
							className="input-form-style textarea-form-style"
							value={input.description || ''}
						></textarea>
						{ValidateInput?.description[0] && (
							<p className="error-message">{ValidateInput?.description[1]}</p>
						)}{' '}
					</div>
					<div className="type">
						<div className="form-label-input">
							<label>Tipo</label>
							<select
								name="type"
								onChange={handleChange}
								onClick={(event) => {
									SetValidateInput((names) => ({
										...names,
										[event.target.name]: [false, ''],
										['meters']: [false, ''],
										['beedrooms']: [false, ''],
										['toilets']: [false, ''],
										['water']: [false, ''],
										['light']: [false, ''],
									}));
								}}
								onKeyDown={(event) => OnClickSet(event)}
								value={input.type || 'default'}
								className="select-form-style"
							>
								<option value="default" disabled>
									Seleccione un tipo
								</option>
								<option value="casa">Casa</option>
								<option value="terreno">Terreno</option>
							</select>
							{ValidateInput?.type[0] && (
								<p className="error-message">{ValidateInput?.type[1]}</p>
							)}{' '}
						</div>
						<div className="types">
							<div className="form-label-input ">
								<label>Metros</label>
								<input
									className="input-types-width input-form-style"
									onChange={handleChange}
									onKeyDown={(event) => OnClickSet(event)}
									name="meters"
									onClick={(event) => OnClickSet(event)}
									value={input.meters || ''}
									type="text"
								></input>
								{ValidateInput?.meters[0] && (
									<p className="error-message">{ValidateInput?.meters[1]}</p>
								)}{' '}
							</div>
							{input.type == 'casa' ? (
								<>
									<div className="form-label-input ">
										<label>Habitaciones</label>
										<input
											className="input-types-width input-form-style"
											onChange={handleChange}
											onClick={(event) => OnClickSet(event)}
											name="beedrooms"
											onKeyDown={(event) => OnClickSet(event)}
											value={input.beedrooms || ''}
											type="text"
										></input>
										{ValidateInput?.beedrooms[0] && (
											<p className="error-message">
												{ValidateInput?.beedrooms[1]}
											</p>
										)}{' '}
									</div>
									<div className="form-label-input ">
										<label>Baños</label>
										<input
											className="input-types-width input-form-style"
											onKeyDown={(event) => OnClickSet(event)}
											onChange={handleChange}
											onClick={(event) => OnClickSet(event)}
											name="toilets"
											value={input.toilets || ''}
											type="text"
										></input>
										{ValidateInput?.toilets[0] && (
											<p className="error-message">
												{ValidateInput?.toilets[1]}
											</p>
										)}{' '}
									</div>
								</>
							) : input.type == 'terreno' ? (
								<>
									<div className="form-label-input ">
										<label>Luz</label>
										<select
											className="input-types-width input-form-style form-select-LW"
											onChange={handleChange}
											onClick={(event) => OnClickSet(event)}
											onKeyDown={(event) => OnClickSet(event)}
											name="light"
											value={input.light || ''}
										>
											<option value="default" disabled>
												Seleccione
											</option>
											<option value="si">Si</option>
											<option value="no">No</option>
											<option value="factible">Factible</option>
										</select>
										{ValidateInput?.light[0] && (
											<p className="error-message">{ValidateInput?.light[1]}</p>
										)}{' '}
									</div>
									<div className="form-label-input">
										<label>Agua</label>
										<select
											className="input-types-width input-form-style  form-select-LW  "
											onChange={handleChange}
											onClick={(event) => OnClickSet(event)}
											onKeyDown={(event) => OnClickSet(event)}
											name="water"
											value={input.water || ''}
										>
											<option value="default" disabled>
												Seleccione
											</option>
											<option value="si">Si</option>
											<option value="no">No</option>
											<option value="factible">Factible</option>
										</select>
										{ValidateInput?.water[0] && (
											<p className="error-message">{ValidateInput?.water[1]}</p>
										)}{' '}
									</div>
								</>
							) : (
								<div></div>
							)}
						</div>
					</div>
				</div>
				<div className="form-upload-input">
					<label htmlFor="images" className="file-uploader">
						<img className="svg-inside-buttons" src={UploadSvg}></img> Subir
						Imagen
					</label>
					<input
						onChange={ImgChanged}
						onClick={(event) => OnClickSet(event)}
						name="images"
						id="images"
						type="file"
						className="hidden-input "
						onKeyDown={(event) => OnClickSet(event)}
						multiple
					></input>
					<div className="image-prevew">
						<Swiper
							mousewheel={true}
							keyboard={true}
							modules={[Navigation, Mousewheel, Keyboard, EffectFade]}
							//effect="fade"
							className="swiper-form"
							navigation={true}
						>
							{SelectImages &&
								SelectImages.map((img, index) => {
									return (
										<SwiperSlide key={img}>
											<div key={img} className="image">
												<img src={img} alt="img"></img>
											</div>
										</SwiperSlide>
									);
								})}
						</Swiper>
					</div>
					{ValidateInput?.images[0] && (
						<p className="error-message">{ValidateInput?.images[1]}</p>
					)}{' '}
				</div>
				<div className="value-price">
					<div className="form-label-input ">
						<label>Valor</label>
						<input
							className="input-types-width input-form-style"
							type="number"
							name="price"
							onChange={handleChange}
							onKeyDown={(event) => OnClickSet(event)}
							value={input.price || ''}
							onClick={(event) => OnClickSet(event)}
						></input>
						{ValidateInput?.price[0] && (
							<p className="error-message">{ValidateInput?.price[1]}</p>
						)}{' '}
					</div>

					<button
						type="submit"
						onClick={(event) => handleSubmit(event, token, input)}
						name="someName"
						className="btn-submit-form"
					>
						{input.type == 'house' ? (
							<div className="div-inside-btn">
								<img
									src={HouseSvg}
									className="svg-inside-buttons"
									alt="svgImage"
								></img>
								{ActionCU} Casa
							</div>
						) : input.type == 'place' ? (
							<div className="div-inside-btn">
								<img
									src={FieldSvg}
									className="svg-inside-buttons"
									alt="svgImage"
								></img>
								{ActionCU} Terreno
							</div>
						) : (
							<div className="div-inside-btn">{ActionCU} Propiedad</div>
						)}
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormProperty;
