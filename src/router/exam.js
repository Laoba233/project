import Arrge from '@/views/exam/ArrangeATest.vue'
import Cresu from '@/views/exam/CheckResults.vue'
import Exama from '@/views/exam/ExamMana.vue'
import Markg from '@/views/exam/MarkingEP.vue'
import Tomak from '@/views/exam/ToMakeP.vue'

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
