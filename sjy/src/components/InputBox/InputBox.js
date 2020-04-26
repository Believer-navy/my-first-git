// InputBox.js

import React from "react";
import "./InputBox.css";

const InputBox = ({name,phone,onChange,onSubmit}) => {
	return (
		<div className="input_boxes">
			<div className="input_box">
				<div className="input_box_name">이름</div>
				<input
					type="text"
					placeholder="이름"
					name="name"
					className="input_box_input"
					onChange={onChange}
					value={name}
				/>
			</div>
			<div className="input_box">
				<div className="input_box_phone">전화번호</div>
				<input
					type="text"
					placeholder="전화번호"
					name="phone"
					className="input_box_input"
					onChange={onChange}
					value={phone}
				/>
			</div>
			<button className="input_box_button" onClick={onSubmit}>저장</button>
		</div>
	);
};

export default InputBox;