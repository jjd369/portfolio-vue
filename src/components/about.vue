<template>
  <div class="container">
    <el-row type="flex" justify="center">
      <el-col :span="24">
        <div class="img-wrap">
          <img src="@/assets/img/about.png" alt="소개 사진" />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <ul class="mx-auto">
          <li><h2>PROFILE</h2></li>
          <li>장종두 Jang Jond Du</li>
          <li>1993.05.12</li>
          <li>종로 하이미디어 UI/UX 반응형 웹디자인&웹퍼블리셔 과정수료</li>
        </ul>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>전화번호 : 010-9335-2795</div>
        <div>Email : ghana369@gmail.com</div>
      </el-col>
    </el-row>
    <template v-for="(arr, index) in skills" :key="index">
      <el-row>
        <el-col>
          <h2>{{ arr.title }}</h2>
          <el-rate
            v-model="arr.val"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="`${arr.val} points`"
          >
          </el-rate>
        </el-col>
        <el-col>
          <ul class="skills_text">
            <li>HTMl및 XHTML를 이용한 하드코딩과</li>
            <li>
              CSS3와 Bootstrap를 이용하여 반응형 레이아웃을 제작할수 있으며,
            </li>
            <li>
              Js/jQuery를 이용하여 홈페이지내 동작들을 구현하고,원하는
              플러그인들을 접목시킬수있습니다.
            </li>
            <li>
              또한 vue.js의 대한 기본적인 이해를 통해 웹퍼블리셔의 기본적인
              개념지식을 넓히고자 합니다.
            </li>
          </ul>
        </el-col>
      </el-row>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          title: "HTML",
          val: 3.7,
        },
        {
          title: "CSS",
          val: 3.7,
        },
        {
          title: "JS",
          val: 3.7,
        },
        {
          title: "VUE",
          val: 3.7,
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 50px;
}
</style>
