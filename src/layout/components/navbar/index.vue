<template>
  <div class="navbar">
    <div class="left_side">
      <el-space>
        <img src="./logo.png" alt="logo" />
        <span class="typography-title">MyNewstore</span>
      </el-space>
    </div>
    <ul class="right_side">
      <li>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <span class="user_name">{{ 'admin' }} </span>
            <img class="avatar" src="./cover.jpg" alt="" />
            <el-icon><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="editPassword">修改密码 </el-dropdown-item>
              <el-dropdown-item command="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    height: 100%;
    background-color: #fff;
    border-bottom: 1px solid rgb(0 0 0 / 5%);
  }
  .left_side {
    display: flex;
    align-items: center;
    padding-left: 40px;
    .typography-title {
      text-align: center;
      font-size: 24px;
      font-weight: 600;
      font-weight: bolder;
      color: rgb(51 51 51);
      margin-left: 16px;
    }
  }

  .right_side {
    display: flex;
    padding-right: 40px;
    list-style: none;

    .avatar {
      width: 53px;
      height: 53px;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
      vertical-align: middle;
      margin: 0 10px;
    }
    .user_name {
      font-size: 16px;
      font-weight: 700;
    }
    .el-dropdown-link {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
  }
</style>
