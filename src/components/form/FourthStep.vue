<template>

	<div>

		<div>
			<label for="country">Country</label>
			<select id="country" name="country">
				<option value="United States">United States</option>
				<option value="Canada">Canada</option>
				<option value="Mexico">Mexico</option>
				<option value="United Kingdom">United Kingdom</option>
			</select>
		</div>

		<div>
			<label for="address1">Address Line 1</label>
			<input type="text" id="address1" name="address1" v-model="address1" />
		</div>

		<div>
			<label for="address2">Address Line 2</label>
			<input type="text" id="address2" name="address2" v-model="address2" />
		</div>

		<div>
			<label for="city">City</label>
			<input type="text" id="city" name="city" v-model="city" />
		</div>

		<div>
			<label for="state">State</label>
			<input type="text" id="state" name="state" v-model="state" />
		</div>

		<div>
			<label for="zip">Zip</label>
			<input type="text" id="zip" name="zip" v-model="zip" />
		</div>

		<formnav></formnav>
	</div>

</template>


<script>
import FormNav from '~/components/form/FormNav.vue'
export default {
	components: {FormNav},
  computed: {
		country: {
			get() {
				return this.$store.state.country
			},
			set(value) {
				this.$store.commit('setCountry', {country: value})
			}
		},
		address1: {
			get() {
				return this.$store.state.address1
			},
			set(value) {
				this.$store.commit('setAddress1', {address1: value})
			}
		},
		address2: {
			get() {
				return this.$store.state.address2
			},
			set(value) {
				this.$store.commit('setAddress2', {address2: value})
			}
		},
		city: {
			get() {
				return this.$store.state.city
			},
			set(value) {
				this.$store.commit('setCity', {city: value})
			}
		},
		state: {
			get() {
				return this.$store.state.state
			},
			set(value) {
				this.$store.commit('setState', {state: value})
			}
		},
		zip: {
			get() {
				return this.$store.state.zip
			},
			set(value) {
				this.$store.commit('setZip', {zip: value})
			}
		},
	}
}
</script>