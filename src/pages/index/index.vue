<template>
  <!--  <view class="index">
    <NumberDisplay/>
    <NumberSubmit/>
  </view>-->
  <view class="index">
    <view class="title">
      问答模块案例
    </view>
    <view
      v-for="(item,index) in getQuestions"
      :key="index"
      class="questions"
    >
      <view class="left">
        <view class="question">
          {{ item.title }}
        </view>
        <view class="answer">
          {{ item.answer }}
        </view>
      </view>
      <view class="right">
        <image src="../../images/dz.jpeg" class="img" @tap="zan(item.id,1)"/>
        {{item.vote}}
        <image src="../../images/no.jpeg" class="img" @tap="zan(item.id,2)"/>
      </view>
    </view>
    <QuestionDialog v-show="getDialogShow" />
    <button
      class="btn-question"
      @tap="openDialog()"
    >
      添加问题
    </button>
  </view>
</template>

<script>
/*import NumberDisplay from '../../components/NumberDisplay.vue'
import NumberSubmit from '../../components/NumberSubmit.vue'*/
import QuestionDialog from "../../components/QuestionDialog";

export default {
  name: 'Index',
  components: {
    QuestionDialog
    /*NumberDisplay,
    NumberSubmit*/
  },
  computed: {
    getDialogShow() {
      //alert(this.$store.getters.getDialogShow)
      return this.$store.getters.getDialogShow;
    },
    getQuestions(){
      return this.$store.getters.getQuestions.sort((a, b) => {
        return b.vote - a.vote;
      });
    }
  },
  methods: {
    openDialog() {
      //this.dialogShow=true
      this.$store.dispatch('changeDialogShow', true)
      console.info('添加问题')
    },
    zan(id,type){
      console.log('zan,id:'+id)
      this.$store.getters.getQuestions.map((item) =>{
        if(item.id === id && type === 1){
          item.vote=item.vote+1;
        }
        if(item.id === id && type === 2){
          let num=item.vote-1;
          item.vote=num <0 ? 0 : num;
        }
      });
    }
  }
}
</script>

<style>
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
