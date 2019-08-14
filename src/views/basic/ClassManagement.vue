<template>
  <div id="CMant">
    <el-breadcrumb>
      <el-breadcrumb-item>
        <a>基础数据</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>班级管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-table 
    :data="tableData"
     border 
     style="width: 100%"
     >
      <!-- sortable：对应列是否可以排序 -->
      <el-table-column prop="classCourseId" sortable label="编号" width="100"></el-table-column>
      <el-table-column prop="className" sortable label="班级名称"></el-table-column>
      <el-table-column prop="courseName" sortable label="专业名称"></el-table-column>
      <el-table-column prop="userName" sortable label="老师名称"></el-table-column>
      <el-table-column prop="classStudents" sortable label="班级人数"></el-table-column>
      <el-table-column prop="classCreateTime" sortable label="开班时间"></el-table-column>
      <el-table-column label="操作" width="160">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          classId: 489, //班级主键编号
          className: "web-20班", //班级名称
          classTeacherId: 1092, //老师编号
          userName: "小欧阳", //老师名称
          classCourseId: 1, //专业编号
          courseName: "Web前端开发", //专业名称
          classStudents: 3, //班级人数
          classCreateTime: "2019-07-28" //班级创建日期
        },{
          classId: 482, //班级主键编号
          className: "web-21班", //班级名称
          classTeacherId: 1091, //老师编号
          userName: "小阳", //老师名称
          classCourseId: 2, //专业编号
          courseName: "Web前端发", //专业名称
          classStudents: 6, //班级人数
          classCreateTime: "2019-07-08" //班级创建日期
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="less" scoped>
#CMant {
  .el-breadcrumb {
    margin-bottom: 15px;
  }
}
</style>