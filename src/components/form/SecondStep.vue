<template>

	<div>

		<h2>Team Members</h2>
		<p>Please add all the team members that will have access to the system and those designated as superusers.</p>

		<div class="w-3/12">
			<label for="firstName">First Name</label>
			<input type="text" id="firstName" name="firstName" v-model="firstName" />
		</div>

		<div class="w-3/12">
			<label for="lastName">Last Name</label>
			<input type="text" id="lastName" name="lastName" v-model="lastName" />
		</div>

		<div class="w-3/12">
			<label for="title">Title</label>
			<input type="text" id="title" name="title" v-model="title" />
		</div>

		<div class="w-3/12">
			<label for="emailAddress">Email address</label>
			<input type="email" id="emailAddress" name="emailAddress" v-model="emailAddress" />
		</div>

		<div class="w-3/12">
			<label for="phone">Phone Number</label>
			<input type="text" id="phone" name="phone" v-model="phone" />
		</div>


		<div class="w-3/12">
			<label for="timezone">Timezone</label>
			<select id="timezone" name="timezone">
				<option timeZoneId="5" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
				<option timeZoneId="6" gmtAdjustment="GMT-08:00" useDaylightTime="1" value="-8">(GMT-08:00) Tijuana, Baja California</option>
				<option timeZoneId="7" gmtAdjustment="GMT-07:00" useDaylightTime="0" value="-7">(GMT-07:00) Arizona</option>
			</select>
		</div>

		<div class="1/">
			<label for="">DBA Superuser?</label>
			<select id="superuser" name="superuser">
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</select>
		</div>

		<p>*You may list the necessary team members now. More team members can be added later.</p>

		<formnav></formnav>
	</div>

</template>


<script>
import FormNav from '~/components/form/FormNav.vue'
export default {
	components: {FormNav},
  computed: {
		firstName: {
			get() {
				return this.$store.state.firstName
			},
			set(value) {
				this.$store.commit('setFirstName', {firstName: value})
			}
		},
		lastName: {
			get() {
				return this.$store.state.lastName
			},
			set(value) {
				this.$store.commit('setLastName', {lastName: value})
			}
		},
		title: {
			get() {
				return this.$store.state.title
			},
			set(value) {
				this.$store.commit('setTitle', {title: value})
			}
		},
		email: {
			get() {
				return this.$store.state.email
			},
			set(value) {
				this.$store.commit('setEmail', {email: value})
			}
		},
		phone: {
			get() {
				return this.$store.state.phone
			},
			set(value) {
				this.$store.commit('setPhone', {phone: value})
			}
		},
		timezone: {
			get() {
				return this.$store.state.timezone
			},
			set(value) {
				this.$store.commit('setTimezone', {timezone: value})
			}
		},
		superuser: {
			get() {
				return this.$store.state.superuser
			},
			set(value) {
				this.$store.commit('setSuperuser', {superuser: value})
			}
		},
	}
}
</script>