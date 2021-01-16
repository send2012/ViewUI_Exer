<template>
	<div class="tabs">
		<div class="tabs-component">
			<p>current is running {{ current + 1 }} step</p>
			
			<Steps :current="current">
				<Step title="step 1"></Step>
				
				<Step title="step 2"></Step>
				
				<Step title="step 3"></Step>
				
				<Step title="step 4"></Step>
			</Steps>
			
			<Button type="primary"
			        @click="next"
			> Next step
			</Button>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		
		data: () => ( {
			current: 0,
		} ),
		
		created()
		{
			
		},
		
		methods: {
			next()
			{
				if ( this.current == 3 )
					this.current = 0;
				else
					this.current += 1;
			}
		},
		
		components: {
			
		},
	};
</script>

<style lang="scss" scoped>
	
</style>
