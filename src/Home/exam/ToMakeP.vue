<template>
  <div>
    <h1>
      制作试卷
    </h1>
    <div style="margin-bottom: 20px;">
      <el-button size="small" @click="addTab(editableTabsValue,index)" v-for="(value,index) in editableTabs">
        {{ value.title}}
      </el-button>
    </div>

      <el-tab-pane v-for="(item,index) in  tabTow" :key="index" :label="item.title" :name="item.name">
        {{item.content}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        editableTabsValue: '1',   //默认选择的Tab
        editableTabs: [{
            title: '主页',
            name: '1',
            content: '主页下的内容'
          }, {
            title: '页面1',
            name: '2',
            content: 'Tab 1 content'
          }, {
            title: '页面2',
            name: '3',
            content: 'Tab 2 content'
          },
          {
            title: '页面3',
            name: '4',
            content: 'Tab 3 content'
          }, {
            title: '页面4',
            name: '5',
            content: 'Tab 4 content'
          }
        ],
        tabTow: [{
          title: '主页',
          name: '1',
          content: '主页下的内容'
        }],
        tabIndex: 1 //用于添加tab标签页，从什么地方开始
      }
    },
    methods: {
      addTab(targetName, index) {
        /**
        *点击添加到Tab标签页
        */
        let _this = this;
        let Title = _this.editableTabs[index].title
        let Name = _this.editableTabs[index].name
        let Content = _this.editableTabs[index].content

        let indexs = _this.tabTow.findIndex(
          item => item.name == Name
        );
        
        if (indexs == -1) {
          _this.tabTow.push({
            title: Title,
            name: Name,
            content: Content
          });
        }
        _this.editableTabsValue = Name;
      },
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
    }
  }

</script>

<style>

</style>
