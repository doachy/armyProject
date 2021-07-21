import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import RecipeReviewCard from './Card.js'
import './Mypage.css';


function Mypage() {
	return (
		<>
			<div className="containery">
				<div className="calendar">
					<FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
				</div>
				<div className="widget">
					<RecipeReviewCard />
				</div>
			</div>
		</>
	);
}

export default Mypage;