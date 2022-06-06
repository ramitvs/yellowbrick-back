<template>

	<div>

		<div>
			<label for="region">Region</label>
			<select id="region" name="region">
				<option value="US-East">US-East</option>
				<option value="US-West">US-West</option>
				<option value="EU-Frankfurt">EU-Frankfurt</option>
			</select>
		</div>

		<div>
			<label for="nodes">Nodes</label>
			<select id="nodes" name="nodes">
				<option value="8">8</option>
				<option value="9">9</option>
				<option value=".">...</option>
				<option value="45">45</option>
			</select>
		</div>

		<div>
			<label for="size">Size</label>
			<select id="size" name="size">
				<option value="l">L (Large)</option>
				<option value="xl">XL (Extra Large)</option>
				<option value="2xl">2XL (Double XL)</option>
			</select>
		</div>

		<formnav></formnav>
	</div>

</template>


<script>
import FormNav from '~/components/form/FormNav.vue'

export default {
	components: {FormNav},
  computed: {
		region: {
			get() {
				return this.$store.state.region
			},
			set(value) {
				this.$store.commit('setRegion', {region: value})
			}
		},
		nodes: {
			get() {
				return this.$store.state.nodes
			},
			set(value) {
				this.$store.commit('setNodes', {nodes: value})
			}
		},
		size: {
			get() {
				return this.$store.state.size
			},
			set(value) {
				this.$store.commit('setSize', {size: value})
			}
		},
	}
}
</script>