<template>
	<div class="index-wrap">
		<div class="index-left">
			<div class="index-left-block">
				<h2>全部产品</h2>
				<template v-for="product in productList">
					<h3>{{product.title}}</h3>
					<ul>
						<li v-for="item in product.list">
							<a :href="item.url">{{item.name}}</a>
							<span v-if="item.hot" class="hot-tag">HOT</span>
						</li>
					</ul>
					<div class="hr"></div>
					<ul>
						<li v-for="item in product.app">
							<a :href="item.url">{{item.name}}</a>
						</li>
					</ul>
				</template>
			</div>
			<div class="index-left-block lastest-news">
				<h2>消息列表</h2>
				<ul>
					<li v-for="item in newsList">
						<a :href="item.url" class="new-item">{{item.title}}</a>
					</li>
				</ul>
			</div>
		</div>
		<div>
			<slideShow :slides="slides" :inv="invTime" @onchange="dosomething"></slideShow>
		</div>
		<div class="index-right">
			<div class="index-board-list">
				<div class="index-board-item" v-for="(item,index) in boardList" :class="[{'line-last':index%2!==0},'index-board-'+item.id]">
					<div class="index-board-item-inner">
						<h2>{{item.title}}</h2>
						<p>{{item.description}}</p>
						<div class="index-board-button">
							<router-link class="button" :to="{path: 'detail/' + item.toKey}">>立即购买</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import slideShow from '../components/slideShow'
	export default {
		components: {
			slideShow
		},
		methods: {
			dosomething() {},
			toggle() {
				this.show = !this.show
			}

		},
		created() {
			this.$http.get('/api/getNewsList').then((res) => {
				this.newsList = res.data
			}, (err) => {})
		},
		data() {
			return {
				show: false,
				invTime: 2500,
				slides: [{
						src: require('../assets/image/pic1.jpg'),
						title: '灵异调查局特别报道震撼上市！！',
						href: 'detail/count'
					},
					{
						src: require('../assets/image/pic2.jpg'),
						title: '<海鸥>全球首发！！',
						href: 'detail/forecast'
					},
					{
						src: require('../assets/image/pic3.jpg'),
						title: '石头计划原创发布！！',
						href: 'detail/analysis'
					},
					{
						src: require('../assets/image/pic4.jpg'),
						title: '云豆现场独家献唱！！',
						href: 'detail/publish'
					}
				],
				newsList: [],
				boardList: [{
						title: '数据统计',
						description: '数据统计基于大数据为企业获取需要的信息',
						id: 'car',
						toKey: 'count',
						saleout: false
					},
					{
						title: '音乐营销',
						description: '音乐营销帮助你的企业产品更好地找到定位',
						id: 'earth',
						toKey: 'analysis',
						saleout: false
					},
					{
						title: '物流速递',
						description: '物流快速安全运输永远保持的便捷',
						id: 'loud',
						toKey: 'forecast',
						saleout: true
					},
					{
						title: '逆流而上',
						description: '勇攀高峰，助力到达事业的顶峰',
						id: 'hill',
						toKey: 'publish',
						saleout: false
					}
				],
				productList: {
					pc: {
						title: 'PC游戏类产品',
						list: [{
								name: '守望先锋',
								url: 'http://starcraft.com'
							},
							{
								name: '绝地求生',
								url: 'http://warcraft.com'
							},
							{
								name: '英雄联盟',
								url: 'http://overwatch.com',
								hot: true
							},
							{
								name: 'GTA-5',
								url: 'http://hearstone.com'
							}
						]
					},
					app: {
						title: '音乐应用产品',
						last: true,
						list: [{
								name: 'QQ音乐',
								url: 'http://weixin.com'
							},
							{
								name: '网易云音乐',
								url: 'http://twitter.com',
								hot: true
							},
							{
								name: '虾米音乐',
								url: 'http://maps.com'
							},
							{
								name: '酷我音乐',
								url: 'http://phone.com'
							}
						]
					}
				}
			}
		}
	}
</script>

<style scoped>
	.slides-enter .slides-leave-to {
		opacity: 0;
		transform: translateX(10px);
	}
	
	.slide-enter-active {
		transition: all .3s ease;
	}
	
	.slide-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.index-wrap {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.index-left {
		float: left;
		width: 300px;
		text-align: left;
	}
	
	.index-right {
		float: left;
		width: 900px;
	}
	
	.index-left-block {
		margin: 15px;
		background: #EDEDED;
		box-shadow: 0 0 1px #ddd;
	}
	
	.index-left-block .hr {
		margin-bottom: 20px;
	}
	
	.index-left-block h2 {
		background: #8B636C;
		color: #fff;
		padding: 10px 15px;
		margin-bottom: 20px;
	}
	
	.index-left-block h3 {
		padding: 0 15px 5px 15px;
		font-weight: bold;
		color: #222;
	}
	
	.index-left-block ul {
		padding: 10px 15px;
	}
	
	.index-left-block li {
		padding: 5px;
	}
	
	.index-board-list {
		overflow: hidden;
	}
	
	.index-board-item {
		float: left;
		width: 400px;
		background: #fff;
		box-shadow: 0 0 1px #ddd;
		padding: 20px;
		margin-right: 20px;
		margin-bottom: 20px;
	}
	
	.index-board-item-inner {
		min-height: 125px;
		padding-left: 120px;
	}
	
	.index-board-item h2 {
		font-size: 18px;
		font-weight: bold;
		color: #000;
		margin-bottom: 15px;
	}
	
	.line-last {
		margin-right: 0;
	}
	
	.index-board-button {
		margin-top: 20px;
	}
	
	.lastest-news {
		min-height: 512px;
	}
	
	.hot-tag {
		background: red;
		color: #fff;
	}
	
	.new-item {
		display: inline-block;
		width: 230px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.index-board-car .index-board-item-inner {
		background: url(../assets/image/1.png) no-repeat;
	}
	
	.index-board-loud .index-board-item-inner {
		background: url(../assets/image/2.png) no-repeat;
	}
	
	.index-board-earth .index-board-item-inner {
		background: url(../assets/image/3.png) no-repeat;
	}
	
	.index-board-hill .index-board-item-inner {
		background: url(../assets/image/4.png) no-repeat;
	}
	
	.index-board-item h2 {
		font-size: 18px;
		font-weight: bold;
		color: #000;
		margin-bottom: 15px;
	}
	
	.line-last {
		margin-right: 0;
	}
	
	.index-board-button {
		margin-top: 20px;
	}
	
	.lastest-news {
		min-height: 512px;
	}
	
	.hot-tag {
		background: red;
		color: #fff;
	}
	
	.new-item {
		display: inline-block;
		width: 130px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>