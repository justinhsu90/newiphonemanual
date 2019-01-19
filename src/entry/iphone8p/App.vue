<template>
    <div id="app">
        <div>
        <section style="line-height:68px;padding-left:20px;">
            <h1 style="color:white;display:inline-block;">Apple phone screen change instructions</h1>       
            <el-select  style="margin-left:10px;float:right" size="small" v-model="select" @change="handlSelect">
            <el-option v-for="(v,i) in selectOption" :label="v.label" :value="v.value" :key="i"></el-option>
        </el-select>
        </section>
        <directiveNav></directiveNav>
     </div>   
        <div class="container">
            <div class="container-header"></div>
            <iphone8p></iphone8p>
        </div>
        <!-- <footer>Footer</footer> -->
    </div>
</template>
<script>
import iphone8p from '@/components/iphone8p';
import directiveNav from '@/common/nav'
export default {
     data(){
         return {
            select:'/iphone8p',
            selectOption:[{
                label:'iphone 6',
                value:'/'
            },
            {
                label:'iphone 6S',
                value:'/iphone6s'
            },
            {
                label:'iphone 6 Plus',
                value:'/iphone6p'
            },
            {
                label:'iphone 6S Plus',
                value:'/iphone6sp'
            },
            {
                label:'iphone 7 Plus',
                value:'/iphone7p'
            },
            {
                label:'iphone 8',
                value:'/iphone8'
            },
            {
                label:'iphone 8 Plus',
                value:'/iphone8p'
            },
            {
                label:'iphone SE/5S',
                value:'/iphonese'
            },
            // {
            //     label:'iphone X',
            //     value:'/iphoneX'
            // },
            ]
         }
     },
    components:{
        iphone8p,
        directiveNav
    },
    methods:{
        handlSelect(v){
            if(v == '/' ){
                 window.location.href = `/`;
          }else{
               window.location.href = `${v}.html`;
          }
        }
    }
}
</script>
<style lang="scss" type="text/scss">
@import "../../assets/scss/reset.scss";
section {
    height: 68px; 
    background-color: rgb(0,0,128);
}
nav {
    background: #f5f5f5;
    border-bottom: 1px solid #e1e1e2;
    height: 45px;
}
.container {
    margin: 0 auto;
    width: 981px;
}
.container-header {
    height: 50px;
    width: 961px;
    margin: 0 auto;
}
footer{
    height: 600px;
    background-color: rgba(36,39,42,.06);
    padding-top: 20px;
    font-size: 15px;
}
</style>
