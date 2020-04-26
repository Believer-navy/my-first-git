// it's DummyData (2020-04-26)

export const dummyData = {
	"0": {
		id: "0",
		name: "John",
		phone: "010-0000-0000"
	},
	"1": {
		id: "1",
		name: "Ana",
		phone: "010-2222-2222"
	},
	"2": {
		id: "2",
		name: "Mr.T",
		phone: "010-2222-2222"
	},
	"3": {
		id: "3",
		name: "WidowMaker",
		phone: "010-3333-3333"
	},
	"4": {
		id: "4",
		name: "Callme",
		phone: "010-4444-2222"
	},
	"5": {
		id: "5",
		name: "오번입니다",
		phone: "010-5555-5555"
	}
};

export var nextId = Object.keys(dummyData).length;

export const setNextId = () => {
	nextId++;
};