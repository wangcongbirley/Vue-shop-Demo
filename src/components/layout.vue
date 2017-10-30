<template>
	<div>
		<div class="app-head">
			<div class="app-head-inner">
				<router-link :to="{path:'/'}">
					<img class="head-logo" src="../assets/logo.png">
				</router-link>
				<div class="head-nav">
					<ul class="nav-list">
						<li>{{username}}</li>
						<li v-if="username!=''" class="nav-pile">|</li>
						<li v-if="username!=''" @click="quitClick">退出</li>
						<li v-if="username===''" @click="showLogDialog">登录</li>
						<li class="nav-pile">|</li>
						<li v-if="username===''" @click="showRegDialog">注册</li>
						<li v-if="username===''" class="nav-pile">|</li>
						<li @click="showAboutDialog">关于</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="app-content">
			<router-view keep-alive></router-view>
		</div>
		<div class="app-foot">
			<p>© 2017 cw-author-soft MIT</p>
		</div>
		<my-dialog :isShow="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
			<log-form @has-log="LogSuccess"></log-form>
		</my-dialog>
		<my-dialog :isShow="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
			<reg-form></reg-form>
		</my-dialog>
		<my-dialog :isShow="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
			<p>本项目基于Vue.js2.x,感谢Vue的技术支持。如果此项目对您学习Vue.js有帮助,请给一个star( ˘•ω•˘ )</p>
		</my-dialog>
	</div>
</template>

<script>
	import dialog from './dialog'
	import logform from './logForm'
	import regform from './regForm'
	export default {
		components: {
			MyDialog: dialog,
			LogForm: logform,
			RegForm: regform
		},
		data() {
			return {
				isShowLogDialog: false,
				isShowRegDialog: false,
				isShowAboutDialog: false,
				username: ''
			}
		},
		methods: {
			showLogDialog() {
				this.isShowLogDialog = true
			},
			showRegDialog() {
				this.isShowRegDialog = true
			},
			showAboutDialog() {
				this.isShowAboutDialog = true
			},
			closeDialog(attr) {
				this[attr] = false
			},
			LogSuccess(data) {
				this.username = data.username

				this.closeDialog('isShowLogDialog')
			},
			quitClick() {
				this.$nextTick(this.username = '')
			}
		}

	}
</script>

<style>
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	
	ol,
	ul {
		list-style: none;
	}
	
	.app-head {
		background: #00688B;
		color: #b2b2b2;
		height: 90px;
		line-height: 90px;
		width: 100%;
	}
	
	.app-head-inner {
		width: 1200px;
		margin: 0 auto;
	}
	
	.head-logo {
		float: left;
	}
	
	.app-head-inner img {
		width: 50px;
		margin-top: 20px;
	}
	
	.head-nav {
		float: right;
	}
	
	.nav-pile {
		padding: 0 10px;
	}
	
	.head-nav ul {
		overflow: hidden;
	}
	
	.head-nav li {
		cursor: pointer;
		float: left;
	}
	
	.app-foot {
		text-align: center;
		height: 80px;
		width: 100%;
		line-height: 80px;
		background: #e3e4e8;
		clear: both;
		margin-top: 30px;
	}
	
	.container {
		width: 1200px;
		margin: 0 auto;
	}
	
	.hr {
		height: 1px;
		width: 100%;
		background: #ddd;
	}
	
	.button {
		background: #9AC0CD;
		color: #fff;
		display: inline-block;
		padding: 10px 20px;
		cursor: pointer;
	}
	
	.button:hover {
		background: #4fc08d;
	}
	
	.g-form {}
	
	.g-form-line {
		padding: 15px 0;
	}
	
	.g-form-label {
		width: 100px;
		font-size: 16px;
		display: inline-block;
	}
	
	.g-form-input {
		display: inline-block;
	}
	
	.g-form-input input {
		height: 30px;
		width: 200px;
		line-height: 30px;
		vertical-align: middle;
		padding: 0 10px;
		border: 1px solid #ccc;
	}
	
	.g-form-btn {
		padding-left: 100px;
	}
	
	.g-form-error {
		color: red;
		padding-left: 15px;
	}
</style>