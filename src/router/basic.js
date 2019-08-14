import Cpasd from '@/views/basic/ChangePassword.vue'
import Cmant from '@/views/basic/ClassManagement.vue'
import Smant from '@/views/basic/StudentManagement.vue'
import Tmant from '@/views/basic/TeacherManagement.vue'
import HomPa from '@/views/basic/HomePage.vue'
export default [{
    path: '/Cpasd',
    name: 'Cpasd',
    component: Cpasd
  },
  {
    path: '/Cmant',
    name: 'Cmant',
    component: Cmant
  },
  {
    path: '/Smant',
    name: 'Smant',
    component: Smant
  },
  {
    path: '/Tmant',
    name: 'Tmant',
    component: Tmant
  },
  {
    path: '/HomPa',
    name: 'HomPa',
    component: HomPa
  }
]
