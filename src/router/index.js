import Vue from 'vue'
import Router from 'vue-router'
import CareerList from '@/components/career/CareerList'
import MyPosted from '@/components/myPosted/myPosted'
import CareerDetail from '@/components/career/CareerDetail'
import ResumeDetail from '@/components/myPosted/ResumeDetail'
import Enterprise from '@/components/company/Enterprise'
import Release from '@/components/company/Release'
Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'CareerList',
      component: CareerList
    },
    {
      path: '/mypost',
      name: 'MyPosted',
      component: MyPosted
    },
    {
		path:'/careerdetail',
		name:'CareerDetail',
		component:CareerDetail
    },
    {
		path:'/resumedetail',
		name:'ResumeDetail',
		component:ResumeDetail
    },
    {
		path:'/enterprise',
		name:'Enterprise',
    component:Enterprise
    },
    {
		path:'/release',
		name:'Release',
		component:Release
    }
  ]
})
