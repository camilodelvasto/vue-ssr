<template>
  <div>
    <div class="comments-section__wrapper">
      <div class="comments-section__comment-wrapper" v-for="comment in comments">
        <div class="comment-item__comment-wrapper">
          <Comment :comment="comment" :campaign-id="campaignId" />
        </div>
        <div class="comment-item__comment-replies">
          <div class="comment-item__comment-wrapper" v-for="reply in comment.replies">
            <Comment :comment="reply" :is-reply="true" :campaign-id="campaignId" />
          </div>
        </div>
      </div>
    </div>
    <button class="button is-warning is-load-more" @click="loadMoreComments()" v-if="moreComments">Show more comments</button>
    <h4>Leave a comment</h4>
    <CommentReply class="comment-reply__wrapper" />
  </div>
</template>

<style scoped lang="scss">
.is-load-more {
  margin-bottom: 40px;
}
.comment-reply__wrapper {
  margin-left: 60px;
}

</style>

<script>
import Comment from "Components/general/Comment.vue"
import CommentReply from "Components/general/CommentReply.vue"

export default {
	props: [ "comments", "more-comments", "campaignId" ],
	components: {
		Comment,
		CommentReply
	},
	methods: {
		loadMoreComments () {
			this.$emit("loadMoreComments")
		}
	}
}
</script>
