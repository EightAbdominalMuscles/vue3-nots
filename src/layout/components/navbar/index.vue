<template>
  <div class="navbar">
    <div class="left_side">
      <el-space>
        <img
          alt="logo"
          src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        />
      </el-space>
    </div>
    <div class="right_side"></div>
  </div>
</template>
<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  height: 100%;
  background-color: red;
}
.left_side {
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.right_side {
  display: flex;
  padding-right: 20px;
  list-style: none;
}
</style>