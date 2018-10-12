<template>
	<div id="app">
		<!-- <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
        </el-row>
        <br><br>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio> -->
		<!-- <el-time-picker
        is-range
        v-model="value4"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围">
        </el-time-picker> -->
		<!-- <el-container>
            <el-header>
                Header
            </el-header>
            <el-main>
                Main
            </el-main>
        </el-container> -->

		<!-- <el-container>
            <el-header>
                Header
            </el-header>
            <el-main>
                Main
            </el-main>
            <el-footer>
                Footer
            </el-footer>
        </el-container> -->

		<!-- <el-container>
            <el-aside width="200px">
            </el-aside>
            <el-main>
                Main
            </el-main>
        </el-container> -->

		<!-- <el-container>
            <el-aside width="200px">
                Aside
            </el-aside>
            <el-main>
                Main
            </el-main>
        </el-container> -->

		<!-- <el-container>
            <el-header>
                Header
            </el-header>
            <el-container>
                <el-aside width="200px">
                Aside
                </el-aside>
                <el-main>
                Main
                </el-main>
            </el-container>
        </el-container> -->

		<!-- <el-container>
            <el-aside width="200px">
                Aside
                </el-aside>
            <el-container>
                <el-header>
                Header
                </el-header>
                <el-main>
                Main
                </el-main>
            </el-container>
        </el-container> -->

		<el-container>
			<el-header>
				Header
			</el-header>
			<el-container>
				<el-aside width="200px">
					Aside
				</el-aside>
				<el-container>
					<el-main>
						Main
					</el-main>
					<el-footer>
						Footer
					</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: "app",
		components: {},
		data() {
			return {
				radio: "1",
				value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
				value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
			};
		}
	};
</script>

<style>
	body{
		margin: 0;
	}
	
	.el-header,
	.el-footer {
		background-color: #b3c0d1;
		color: #333;
		text-align: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #d3dce6;
		color: #333;
		text-align: center;
		line-height: 200px;
	}
	
	.el-main {
		background-color: #e9eef3;
		color: #333;
		text-align: center;
		line-height: 160px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>