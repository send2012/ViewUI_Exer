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
				{
					id: 3,
					name: 'card',
					url: '/card',
				},
				{
					id: 4,
					name: 'tabs',
					url: '/tabs',
				},
				{
					id: 5,
					name: 'steps',
					url: '/steps',
				},
			],
		} ),
		
		methods: {
			goRelated( link )
			{
				console.log( link );
				
				let arr = [ 1, 2, 3 ];
				arr.push( 0 );
				
				console.log( arr );
				
				// this.$router.push( {
				// 	path: link,
				// } );
			},
		},
	};
</script>

<style lang="scss"
       scoped
> @import "style";
</style>
