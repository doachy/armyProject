import React, { useState, useEffect } from 'react';
import {dbService} from 'FBase';

function Homeworks() {
	const [homework, setHomework] = useState('');
	const [homeworks, setHomeworks] = useState([]);

	const getHomeworks = async () => {
		const dbHomework = await dbService.collection('Submit').get();
		dbHomework.forEach((document) => {
			const homeworkObject = {
				...document.data(),
				id: document.id,
			};

			setHomeworks((prev) => [document.data(), ...prev]);
		});
	};

	useEffect(() => {
		getHomeworks();
	}, []);

	return (
		<>
			<div>
				{homeworks.map((homework) => (
					<div key={homeworks.id}>
						<h1>{homework.homework}</h1>
					</div>
				))}
			</div>
		</>
	);
}

export default Homeworks;