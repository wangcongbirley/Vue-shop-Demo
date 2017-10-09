<template>
	<div>
		<div class="dialog-wrap" v-if="isShow">
			<div class="dialog-cover" @click="close"></div>
			<transition name="drop">
				<div class="dialog-content">
					<p class="dialog-close" @click="close">x</p>
					<slot>
						<div>
							<table class="buy-dialog-table">
								<tr>
									<th>购买数量</th>
									<th>产品类型</th>
									<th>有效时间</th>
									<th>产品版本</th>
									<th>总价</th>
								</tr>
								<tr>
									<td>{{ buyNum }}</td>
									<td>{{ buyType.label }}</td>
									<td>{{ period.label }}</td>
									<td>
										<span v-for="item in versions">{{ item.label }}</span>
									</td>
									<td>{{ price }}</td>
								</tr>
							</table>
							<h3 class="buy-dialog-title">请选择银行</h3>
							<bank-chooser></bank-chooser>
							<div class="button buy-dialog-btn" @click="check">
								确认购买
							</div>
						</div>
					</slot>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	import BankChooser from './bankChooser'
	export default {
		components: {
			BankChooser
		},
		props: {
			isShow: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			close() {
				this.$emit('on-close')
			},
			check() {
				this.$emit('on-check')
			}
		},
		data() {
			return {
				buyNum: 0,
				buyType: {},
				versions: [],
				period: {},
				price: 0,
				bankDialog: false
			}
		}
	}
</script>

<style>
	.drop-enter-active {
		transition: all .5s ease;
	}
	
	.drop-leave-active {
		transition: all .3s ease;
	}
	
	.drop-enter {
		transform: translateY(-500px);
	}
	
	.drop-leave-active {
		transform: translateY(-500px);
	}
	
	.dialog-wrap {
		position: fixed;
		width: 100%;
		height: 100%;
	}
	
	.dialog-cover {
		background: #000;
		opacity: .3;
		position: fixed;
		z-index: 5;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	
	.dialog-content {
		width: 50%;
		position: fixed;
		max-height: 50%;
		overflow: auto;
		background: #fff;
		top: 20%;
		left: 50%;
		margin-left: -25%;
		z-index: 10;
		border: 2px solid #464068;
		padding: 2%;
		line-height: 1.6;
	}
	
	.dialog-close {
		position: absolute;
		right: 5px;
		top: 5px;
		width: 20px;
		height: 20px;
		text-align: center;
		cursor: pointer;
	}
	
	.dialog-close:hover {
		color: #4fc08d;
	}
	
	.buy-dialog-title {
		font-size: 16px;
		font-weight: bold;
	}
	
	.buy-dialog-btn {
		margin-top: 20px;
	}
	
	.buy-dialog-table {
		width: 100%;
		margin-bottom: 20px;
	}
	
	.buy-dialog-table td,
	.buy-dialog-table th {
		border: 1px solid #e3e3e3;
		text-align: center;
		padding: 5px 0;
	}
	
	.buy-dialog-table th {
		background: #4fc08d;
		color: #fff;
		border: 1px solid #4fc08d;
	}
</style>