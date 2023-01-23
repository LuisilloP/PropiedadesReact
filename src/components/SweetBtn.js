import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {
	DeleteProperties,
	CreateProperties,
	UpdateProperties,
} from '../lib/axios';
const MySwal = withReactContent(Swal);
export const MessageDeleteProperty = async (token, data) => {
	let val = false;
	await MySwal.fire({
		title: 'Estas Seguro de Eliminar?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, Elimina.',
		cancelButtonText: 'No.',
	}).then(async (result) => {
		if (result.isConfirmed) {
			try {
				await DeleteProperties(token, data).then((res) => {
					if (res.status == 200) {
						val = true;
					}
				});
			} catch (error) {
				console.error(error);
			}
		}
	});
	return val;
};
export const MessageCreateUpdateProperty = async (
	token,
	data,
	formData,
	ActionAndId
) => {
	let val = false;
	const [ActionCU, id] = ActionAndId;
	const {
		title,
		ubication,
		description,
		meters,
		type,
		light,
		water,
		toilets,
		beedrooms,
		price,
	} = data;
	await MySwal.fire({
		title: `Valide los datos antes de ${ActionCU}`,
		html: ` titulo: ${title}<br>
				ubicacion: ${ubication}<br>
				descripcion: ${description}<br>
				tipo: ${type}<br>
				${
					type == 'casa'
						? `baños: ${toilets} <br>habitaciones: ${beedrooms} <br>`
						: `luz: ${light} <br>agua: ${water} <br>`
				}
				metros: ${meters}<br>
				precio: ${price}<br>
				
		`,
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: `${ActionCU} propiedad`,
		cancelButtonText: 'Editar datos',
	}).then(async (result) => {
		if (result.isConfirmed) {
			try {
				if (ActionCU === 'Crear') {
					await CreateProperties(token, formData, type).then((res) => {
						if (res.status == 200) {
							val = true;
							MySwal.fire({
								title: 'Propiedad Creada',
								icon: 'success',
							});
						}
					});
				} else {
					formData.append('_id', id);
					await UpdateProperties(token, formData, type).then((res) => {
						if (res.status == 200) {
							val = true;
							MySwal.fire({
								title: 'Propiedad Actualizada',
								icon: 'success',
							});
						}
					});
				}
			} catch (error) {
				console.error(error);
			}
		}
	});
	return val;
};
