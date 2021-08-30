<template>
  <div>
    <!-- header -->
    <el-row class="container">
      <div class="header">
        <el-col>
          <div class="logo-wrap">
            <router-link :to="{ name: 'main' }">
              <img src="@/assets/img/logo_jjd.png" alt="로고" />
            </router-link>
          </div>
        </el-col>
      </div>
    </el-row>
    <el-row>
      <el-col>
        <div class="nav">
          <router-link type="success" :to="{ name: 'main' }"
            >porfolio</router-link
          >
          <router-link type="success" :to="{ name: 'about' }"
            >about me</router-link
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  height: 80px;
  margin: 10px 0;

  .logo-wrap {
    width: 80px;
    a {
      display: block;
    }
    img {
      width: 100%;
    }
  }
}
.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 20px;
  font-size: 20px;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
