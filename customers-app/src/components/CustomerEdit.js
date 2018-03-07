import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form'
import { setPropsAsInitial } from '../helpers/setPropsAsInitial'
import CustomersActions from './CustomersActions'
import { Prompt } from 'react-router-dom'


const isNumber = value => (
	isNaN(Number(value)) && 'El campo debe ser numero'
)

const validate = values => {
	const error = {}

	if(!values.name) {
		error.name = 'EL campo nombre es requerido'
	}

	if(!values.dni) {
		error.name = 'El Dni es un campo obligatorio'
	}

	return error
}

const MyField = ({input, meta, type, label, name}) => (
	<div>
		<label htmlFor={name}>{label}</label>
		<input {...input} type={!type ? 'text' : type}/>
		{
			meta.touched && meta.error && <span>{meta.error}</span>
		}
	</div>
)
const toNumber = value => value && Number(value)

const toUpper = value => value && value.toUpperCase()
const toLower = value => value && value.toLowerCase()
const onlyGrow = (value,previusValue, values) =>
	value && (!previusValue ? value : (value > previusValue ? value : previusValue))


const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack, pristine, submitSucceeded}) => {
	return (
		<div>
			<h2>Edición del cliente</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<Field
						name='name'
						component={MyField}
						label='Nombre'
						parse={toUpper}
						format={toLower}
					/>

					<Field
						name='dni'
						component={MyField}
						label='DNI'/>

					<Field
						name='age'
						component={MyField}
						type='number'
						validate={isNumber}
						normalize={onlyGrow}
						label='Edad'
						parse={toNumber}
					/>

					<CustomersActions>
						<button type='submit' disabled={pristine || submitting}>Aceptar</button>
						<button type='button' onClick={onBack} disabled={submitting}>Cancelar</button>
					</CustomersActions>
					<Prompt when={!pristine && !submitSucceeded} message='Se perderán los datos si continua'>

					</Prompt>
				</div>
			</form>
		</div>


	)
}


CustomerEdit.prototype = {
	name: PropTypes.string,
	dni: PropTypes.string,
	age: PropTypes.number,
	onBack: PropTypes.func.isRequired
}
const CustomerEditForm = reduxForm({
	form: 'CustomerEdit',
	validate
})(CustomerEdit)

export default setPropsAsInitial(CustomerEditForm)
