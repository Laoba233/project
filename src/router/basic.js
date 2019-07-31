import Cpasd from '../Home/basic/ChangePassword.vue'
import Cmant from '../Home/basic/ClassManagement.vue'
import Smant from '../Home/basic/StudentManagement.vue'
import Tmant from '../Home/basic/TeacherManagement.vue'

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
  }
]
