import React from "react";
import PhoneItem from "../PhoneItem";
import styled from "styled-components";

const PhoneWrapper = styled.div`
	display:flex;
	flex-direction: column;
`;

const PhoneList = () => {
	return (
		<PhoneWrapper>
			<PhoneItem />
			<PhoneItem />
			<PhoneItem />
		</PhoneWrapper>	
	);
};

export default PhoneList;