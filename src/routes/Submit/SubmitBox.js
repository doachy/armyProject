import React, {useState} from 'react';
import './SubmitBox.css';
import { dbService } from 'FBase';
import Avatar from '@material-ui/core/Avatar';
import { IoIosMore } from "react-icons/io";


export default function SubmitBox() {
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
		<div className="submit-wrapper">
			<h1>과제 제출</h1>
			<div className="submit-card-view">
				<div className="submit-card-header">
					<Avatar className={'submit-avatar'}aria-controls="simple-menu" aria-haspopup="true"  src="../../public/profile.png" />
					<span className={'submit-name'}>김륜기</span><br/>
					<span className={'submit-duration'}>2021년 9월 24일 까지</span>
					<IoIosMore className={'submit-setting-menu'}/>
					{/* 프로필 , 이름, 제출일시 */}
					{/* 우측에 설정 버튼 */}
				</div>
				<div className="submit-card-content">
					<p className="submit-content">과제 내용</p>
					<p className="submit-content">제출 기한</p>
					<p className="submit-content">과제제출 버튼</p>
				</div>
				<div className="card-submit">
					<form onSubmit={onSubmit}>
						<input
							className={'submit-input'}
							type="text"
							onChange={onChange}
							placeholder="write your homeworks"
							maxlength={400}
							value={homework}
						/>
						<input className={'submit-button'}type="submit" value="Submit" />
					</form>
				</div>
				<div className="card-footer">{/* comment */}</div>
			</div>
		</div>
	);
}