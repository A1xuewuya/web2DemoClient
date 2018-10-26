<template>
    <div id="demo1" class="carousel slide" data-ride="carousel" >
		<!--指示符-->
		<ul class="carousel-indicators">
			<li data-target="#demo1" data-slide-to="0" class="active"></li>
			<li data-target="#demo1" data-slide-to="1"></li>
			<li data-target="#demo1" data-slide-to="2"></li>
		</ul>

		<!--轮播图片-->
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img src="http://static.runoob.com/images/mix/img_fjords_wide.jpg" />
				<div class="carousel-caption">
					<h5>文章标题</h5>
					<p>这是一段基本的描述文字这是一段基本的描述文字这是一段基本的描述文字</p>
				</div>
			</div>
			<div class="carousel-item ">
				<img src="http://static.runoob.com/images/mix/img_nature_wide.jpg" />
				<div class="carousel-caption">
					<h5>文章标题</h5>
					<p>这是一段基本的描述文字</p>
				</div>
			</div>
			<div class="carousel-item ">
				<img src="http://static.runoob.com/images/mix/img_mountains_wide.jpg" />
				<div class="carousel-caption">
					<h5>文章标题</h5>
					<p>这是一段基本的描述文字</p>
				</div>
			</div>
		</div>

		<!--左右切换按钮-->
		<a href="#demo1" class="carousel-control-prev" data-slide="prev">
			<span class="carousel-control-prev-icon"></span>
		</a>
		<a href="#demo1" class="carousel-control-next" data-slide="next">
			<span class="carousel-control-next-icon"></span>
		</a>
	</div>
</template>

<script>
export default {
	name: 'Carousel'
}
</script>


<style scoped>
.carousel img{
	width: 100%;
	height: 100%;
}
</style>

