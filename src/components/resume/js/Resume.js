export default {
  name: 'careerList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }		
  },
  methods:{
		showEdit: function(){
            $('.eid').click(function(){
            	$('.jingli').css('display','block');
            })
        }
	}
}