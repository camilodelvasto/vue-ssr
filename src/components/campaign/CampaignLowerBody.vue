<template>
  <div class="container is-fluid white-bg">
    <div class="campaign-body__tab-section">
      <div class="campaign-lower__body-wrapper">
        <div class="tabs is-toggle">
          <div class="tabs__bottom-line"></div>
          <ul>
            <li @click="currentTab = 1" :class="{'is-active': currentTab === 1}"><a>Home</a></li>
            <li @click="currentTab = 2" :class="{'is-active': currentTab === 2}">
              <a>Donors ({{donations.length}})</a>
            </li>
            <li @click="currentTab = 3" :class="{'is-active': currentTab === 3}">
              <a>Shares ({{campaign.shared_count}})</a>
            </li>
            <li @click="currentTab = 4" :class="{'is-active': currentTab === 4}">
              <a>Comments ({{campaign.comments_count}})</a>
            </li>
            <li @click="currentTab = 5" :class="{'is-active': currentTab === 5}">
              <a>Updates ({{campaign.updates_count}})</a>
            </li>
          </ul>
        </div>

        <div class="columns campaign-lower__columns">
          <div class="column is-8 campaign-lower__left-column">
            <transition-group name="stretch">
              <div class="campaign-lower__tabs-tab" v-if="currentTab === 1" key="1">
                <div class="tab-section tab-section__updates">
                  <h2>More Info</h2>
                  <div class="user-generated__intro-text" v-html="campaign.intro_text"></div>
                </div>
                <div class="tab-section tab-section__updates">
                  <h2>Updates</h2>
                  <div class="user-optional__updates-wrapper">
                    <CampaignUpdates
                      :updates="updates"
                      :count="campaign.updates_count"
                      :campaign-id="campaign.campaign_id"
                      maxchar="700" />
                    <button class="button is-warning is-load-more" @click="loadMoreUpdates()" v-if="moreUpdates">Load more updates</button>
                  </div>
                </div>
                <h2>Nonprofit Organization</h2>
                <div class="tab-section tab-section__header">
                  <CampaignNonprofitDetails :campaign="campaign" />
                </div>
                <div class="tab-section tab-section__comments">
                  <h2>Comments</h2>
                  <Comments
                    :comments="comments"
                    :more-comments="moreComments"
                    :campaign-id="campaign.campaign_id"
                    v-on:loadMoreComments="loadMoreComments()"></Comments>
                  <div class="button campaign-lower__cta-start is-info is-large">
                    Start your own fundraiser
                  </div>
                </div>
              </div>
              <div class="campaign-lower__tabs-tab" v-if="currentTab === 2" key="2">
                <DonorsList
                  v-on:loadDonationsTab="loadDonationsTab()"
                  section-title="Donors"
                  view-all-cta="View all"
                  :donations="donations"
                  layout="horizontal"/>
              </div>
              <div class="campaign-lower__tabs-tab" v-if="currentTab === 4" key="4">
                <h2>Comments</h2>
                <Comments
                  :comments="comments"
                  :more-comments="moreComments"
                  :campaign-id="campaign.campaign_id"
                  v-on:loadMoreComments="loadMoreComments()"></Comments>
                <div class="button campaign-lower__cta-start is-info is-large">
                  Start your own fundraiser
                </div>
              </div>
              <div class="campaign-lower__tabs-tab" v-if="currentTab === 5" key="5">
                <div class="tab-section tab-section__updates">
                  <h2>Updates</h2>
                  <div class="user-optional__updates-wrapper">
                    <CampaignUpdates
                      :updates="updates"
                      :count="campaign.updates_count"
                      :campaign-id="campaign.campaign_id"
                      maxchar="700" />
                    <button class="button is-warning is-load-more" @click="loadMoreUpdates()" v-if="moreUpdates">Load more updates</button>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
          <transition name="fade">
            <div class="column is-4 campaign-lower__right-column" key="2" v-if="currentTab === 1">
              <div class="tab-section tab-section__giving-level">
                <h4>Choose a giving level</h4>
                <div class="user-optional__giving-level-wrapper">
                  <CampaignGivingLevel
                    :level="givingLevel"
                    v-for="(givingLevel, index) in campaign.giving_levels"
                    :key="index"
                    :campaign="campaign" ></CampaignGivingLevel>
                </div>
              </div>
              <div class="top-donors">
                <DonorsList
                  v-on:loadDonationsTab="loadDonationsTab()"
                  section-title="Donors"
                  view-all-cta="View all"
                  :donations="donations"
                  layout="top"/>
              </div>
              <div class="recent-donations">
                <DonorsList
                  section-title="Recent Donations"
                  view-all-cta=""
                  :donations="donations"
                  layout="recent"/>
                <button class="button is-warning is-load-more" @click="loadMoreDonations()" v-if="moreDonations">Load more donations</button>
              </div>
              <div class="raised-through-sharing">
                <DonorsList
                  section-title="Raised Through Sharing"
                  view-all-cta=""
                  :donations="donations"
                  layout="sharing"/>
                <button class="button is-warning is-load-more" @click="loadMoreDonations()" v-if="moreDonations">Load more donations</button>
              </div>
              <div class="button campaign-pledge__cta is-success is-large">
                <DonateAction
                  :campaign-id="campaign.campaign_id"
                  trigger="campaign/lower/right/donors">
                  Donate now
                </DonateAction>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.campaign-lower {
  &__body-wrapper {
    padding-bottom: 20px;

    h1 {
      color: $color-text;
    }

    .tabs {
      position: relative;
      &__bottom-line {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        border-bottom: 1px solid #dbdbdb;
      }
    }
    .tabs.is-toggle li:first-child a {
      border-radius: 9px 0 0 0 !important;
    }
    .tabs.is-toggle li:last-child a {
      border-radius: 0 9px 0 0 !important;
    }

    .tabs {
      @include breakpoint($tablet) {
      }
      ul {
        justify-content: center;

        @include breakpoint($tablet) {
          justify-content: flex-start;
        }
      }
    }
  }

  &__cta-start {
    margin: 50px auto;
    border-radius: 10px;
    display: flex;
    @include breakpoint ($tablet) {
      width: 70%;
    }
  }
  &__left-column {
    padding-right: 0.5rem;
  }
  &__right-column {
    @include breakpoint($tablet) {
      padding-left: 2.7rem;
    }
  }
}

