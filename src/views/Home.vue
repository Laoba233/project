<template>
  <div id="home">
    <el-container style="height: 100% ">
      <!-- 左边 -->

      <!-- 展开1，2菜单 -->
      <div class="left" style="height: 100% ">
        <el-menu
          class="el-menu-vertical-demo"
          :default-openeds="['1', '2']"
          :default-active="aindex"
          router
          :collapse="isCollapse"
        >
          <!-- log和系统标题 -->
          <el-menu-item>
            <img src="@/assets/logo.png" style="width: 30px; margin-right: 20px; " />
            <b>
              <span style="font-size: 20px; margin-right:30px;" slot="title">教育系统</span>
            </b>
          </el-menu-item>
          <!-- 左边选择菜单 -->
          <el-submenu v-for="(itme,index) in leftData" :key="index" :index="''+(index+1)">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ itme.name }}</span>
            </template>
            <el-menu-item-group v-for="(value,index) in itme.essentialData" :key="index">
              <el-menu-item
                :index="value.dataRoute"
                @click="addTab(value.dataName,value.dataRoute)"
              >
                {{ value.dataName }}
                <div class="triangle"></div>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <!-- 右边 -->
      <el-container>
        <el-header>
          <!-- 控制合上关闭按钮 -->
          <div class="topLeft">
            <el-tooltip
              class="tooltip"
              effect="dark"
              :content="isCollapse?'展开':'收起'"
              placement="right"
            >
              <el-button
                @click="isCollapse=!isCollapse"
                :icon="isCollapse?'el-icon-caret-right':'el-icon-caret-left'"
                style="color:#fff;border: 0;"
              />
            </el-tooltip>
          </div>

          <!-- tabs标签页 -->
          <div class="center">
            <el-tabs
              v-model="editableTabsValue"
              type="card"
              @tab-click="jimp"
              @tab-remove="removeTab"
            >
              <el-tab-pane
                v-for="(item,index) in tabTow"
                :key="item.name"
                :label="item.title"
                :name="item.name"
                :closable="index>0"
              >{{item.content}}</el-tab-pane>
            </el-tabs>
          </div>

          <!-- 用户头像 -->
          <div class="right-down">
            <el-dropdown>
              <el-avatar icon="el-icon-user-solid"></el-avatar>
              <span>王小虎</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看个人</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <!-- 右下 -->
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false, //打开侧边栏
      leftData: [
        {
          name: "基础数据",
          essentialData: [
            {
              dataName: "首页",
              dataRoute: "/HomPa"
            },
            {
              dataName: "班级管理",
              dataRoute: "/Cmant"
            },
            {
              dataName: "教师管理",
              dataRoute: "/Tmant"
            },
            {
              dataName: "学生管理",
              dataRoute: "/Smant"
            },
            {
              dataName: "修改密码",
              dataRoute: "/Cpasd"
            }
          ]
        },
        {
          name: "在线测试",
          essentialData: [
            {
              dataName: "制作试卷",
              dataRoute: "/Tomak"
            },
            {
              dataName: "安排测试",
              dataRoute: "/Arrge"
            },
            {
              dataName: "试卷管理",
              dataRoute: "/Exama"
            },
            {
              dataName: "查看成绩",
              dataRoute: "/Cresu"
            },
            {
              dataName: "批阅试卷",
              dataRoute: "/Markg"
            }
          ]
        }
      ],
      aindex: "/HomPa",
      editableTabsValue: "1", //默认选择的Tab
      tabTow: [
        {
          title: "首页",
          name: "1",
          route: "/HomPa"
        }
      ],
      tabIndex: 1 //用于添加tab标签页，从什么地方开始
    };
  },
  methods: {
    /**
     *点击添加到Tab标签页
     */
    addTab(name, path) {
      let _this = this;
      let newTabName = ""; // 定义变量表示tab标签页位置
      let indexs = _this.tabTow.findIndex(item => item.title == name);
      if (indexs == -1) {
        newTabName = ++_this.tabIndex + "";
        _this.tabTow.push({
          title: name,
          name: newTabName,
          route: path
        });
      } else {
        newTabName = _this.tabTow[indexs].name;
      }
      _this.editableTabsValue = newTabName;
    },

    /**
     *  点击Tab跳路由
     * */
    jimp(tarindex) {
      let _this = this;
      let leftData = _this.leftData; //获取第外数组
      for (var i = 0; i < leftData.length; i++) {
        var leData = leftData[i].essentialData; //获取第内数组
        for (var e = 0; e < leData.length; e++) {
          var title = leData[e].dataName; //获取第内数组的名字
          var route = leData[e].dataRoute; //获取第内数组的路由
          if (title == tarindex.label) {
            //判断第二数组的名字与Tab标签的名字一样
            _this.$router.replace(route); ///使用replace ，跳转到指定url路径
            console.log(route);
            _this.aindex = route; // 侧边栏菜单默认打开位置
          }
        }
      }
    },
    /*
     *点击删除tabs标签
     */
    removeTab(targetName) {
      let _this = this;
      let tabs = _this.tabTow; //得到tabTow数组
      let activeName = _this.editableTabsValue; //得到editableTabs数组内容的位置
      let leftData = _this.leftData; //获取第外数组
      for (var i = 0; i < leftData.length; i++) {
        var leData = leftData[i].essentialData; //获取第内数组

        for (var e = 0; e < leData.length; e++) {
          var route = leData[e].dataRoute; //获取内数组的路由
        }
      }

      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];

            if (nextTab) {
              activeName = nextTab.name;
              _this.$router.replace(nextTab.route);
              _this.aindex = nextTab.route;
            }
          }
        });
      }
      _this.editableTabsValue = activeName;

      _this.tabTow = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  .left {
    background-color: #545c64;
    .el-menu {
      border: none;
    }
    
    .el-menu-item {
      color: #ccc;
      background-color: #545c64;
      padding-right:0px; 
    }
    .el-submenu,
    .el-menu-item-group {
      background-color: #545c64;
    }
    /deep/.el-submenu__title {
      color: #ccc;
    }
   
  }
  .el-header {
    background-color: #545c64;
    padding: 0px !important;
    display: flex;

    /deep/ .el-tabs__item {
      color: white;
    }
    /deep/.el-tabs__item.is-active {
      color: #545c64;
    }
    .center {
      flex: 1;
      width: 75%;
      margin-top: 19px;

      /deep/.is-top {
        border-bottom: 0px;
        margin-bottom: 0px;
      }

      /deep/.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
        border-bottom-color: white;
        background-color: white;
      }
    }

    .el-button {
      background-color: black;
      padding: 24px 10px 22px 10px;
    }
    /deep/.el-button:hover {
      background-color: black;
    }
    .right-down {
      margin: auto 15px;
      height: 40px;
      overflow: hidden;
      .el-avatar {
        vertical-align: middle;
      }
    }
  }
}
/deep/ .el-menu-item.is-active {
  color: white;
  background-color: black !important;
   .triangle {
      float: right;
      width: 0;
      height: 0;
      border-right: 20px solid white;
      border-top: 25px solid transparent;
      border-bottom: 25px solid transparent;
    }
}

/deep/.el-submenu__title:hover {
  color: white;
  background-color: black;
}

.el-menu-item-group /deep/a {
  text-decoration: none;
}
</style>
