export default {
  SET_NONPROFIT: (state, { nonprofit }) => {
    state.nonprofit = nonprofit
  },
  SET_CAMPAIGN: (state, { campaign }) => {
    state.campaign = campaign
  },
	SET_UPDATES: (state, { updates }) => {
		state.updates = updates
	}
}
