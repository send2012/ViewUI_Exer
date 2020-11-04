<template>
	<div class="home">
		<div class="home-link">
			<span class="home-link-item"
			      v-for="linkListItem of linkList"
				  :key="linkListItem.id"
				  @click="goRelated( linkListItem.url )"
			>
				{{ linkListItem.name }}
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		
		data: () => ( {
			linkList: [
				{
					id: 1,
					name: 'about',
					url: '/about',
				},
				{
					id: 2,
					name: 'layout',
					url: '/layout',
				},
			],
		} ),
		
		methods: {
			goRelated( link )
			{
				this.$router.push( {
					path: link,
				} );
			},
		},
	};
</script>

<style lang="scss"
       scoped
> @import "style";
</style>
