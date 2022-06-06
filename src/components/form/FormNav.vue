<template>
	<div>
		<button @click="navigatePrevious" v-show="!isFirst()">
			Previous
		</button>

		<button @click="navigateNext">
			{{nextButtonText}}
		</button>

	</div>
</template>

<script>
export default {
	methods: {
		nextButtonText() {
			if (
				this.$route.name === 'fourthStep'
				|| (this.$route.name === 'thirdStep' && !this.$store.state.hasFourthStep)
			) {
				return 'Save and Finish';
			}
			return 'Save and Continue';
		},
		isFirst() {
			return this.$route.name === 'firstStep'
		},
		navigateNext() {
			if (
				this.$route.name === 'fourthStep'
				|| (this.$route.name === 'thirdStep' && !this.$store.state.hasFourthStep)
			) {
				submit();
			}
			this.$router.push('/' + (++currentStep));
		},
		navigatePrevious() {
			if (this.$route.name === 'fourthStep') {
				this.$router.push('/3');
			} else if (this.$route.name === 'thirdStep') {
				this.$router.push('/2');
			} else if (this.$route.name === 'secondStep') {
				this.$router.push('/1');
			}
		}
	},
	submit() {
		alert('Submitted!');
	}
}
</script>