<template>
  <view class="dialog">
    <view class="body">
      <input class="question-title" placeholder="请输入问题" v-model="title">
      <input class="question-answer" placeholder="请输入答案" v-model="answer">
      <button class="ok" @tap="addQuestion()">确定</button>
      <button class="cancle" @tap="cancle()">取消</button>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";

export default {
  name: "QuestionDialog",
  data() {
    return {
      title: '',
      answer: ''
    }
  },
  methods: {
    cancle() {
      console.info('cancle')
      this.$store.dispatch('changeDialogShow', false)
    },
    addQuestion() {
      console.info('addQuestion')
      console.info(this.title)
      console.info(this.answer)
      if (this.title && this.answer) {
        //生成id随机数
        let Range = 100000 - 1;
        let Rand = Math.random();
        let genRandom = 100000 + Math.round(Rand * Range);

        console.log('genRandom:' + genRandom)
        const question = {
          id: genRandom,
          title: this.title,
          answer: this.answer,
          vote: 0
        }
        console.log('answer:' + this.answer)
        console.log(question)
        this.$store.dispatch('addQuestions', question)
        console.log(this.$store.getters.getQuestions)

      } else {

        Taro.showToast({
          title: '请输入标题和答案',
          icon: "none"
        })

      }

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