.is-load-more {
  margin-bottom: 40px;
}
</style>

<script>
import CampaignGivingLevel from "Components/campaign/CampaignGivingLevel.vue"
import CampaignUpdates from "Components/campaign/CampaignUpdates.vue"
import CampaignNonprofitDetails from "Components/campaign/CampaignNonprofitDetails.vue"
import Comments from "Components/general/Comments.vue"
import DonorsList from "Components/general/DonorsList.vue"
import DonateAction from "Components/general/DonateAction.vue"

export default {
	props: [ "campaign" ],
	components: {
		CampaignGivingLevel,
		CampaignNonprofitDetails,
		CampaignUpdates,
		Comments,
		DonateAction,
		DonorsList
	},
	data () {
		return {
			currentTab: 1,
      mounted: false
		}
	},
	computed: {
		moreComments () {
			return showMoreButton(this.$store.state, "comments")
		},
		moreDonations () {
			return showMoreButton(this.$store.state, "donations")
		},
		moreUpdates () {
			return showMoreButton(this.$store.state, "updates")
		},
		donations () {
			return this.$store.state.donations.data
		},
		updates () {
			return this.$store.state.updates.data
		},
		comments () {
			return this.$store.state.comments.data
		},
		common () {
			return this.$store.state.common
		}
	},
	methods: {
		loadMoreComments (paginated = true) {
			if (this.moreComments && this.mounted) {
				const campaignId = this.$route.params.id
				return this.$store.dispatch("FETCH_COMMENTS", { campaignId: campaignId, paginated: paginated })
					.then(data => {
						return data
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		loadMoreDonations (paginated = true) {
			if (this.moreDonations) {
				const campaignId = this.$route.params.id
				return this.$store.dispatch("FETCH_DONATIONS", { campaignId: campaignId, paginated: paginated })
					.then(data => {
						return data
					})
					.catch(err => {
						console.log(err)
					})
			}
		},
		loadMoreUpdates (paginated = true) {
			return new Promise((resolve, reject) => {
				const campaignId = this.$route.params.id
				if (this.moreUpdates) {
					return this.$store.dispatch("FETCH_UPDATES", { campaignId: campaignId, paginated: paginated })
						.then(data => {
							resolve(data)
						})
						.catch(err => {
							reject(err)
						})
				}
			})
		},
		loadDonationsTab () {
			this.currentTab = 3
			// scroll to tab bar
		},
    loadUpdatesAndScrollTo (itemId) {
      const target = `#update_${itemId}`

      var targetExists = this.updates.find(update => {
        return update.id === parseInt(itemId, 10)
      })
      if (targetExists) {
        this.$scrollTo(target, { offset: -200 })
      } else {
        if (this.moreUpdates) {
          return this.loadMoreUpdates()
            .then(data => {
              if (data) {
                return this.loadUpdatesAndScrollTo(itemId)
              }
            })
            .catch(err => {
              return err
            })
        } else {
          return { code: 404 }
        }
      }
    },
    loadCommentsAndScrollTo (itemId) {
      const target = `#comment_${itemId}`

      var targetExists = false
      this.comments.forEach(comment => {
        if (comment.id === parseInt(itemId, 10)) {
          targetExists = true
        }

        if (comment.replies && comment.replies.length) {
          var a = comment.replies.find(reply => {
            return reply.id === parseInt(itemId, 10)
          })
          if (a) {
            targetExists = true
          }
        }
      })

      if (targetExists) {
        this.$scrollTo(target, { offset: -200 })          
      } else {
        if (this.moreComments && this.mounted) {
          return this.loadMoreComments()
            .then(data => {
              if (data) {
                return this.loadCommentsAndScrollTo(itemId)
              }
            })
            .catch(err => {
              return err
            })
        } else {
          return { code: 404 }
        }
      }
    }    
	},
	// Data to be fetched asynchronously, only in the client.
	// To be used for the below-the-fold items: comments, donors, recent donations, raised through sharing, updates
	mounted () {
		if (this.moreUpdates && this.$store.state.updates.current === 1) {
			this.loadMoreUpdates()
		}
		if (this.moreComments && this.$store.state.comments.current === 1) {
			this.loadMoreComments()
		}
		if (this.moreDonations && this.$store.state.donations.current === 1) {
			this.loadMoreDonations()
		}

    this.mounted = true

		// If there's an update_id param, find it and scroll to it.
		const updateId = this.$route.query.update_id
		if (updateId && this.moreUpdates) {
			this.currentTab = 5
			setTimeout(() => {
				this.loadUpdatesAndScrollTo(updateId)
			}, 4500)
		}

		// If there's a comment_id param, find it and scroll to it.
		const commentId = this.$route.query.comment_id
		if (commentId && this.moreComments) {
			this.currentTab = 4
			setTimeout(() => {
				this.loadCommentsAndScrollTo(commentId)
			}, 4500)
		}
	},
	destroyed () {
		this.$store.commit("RESET_CAMPAIGN")
	}
}

function showMoreButton (state, arg) {
	const limit = state[arg].limit //2
	const current = state[arg].current //306
	const count = state.campaign[`${arg}_count`] //6
	const totalPages = Math.ceil(count / limit) //6/2 = 3
	return totalPages >= current
}

</script>
