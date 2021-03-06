import axios from "axios"

const baseURL = process.env.BASE_API
const IRSSearchAPI = process.env.IRS_SEARCH_API_URL

export function fetchNonprofit (ein) {
	return new Promise((resolve, reject) => {
		axios.get(`${baseURL}/nonprofits/${ein}`)
			.then(response => {
				if (response.data.length) {
					// Nonprofit was found in main system (nonprofit is not generic)
					resolve(response.data[0])
				} else {
					// Nonprofit was not found in main system (nonprofit is generic)
					// Fetch generic resources from main system and nonprofit data from the IRS service
					let promises = []
					promises.push(axios.get(`${IRSSearchAPI}/nonprofits/${ein}`))
					promises.push(axios.get(`${baseURL}/default`))
					axios.all(promises)
						.then(result => {
							var res = result[0].data[0]
							res.data = result[1].data.data
							resolve(res)
						})
						.catch(() => {
							reject({ code: 404 })
						})
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchCampaign (id) {
	return new Promise((resolve, reject) => {
		axios.get(`${baseURL}/campaigns?campaign_id=${id}`)
			.then(response => {
				if (response.data.length) {
					resolve(response.data[0])
				} else {
					reject({ code: 404 })
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchCampaigns (ein, page, limit, paginated = true) {
	return new Promise((resolve, reject) => {
		if (!paginated) {
			page = 1
		}
		axios.get(`${baseURL}/campaigns?nonprofit_ein=${ein}&_limit=${limit}&_page=${page++}`)
			.then(response => {
				if (response.data.length) {
					resolve(response.data)
				} else {
					reject({ code: 404 })
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchCommonData (id) {
	return new Promise((resolve, reject) => {
		axios.get(`${baseURL}/common`)
			.then(response => {
				resolve(response.data)
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchUpdates (campaignId, page, limit, paginated = true) {
	return new Promise((resolve, reject) => {
		if (!paginated) {
			page = 1
		}
		axios.get(`${baseURL}/updates?_sort=timestamp&_order=desc&campaign_id=${campaignId}&_limit=${limit}&_page=${page++}`)
			.then(response => {
				if (response.data.length) {
					resolve(response.data)
				} else {
					reject({ code: 404 })
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchComments (campaignId, page, limit, paginated = true) {
	return new Promise((resolve, reject) => {
		if (!paginated) {
			page = 1
		}
		axios.get(`${baseURL}/comments?campaign_id=${campaignId}&_limit=${limit}&_page=${page++}`)
			.then(response => {
				if (response.data.length) {
					resolve(response.data)
				} else {
					reject({ code: 404 })
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchDonations (query, page, limit, paginated = true) {
	return new Promise((resolve, reject) => {
		if (!paginated) {
			page = 1
		}
		axios.get(`${baseURL}/donations?${query}&_limit=${limit}&_page=${page++}`)
			.then(response => {
				if (response.data.length) {
					resolve(response.data)
				} else {
					reject({ code: 404 })
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchTopFundraisers (page = 1, limit, paginated = true) {
	return new Promise((resolve, reject) => {
		if (!paginated) {
			page = 1
		}
		axios.get(`${baseURL}/donors?_sort=total_raised&_order=desc&_limit=${limit}&_page=${page++}`)
			.then(response => {
				if (response.data.length) {
					resolve(response.data)
				} else {
					reject({ code: 404 })
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function fetchHomePage () {
	return new Promise((resolve, reject) => {
		axios.get(`${baseURL}/pages?page_name=home`)
			.then(response => {
				if (response.data) {
					resolve(response.data[0])
				} else {
					reject({ code: 404 })
				}
			})
			.catch(e => {
				reject(e)
			})
	})
}

export function sendComment (commentBody, inReplyTo, fullName, campaignId, honeypot) {
	const commentAPI = "https://wt-9c78551d704acfbbfbeb0bb6cca86e9a-0.sandbox.auth0-extend.com/volunteerathon-comment"
	return new Promise((resolve, reject) => {
		axios.post(commentAPI, {
			comment: commentBody,
			reply: inReplyTo,
			fullName: fullName,
			campaign_id: campaignId,
			fax: honeypot
		})
			.then(data => {
				resolve(data)
			})
			.catch(e => {
				reject(e)
			})
	})
}
