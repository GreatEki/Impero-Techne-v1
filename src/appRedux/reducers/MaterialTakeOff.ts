interface STATEI {
	loading: boolean;
}

const INITIAL_STATE: STATEI = {
	loading: false,
};

const MaterialTakeOff = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default MaterialTakeOff;
