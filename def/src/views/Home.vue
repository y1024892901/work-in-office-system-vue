<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router unique-opened>
            <el-submenu index="1" :index="index+''" v-for="(item,index) in routes" :key="index" v-if="!item.hidden">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="children.path" v-for="(children,index) in item.children">
                  {{children.name}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!--主显示-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "Home",
    computed:{
      routes(){
        return this.$store.state.routes;
      }
    }
  }
</script>

<style scoped>

</style>