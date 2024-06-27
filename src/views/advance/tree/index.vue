<script setup lang="ts">
import { ref } from 'vue'
import { TreeList } from '@/components/treeList'
import { Search } from '@element-plus/icons-vue'

const filterRulesValue = ref<string>('') // 过滤规则

// 行政区划信息
const treeList = ref([
  {
    label: '河北省',
    id: 1,
    children: [
      {
        label: '石家庄',
        id: 11,
        children: [
          {
            label: '长安区',
            id: 111
          },
          {
            label: '裕华区',
            id: 112
          },
          {
            label: '桥西区',
            id: 113
          },
          {
            label: '新华区',
            id: 114,
            children: [
              {
                label: '街道办1',
                id: 1141
              },
              {
                label: '街道办2',
                id: 1142
              }
            ]
          }
        ]
      },
      {
        label: '邢台',
        id: 12,

        children: [
          {
            label: '宁晋',
            id: 121
          }
        ]
      },
      {
        label: '衡水',
        id: 13
      },
      {
        label: '唐山',
        id: 14,
        children: [
          {
            label: '丰润区',
            id: 141
          },
          {
            label: '唐都区',
            id: 142
          }
        ]
      }
    ]
  },
  {
    label: '北京市',
    id: 2,
    children: [
      {
        label: '东城区',
        id: 21
      },
      {
        label: '朝阳区',
        id: 22
      },
      {
        label: '顺义区',
        id: 23
      },
      {
        label: '丰台区',
        id: 24
      }
    ]
  }
])

// 点击
const handleNodeClick = (item: any) => {
  console.log('item------', item)
}


</script>

<template>
  <div class="system-user-container layout-padding">
    <el-card shadow="hover" class="layout-padding-auto" style="overflow-y: auto">
      <el-input v-model="filterRulesValue" style="margin-bottom: 10px;" placeholder="请输入" :suffix-icon="Search" />
      <TreeList :data="treeList" @node-click="handleNodeClick" :filterKeyword="filterRulesValue">
        <!-- <template #icon-expand>
            <span>?</span>
          </template> -->
        <template #label="{ node }">
          <div class="flex justify-between w-full">
            <span>{{ node.label }}</span>
          </div>
        </template>
      </TreeList>
    </el-card>
  </div>
</template>

<style lang="scss" scoped></style>
