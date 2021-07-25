import React, { useState } from 'react';
import './Submit.css';
import { dbService } from 'FBase';

function Submit() {
	const [homework, setHomework] = useState('');
	const onSubmit = async (event) => {
		event.preventDefault();
		await dbService.collection('Submit').add({
			homework,
			creatAt: Date.now(),
		});
		setHomework('');
	};

	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setHomework(value);
	};

	return (
		<>
			<div>
				<form onSubmit={onSubmit}>
					<input
						type="text"
						onChange={onChange}
						placeholder="write your homeworks"
						maxlength={200}
						value={homework}
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</>
	);
}

export default Submit;