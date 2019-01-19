<template>
    <nav>
        <el-popover>
            <div>
               <div id="google_translate_element"></div>
            </div>
              <el-button slot="reference"  size="small">Switch language</el-button>  
        </el-popover>
    </nav>
</template>
<script>
export default {
    props:['select'],
    data(){
        return{
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
<style lang="scss">
nav {
    background: #f5f5f5;
    border-bottom: 1px solid #e1e1e2;
    height: 45px;
    line-height: 45px;
    padding-left: 10px;
}
.goog-te-banner-frame{
    display: none !important;
}
body{
    top:0px !important;
}
</style>

