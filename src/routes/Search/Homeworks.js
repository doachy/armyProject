import React, { useState, useEffect } from 'react';
import { dbService } from 'FBase';
import './Homeworks.css';

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

			setHomeworks((prev) => [homeworkObject, ...prev]);
		});
	};

	useEffect(() => {
		getHomeworks();
	}, []);

	return (
		<>
			<div class='homework-container'>
				{homeworks.map((homework) => (
					<div class="card-view" key={homeworks.id}>
						<div class="card-header missionImpossible"></div>
						<div class="card-movie-content">
							<div class="card-movie-content-head">
								<a href="#">
									<h3 class="card-movie-title">{homework.homework}</h3>
								</a>
								<div class="ratings">
									<span>8.8</span>/10
								</div>
							</div>
							<div class="card-movie-info">
								<div class="movie-running-time">
									<label>Last update</label>
									<span>Sun 8 Sept - 10:00PM</span>
								</div>
								<div class="movie-running-time">
									<label>Running time</label>
									<span>2hr 09min</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default Homeworks;