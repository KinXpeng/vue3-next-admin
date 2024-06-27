<script setup lang="ts">
// @ts-nocheck
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import type { IProps, ITreeItem } from './types'
import plusIcon from '@/assets/imgs/advance/tree/plus.png'
import minusIcon from '@/assets/imgs/advance/tree/minus.png'

const props = defineProps({
  // 树列表数据
  data: {
    type: Array as PropType<ITreeItem[]>,
    default: () => []
  },

  // 配置项
  defaultProps: {
    type: Object as PropType<IProps>,
    default: () => {
      return {
        label: 'label',
        children: 'children'
      }
    }
  },

  // 每级之间缩进距离
  indentWidth: {
    type: String,
    default: '10'
  },

  // node的高度，默认为30
  height: {
    type: String,
    default: '30'
  },

  // 是否全部展开
  expandAll: {
    type: Boolean,
    default: false
  },

  // 是否在点击节点时展开
  expandOnClickNode: {
    type: Boolean,
    default: true
  },

  // 过滤关键词
  filterKeyword: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['expand', 'collapse', 'node-click'])

// node节点
const nodeRef = ref<HTMLElement | null>(null)

// node节点高度
const nodeHeight = computed(() => {
  if (nodeRef.value) {
    const nodeItem = nodeRef.value[0]
    return nodeItem.offsetHeight
  }
  return 0
})

// 初始化数据
const handleRecursionList = (list) => {
  list.forEach((item: ITreeItem) => {
    item._expand = props.expandAll
    item._label = item[props.defaultProps.label]
    item._children = item[props.defaultProps.children]
    if (item._children && item._children.length) {
      handleRecursionList(item._children)
    }
  })
}
handleRecursionList(props.data)

// toggle
const handleToggle = (item) => {
  if (item._children && item._children.length) {
    item._expand = !item._expand
    if (item._expand) {
      emit('expand', item)
    } else {
      emit('collapse', item)
    }
  }
}

// 计算展开的子节点数量
const countExpandedChildren = (tree) => {
  let count = 0
  const traverse = (node) => {
    if (node._expand && node._children) {
      count += node._children.length
      node._children.forEach(traverse)
    }
  }
  tree.forEach(traverse)
  return count
}

// label点击展开
const handleLabelClick = (item) => {
  handleNodeClick(item)
  if (props.expandOnClickNode && item._children && item._children.length) {
    handleToggle(item)
  }
}

// node节点点击
const handleNodeClick = (item) => {
  emit('node-click', item)
}

// node节点展开
const handleNodeExpand = (item) => {
  emit('expand', item)
}

// node节点收起
const handleNodeCollapse = (item) => {
  emit('collapse', item)
}

// 树节点过滤
const filterNodes = (tree: ITreeItem[], keyword: string) => {
  if (!keyword) {
    return props.data
  }

  function containsDistrict(node) {
    node._expand = true
    if (node._label.includes(keyword)) {
      return true
    }
    if (node._children) {
      for (let child of node._children) {
        if (containsDistrict(child)) {
          return true
        }
      }
    }
    return false
  }

  function filterTree(node) {
    if (!containsDistrict(node)) {
      return null
    }
    let filteredNode = { ...node }
    filteredNode._expand = true
    if (node._children) {
      filteredNode._children = node._children
        .map((child) => filterTree(child))
        .filter((child) => child !== null)
    }
    return filteredNode
  }

  return tree.map((node) => filterTree(node)).filter((node) => node !== null)
}

// 过滤后的树节点数据
const _treeData = computed(() => {
  return filterNodes(props.data, props.filterKeyword)
})
</script>

<template>
  <div class="tree-list" v-for="item in _treeData" :key="item.id">
    <!-- label部分 -->
    <div class="list-label" :style="{ 'padding-left': `${indentWidth}px`, height: `${height}px` }" ref="nodeRef">
      <div class="left-icon" @click="handleToggle(item)">
        <div class="icon-wrap" v-if="item._children && item._children.length">
          <div v-if="item._expand">
            <slot name="icon-expand">
              <img class="icon-minus" :src="minusIcon" />
            </slot>
          </div>
          <div v-else>
            <slot name="icon-collapse">
              <img class="icon-plus" :src="plusIcon" />
            </slot>
          </div>
        </div>
        <div class="icon-wrap icon-none" v-else></div>
      </div>
      <div class="right-label" @click="handleLabelClick(item)">
        <slot name="label" :node="item">{{ item.label }}</slot>
      </div>
    </div>

    <!-- children部分 -->
    <div v-if="item._children && item._children.length" :class="['child-wrap']" :style="{
    'padding-left': `${indentWidth}px`,
    height: `${item._expand ? nodeHeight * countExpandedChildren([item]) : 0}px`
  }">
      <treeList :data="item._children" :expandAll="expandAll" :defaultProps="defaultProps"
        :expandOnClickNode="expandOnClickNode" :height="height" :filterKeyword="filterKeyword"
        @expand="handleNodeExpand" @collapse="handleNodeCollapse" @node-click="handleNodeClick">
        <template #label="{ node }">
          <slot name="label" :node="node">{{ node.label }}</slot>
        </template>
        <template #icon-expand>
          <slot name="icon-expand">
            <img class="icon-minus" :src="minusIcon" />
          </slot>
        </template>
        <template #icon-collapse>
          <slot name="icon-collapse">
            <img class="icon-plus" :src="plusIcon" />
          </slot>
        </template>
      </treeList>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tree-list {
  cursor: default;
  user-select: none;

  // item-label
  .list-label {
    display: flex;

    &:hover {
      background-color: #f5f7fa;
    }
  }

  // expand-icon
  .left-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 10px;
      height: 10px;
      margin-right: 6px;
      cursor: pointer;

      &.icon-none {
        cursor: default;
      }

      .icon-plus,
      .icon-minus {
        width: 10px;
        height: 10px;
      }
    }
  }

  // label
  .right-label {
    display: flex;
    width: 100%;
    margin-right: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    align-items: center;
  }

  // children
  .child-wrap {
    overflow: hidden;
    transition: 0.3s;
  }
}
</style>
