import React from 'react';
import 'routes/Search/SearchInput.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { BiSearch } from 'react-icons/bi';

function SearchInput() {
	return (
		<div className="search_container">
			<div className="search_section">
				<TextField
					className="search_input"
					classid="search_input"
					id="standard-basic"
					label="Search"
				/>
				<button className="search_button">
					<BiSearch />
				</button>
			</div>
			<div className="filter_container">
				<div className="filter_box">
					<p className="filter_name">카테고리</p>
					<ul className="filter_button_box">
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								글쓰기
							</Button>
						</li>
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								단어
							</Button>
						</li>
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								신문
							</Button>
						</li>
					</ul>
				</div>
				<div className="filter_box">
					<p className="filter_name">진행기간</p>
					<ul className="filter_button_box">
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								모집 중
							</Button>
						</li>
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								모집 임박
							</Button>
						</li>
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								모집 완료
							</Button>
						</li>
					</ul>
				</div>
				<div className="filter_box">
					<p className="filter_name">정렬순서</p>
					<ul className="filter_button_box">
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								인기순
							</Button>
						</li>
						<li>
							<Button className="filter_button" variant="outlined" color="primary">
								등록순
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SearchInput;