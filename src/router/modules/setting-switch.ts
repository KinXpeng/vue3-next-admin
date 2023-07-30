import Layout from '@/layout/index.vue'
const SettingSwitch = {
  path: '/setting-switch',
  component: Layout,
  alwaysShow: true,
  meta: { title: 'Setting Switch', elSvgIcon: 'Setting' },
  children: [
    {
      path: 'index',
      component: () => import('@/views/setting-switch/index.vue'),
      name: 'SettingSwitch',
      meta: { title: 'Setting Switch', elSvgIcon: 'Setting' }
    }
  ]
}
export default SettingSwitch