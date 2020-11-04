<template>
	<div class="home">
		<div class="home-link">
			<span class="home-link-item"
			      v-for="( linkListItem, index ) of linkList"
				  :key="index"
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
					name: 'about',
					url: '/about',
				}
			]
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
