<template>
  <div class="system-user-container layout-padding">
    <el-card shadow="hover" class="layout-padding-auto">
      <div class="system-user-search mb15">
        <el-input size="default" placeholder="请输入用户名称" style="max-width: 180px"> </el-input>
        <el-button size="default" type="primary" class="ml10">
          <el-icon>
            <ele-Search />
          </el-icon>
          查询
        </el-button>
        <el-button size="default" type="success" class="ml10" @click="onOpenAddUser('add')">
          <el-icon>
            <ele-FolderAdd />
          </el-icon>
          新增用户
        </el-button>
      </div>
      <el-table :data="state.tableData.data" v-loading="state.tableData.loading" style="width: 100%">
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="userName" label="用户名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="idCardNo" label="身份证号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="sex" label="性别" show-overflow-tooltip></el-table-column>
        <el-table-column prop="age" label="年龄" show-overflow-tooltip></el-table-column>
        <el-table-column prop="phone" label="手机号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="status" label="用户状态" show-overflow-tooltip>
          <template #default="scope">
            <el-tag type="success" v-if="scope.row.status">启用</el-tag>
            <el-tag type="info" v-else>禁用</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="describe" label="用户描述" show-overflow-tooltip></el-table-column>
        <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="100">

          <template #default="scope">
            <el-button :disabled="scope.row.userName === 'admin'" size="small" text type="primary"
              @click="onOpenEditUser('edit', scope.row)">修改</el-button>
            <el-button :disabled="scope.row.userName === 'admin'" size="small" text type="primary"
              @click="onRowDel(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="onHandleSizeChange" @current-change="onHandleCurrentChange" class="mt15"
        :pager-count="5" :page-sizes="[10, 20, 30]" v-model:current-page="state.tableData.param.pageNum" background
        v-model:page-size="state.tableData.param.pageSize" layout="total, sizes, prev, pager, next, jumper"
        :total="state.tableData.total">
      </el-pagination>
    </el-card>
    <UserDialog ref="userDialogRef" @refresh="getRefresh" />
  </div>
</template>

<script setup lang="ts" name="systemUser">
import { defineAsyncComponent, reactive, onMounted, ref } from 'vue';
import { ElMessageBox, ElMessage } from 'element-plus';

// 引入组件
const UserDialog = defineAsyncComponent(() => import('@/views/form/matter/dialog.vue'));

// 定义变量内容
interface UserState {
  userName: string
  idCardNo: string
  sex: string
  age: string
  phone: string
  email: string
  status: boolean
  describe: string
  createTime: string
  [propname: string]: any
}
const userDialogRef = ref();
const state = reactive({
  tableData: {
    data: [] as UserState[],
    total: 0,
    loading: false,
    param: {
      pageNum: 1,
      pageSize: 10,
    },
  },
});

// 用户数据
// const userInfo = ref({
//   userName: '',
//   idCardNo: '',
//   sex: '',
//   age: '',
//   phone: '',
//   email: '',
//   status: true,
//   describe: '',
//   createTime: '',
// })

// 初始化表格数据
const getTableData = () => {
  // state.tableData.loading = true;
  state.tableData.total = state.tableData.data.length;
};

// 打开新增用户弹窗
const onOpenAddUser = (type: string) => {
  userDialogRef.value.openDialog(type);
};

// 打开修改用户弹窗
const onOpenEditUser = (type: string, row: UserState) => {
  userDialogRef.value.openDialog(type, row);
};

// 添加、修改用户
const getRefresh = (type: string, row: UserState) => {
  console.log(type, row);
  if (type === 'add') {
    state.tableData.data.push(row)
  }
  getTableData()
}

// 删除用户
const onRowDel = (index: number, row: UserState) => {
  ElMessageBox.confirm(`此操作将永久删除用户：“${row.userName}”，是否继续?`, '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      state.tableData.data.splice(index, 1)
      getTableData();
      ElMessage.success('删除成功');
    })
    .catch(() => { });
};
// 分页改变
const onHandleSizeChange = (val: number) => {
  state.tableData.param.pageSize = val;
  getTableData();
};
// 分页改变
const onHandleCurrentChange = (val: number) => {
  state.tableData.param.pageNum = val;
  getTableData();
};
// 页面加载时
onMounted(() => {
  getTableData();
});
</script>

<style scoped lang="scss">
.system-user-container {
  :deep(.el-card__body) {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;

    .el-table {
      flex: 1;
    }
  }
}
</style>
