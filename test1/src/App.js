// 경로 : src/App.js

import React, { Component } from 'react';
import Number from "./components/Number";
import CountButton from "./components/CountButton";
import styled from "styled-components";

const Wrapper = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100px;
	margin-top: 100px;
`;

const ButtonWrapper = styled.div`
	width:100%;
	display:flex;
	justify-content: space-between;
	margin-bottom: 50px;
`;




class App extends Component {
	state = { number: 0 }

	// 1. state를 업데이트하는 함수를 전달
	countUp = () => {
		this.setState(
			({ number }) => ({
				number: number + 1
			})
		);
	}

	// 2. setState 함수 앞에서 값을 받고 이를 전달
	countDown = () => {
		const { number } = this.state
		this.setState({ number: number - 1 });
	}

	render() {
		// Destructuring Assignment 문법을 사용한 방식
		const { number } = this.state;
		const { countUp, countDown } = this;

		return (
			<Wrapper>
				<ButtonWrapper>
					<CountButton onClick={countUp} text="+"/>
					<CountButton onClick={countDown} text="-"/>
				</ButtonWrapper>
				{number}
			</Wrapper>
		);
	}
}

export default App;