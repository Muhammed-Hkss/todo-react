import React from 'react'
import cls from './FormInput.module.scss'

const FormInput = ({
	inputType,
	placeholder,
	register,
	registerName,
	errors,
}) => {

	// console.log(errors);
	return (
		<label className={cls.formInput}>
			<span>{errors}</span>
			<input
				placeholder={placeholder}
				type={inputType}
				{...register(registerName, {
					required: '⚠ Обязательное поле',
				})}
			/>
		</label>
	)
}

export default FormInput
