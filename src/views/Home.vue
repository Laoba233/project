<template>
  <div id="home">
    <el-container style="height: 100%; border: 1px solid #eee">
      <!-- //左边 -->
      <!-- 是否展开菜单 -->
      <el-menu default-active="1-4-1" 
      class="el-menu-vertical-demo"
      @open="handleOpen" 
      @close="handleClose"
      :default-openeds="['1', '2']"
      router
      :collapse="isCollapse">

        <el-menu-item>
          <img src="@/assets/logo.png" style="width: 30px; margin-right: 20px; ">
          <b><span style="font-size: 20px;" slot="title">教育系统</span></b>
        </el-menu-item>

        <el-submenu v-for="(itme,index) in leftData" :key="index" :index="''+(index+1)">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">{{ itme.name }}</span>
          </template>
          <el-menu-item-group v-for="(value,index) in itme.essentialData" :key="index">
              <el-menu-item :index='value.dataRoute' @click="addTab(value.dataName,value.dataRoute)">
                {{ value.dataName }}
              </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <!-- //控制合上关闭按钮 -->
      <el-container>
        <el-header>
          <div class="topLeft">
            <el-tooltip class="tooltip" effect="dark" :content="isCollapse?'展开':'收起'" placement="right">
              <el-button @click="isCollapse=!isCollapse" :icon="isCollapse?'el-icon-caret-right':'el-icon-caret-left'"
                style="color:#fff;border: 0;" />
            </el-tooltip>
          </div>
          <!-- tabs标签页 -->
          <div class="center" style="flex:1" >
              <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
                  <el-tab-pane v-for="(item,index) in  tabTow" :key="index" :label="item.title" :name="item.name">
                    {{item.content}}
                  </el-tab-pane>
                </el-tabs>
            </el-tabs>
          </div>
          <!-- 用户头像 -->
          <div class="right-down">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
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
        isCollapse: false,
        leftData: [{
            name: "基础数据",
            essentialData: [{
                dataName: "班级管理",
                dataRoute: "./Cmant"
              },
              {
                dataName: "教师管理",
                dataRoute: "./Tmant"
              },
              {
                dataName: "学生管理",
                dataRoute: "./Smant"
              },
              {
                dataName: "修改密码",
                dataRoute: "./Cpasd"
              }
            ]
          },
          {
            name: "在线测试",
            essentialData: [{
                dataName: "制作试卷",
                dataRoute: "./Tomak"
              },
              {
                dataName: "安排测试",
                dataRoute: "./Arrge"
              },
              {
                dataName: "试卷管理",
                dataRoute: "./Exama"
              },
              {
                dataName: "查看成绩",
                dataRoute: "./Cresu"
              },
              {
                dataName: "批阅试卷",
                dataRoute: "./Markg"
              }
            ]
          }
        ],
        editableTabsValue: '1', //默认选择的Tab
        tabTow: [{
          title: '主页',
        }],
        tabIndex: 1 //用于添加tab标签页，从什么地方开始
      }
    },
    methods: {
      addTitle(value, index) {
        console.log(value, index)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      /**
       *点击添加到Tab标签页
       */
      addTab(name, path) {
      let _this = this;
      let Title = name;
      let Name = path;
      let indexs = _this.tabTow.findIndex(
        item => item.name == Name
      );
      if (indexs == -1) {
        _this.tabTow.push({
          title: Title,
          name: Name
        });
      }
      _this.editableTabsValue = Name;
    },
    /*
    *点击删除tabs标签
    */
    removeTab(targetName) {
      let tabs = this.tabTow;
      let activeName = this.editableTabsValue;
      console.log(tabs)
      // console.log(activeName)
      console.log(tabs.forEach)
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            console.log(nextTab)
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      this.editableTabsValue = activeName;
      this.tabTow = tabs.filter(tab => tab.name !== targetName);
    }
    },
    
  };

</script>

<style lang="less" scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside,
  .el-menu-item,
  .is-active {
    color: #333 !important;
  }

  .el-menu-item-group /deep/a {
    text-decoration: none;
  }

  .el-header {
    padding: 0px !important;
  }
  .el-button {
    background-color: black !important;
    padding: 24px 10px 22px 10px !important;
  }

  .el-button:hover {
    background-color: black !important;
  }
  .el-header{
    display: flex;
  }

</style>
