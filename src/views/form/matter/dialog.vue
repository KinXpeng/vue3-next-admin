<template>
  <div class="system-user-dialog-container">
    <el-dialog :title="state.dialog.title" v-model="state.dialog.isShowDialog" width="769px">
      <el-form ref="userDialogFormRef" :model="state.ruleForm" size="default" label-width="90px">
        <el-row :gutter="35">
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
            <el-form-item label="用户名">
              <el-input v-model="state.ruleForm.userName" placeholder="请输入用户名" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
            <el-form-item label="身份证号">
              <el-input v-model="state.ruleForm.idCardNo" placeholder="请输入身份证号" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
            <el-form-item label="性别">
              <el-select v-model="state.ruleForm.sex" placeholder="请选择性别" clearable class="w100">
                <el-option label="男" value="1"></el-option>
                <el-option label="女" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
            <el-form-item label="年龄">
              <el-input v-model="state.ruleForm.age" placeholder="请输入年龄" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
            <el-form-item label="手机号">
              <el-input v-model="state.ruleForm.phone" placeholder="请输入手机号" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
            <el-form-item label="邮箱">
              <el-input v-model="state.ruleForm.email" placeholder="请输入邮箱" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12" class="mb20">
            <el-form-item label="用户状态">
              <el-switch v-model="state.ruleForm.status" inline-prompt active-text="启" inactive-text="禁"></el-switch>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mb20">
            <el-form-item label="用户描述">
              <el-input v-model="state.ruleForm.describe" type="textarea" placeholder="请输入用户描述"
                maxlength="150"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="onCancel" size="default">取 消</el-button>
          <el-button type="primary" @click="onSubmit" size="default">{{ state.dialog.submitTxt }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="systemUserDialog">
import { reactive, ref } from 'vue';

// 定义子组件向父组件传值/事件
const emit = defineEmits(['refresh']);

// 定义变量内容
const userDialogFormRef = ref();
const state = reactive({
  ruleForm: {
    userName: '',
    idCardNo: '',
    sex: '',
    age: '',
    phone: '',
    email: '',
    status: true,
    describe: '',
    createTime: '',
  },
  dialog: {
    isShowDialog: false,
    type: '',
    title: '',
    submitTxt: '',
  },
});

// 打开弹窗
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
const openDialog = (type: string, row: UserState) => {
  state.dialog.type = type
  if (type === 'edit') {
    state.ruleForm = row;
    state.dialog.title = '修改用户';
    state.dialog.submitTxt = '修 改';
  } else {
    state.dialog.title = '新增用户';
    state.dialog.submitTxt = '新 增';
    // 清空表单，此项需加表单验证才能使用
    state.ruleForm = {} as UserState
  }
  state.dialog.isShowDialog = true;
};
// 关闭弹窗
const closeDialog = () => {
  state.dialog.isShowDialog = false;
};
// 取消
const onCancel = () => {
  closeDialog();
};
// 提交
const onSubmit = () => {
  closeDialog();
  if (state.dialog.type === 'add') {
    emit('refresh', 'add', state.ruleForm);
  } else {
    emit('refresh', 'edit', state.ruleForm);
  }
};

// 暴露变量
defineExpose({
  openDialog,
});
</script>
