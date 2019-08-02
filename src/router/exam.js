import Arrge from '@/Home/exam/ArrangeATest.vue'
import Cresu from '@/Home/exam/CheckResults.vue'
import Exama from '@/Home/exam/ExamMana.vue'
import Markg from '@/Home/exam/MarkingEP.vue'
import Tomak from '@/Home/exam/ToMakeP.vue'

export default
  [{
      path: '/Arrge',
      name: 'Arrge',
      component: Arrge
    },
    {
      path: '/Cresu',
      name: 'Cresu',
      component: Cresu
    },
    {
      path: '/Exama',
      name: 'Exama',
      component: Exama
    },
    {
      path: '/Markg',
      name: 'Markg',
      component: Markg
    },
    {
        path: '/Tomak',
        name: 'Tomak',
        component: Tomak
      }
  ]
