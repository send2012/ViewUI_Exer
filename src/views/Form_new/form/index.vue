<template>
	<div class="viewui-form">
		<div class="viewui-form-demo">
			<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
				<FormItem prop="user">
					<Input type="text" v-model="formInline.user" placeholder="Username">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
					</Input>
				</FormItem>
				
				<FormItem prop="password">
					<Input type="password" v-model="formInline.password" placeholder="Password">
						<Icon type="ios-lock-outline" slot="prepend"></Icon>
					</Input>
				</FormItem>
				
				<FormItem>
					<Button type="primary"
					        @click="handleSubmit('formInline')"
					>Signin</Button>
				</FormItem>
			</Form>
		</div>
		
		<div class="viewui-form-validate">
			<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
				<FormItem label="Name" prop="name">
					<Input v-model="formValidate.name" placeholder="Enter your name"></Input>
				</FormItem>
				<FormItem label="E-mail" prop="mail">
					<Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
				</FormItem>
				<FormItem label="City" prop="city">
					<Select v-model="formValidate.city" placeholder="Select your city">
						<Option value="beijing">New York</Option>
						<Option value="shanghai">London</Option>
						<Option value="shenzhen">Sydney</Option>
					</Select>
				</FormItem>
				<FormItem label="Date">
					<Row>
						<Col span="11">
							<FormItem prop="date">
								<DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
							</FormItem>
						</Col>
						<Col span="2" style="text-align: center">-</Col>
						<Col span="11">
							<FormItem prop="time">
								<TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
							</FormItem>
						</Col>
					</Row>
				</FormItem>
				<FormItem label="Gender" prop="gender">
					<RadioGroup v-model="formValidate.gender">
						<Radio label="male">Male</Radio>
						<Radio label="female">Female</Radio>
					</RadioGroup>
				</FormItem>
				<FormItem label="Hobby" prop="interest">
					<CheckboxGroup v-model="formValidate.interest">
						<Checkbox label="Eat"></Checkbox>
						<Checkbox label="Sleep"></Checkbox>
						<Checkbox label="Run"></Checkbox>
						<Checkbox label="Movie"></Checkbox>
					</CheckboxGroup>
				</FormItem>
				<FormItem label="Desc" prop="desc">
					<Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
				</FormItem>
				<FormItem>
					<Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
					<Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
				</FormItem>
			</Form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'viewui-form',
		
		data: () => ( {
			formInline: {
				// ----- demo 使用的 - start -----
				// user: '',
				// password: '',
				// ----- demo 使用的 - end -----
				name    : '',
				mail    : '',
				city    : '',
				gender  : '',
				interest: [],
				date    : '',
				time    : '',
				desc    : '',
			},
			ruleInline: {
				// ----- demo 使用的 - start -----
				// user: [
				// 	{
				// 		required: true,
				// 		messgae: 'Please fill in the user name',
				// 		trigger: 'blur',
				// 	},
				// ],
				// password: [
				// 	{
				// 		required: true,
				// 		message: 'Please fill in the password.',
				// 		trigger: 'blur',
				// 	},
				// 	{
				// 		type: 'string',
				// 		min: 6,
				// 		message: 'The password length cannot be less than 6 bits',
				// 		trigger: 'blur',
				// 	},
				// ],
				// ----- demo 使用的 - end -----
				name: [
					{ required: true, message: 'The name cannot be empty', trigger: 'blur' }
				],
				mail: [
					{ required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
					{ type: 'email', message: 'Incorrect email format', trigger: 'blur' }
				],
				city: [
					{ required: true, message: 'Please select the city', trigger: 'change' }
				],
				gender: [
					{ required: true, message: 'Please select gender', trigger: 'change' }
				],
				interest: [
					{ required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
					{ type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
				],
				date: [
					{ required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
				],
				time: [
					{ required: true, type: 'string', message: 'Please select time', trigger: 'change' }
				],
				desc: [
					{ required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
					{ type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
				],
			},
		} ),
		
		created()
		{
			
		},
		
		methods: {
			// ------ demo 使用的 - start ------
			// handleSubmit( name )
			// {
			// 	this.$refs[ name ]
			// 	    .validate( ( valid ) => {
			// 		if ( valid )
			// 			this.$Message.success( 'Success!' );
			// 		else
			// 			this.$Message.error( 'Fail' );
			// 	} );
			// },
			// ------ demo 使用的 - end ------
			handleSubmit( name )
			{
				this.$refs[ name ].validate( ( valid ) => {
					if ( valid )
						this.$Message.success( 'Success!' );
					else
						this.$Message.error( 'Fail!' );
				});
			},
			
			handleReset( name )
			{
				this.$refs[ name ].resetFields();
			},
		},
		
		components: {
			
		},
	};
</script>

<style lang="scss" scoped>
	@import "style";
</style>
