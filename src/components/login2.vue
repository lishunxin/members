<template>
  <div id="login">
    <div>Join EPI</div>
    <div class="fang">
      <input type="text" v-model="fang" placeholder="方向:Web/C++/Java/Phyon"/>
      <label for="fang">E</label>
    </div>
    <div class="class">
      <input type="text" v-model="cname" placeholder="班级"/>
      <label for="class">P</label>
    </div>
    <div class="xuehao">
      <input type="number" placeholder="学号" v-model="teNum" @blur="login3" @focus="login4"/>
      <label for="xuehao" ref="calltip3">I</label>
    </div>
    <div class="name">
      <input type="text" placeholder="姓名" v-model="name" @focus="login7" />
      <label for="name">欢</label>
    </div>
    <div class="tel">
      <input type="number" placeholder="电话号码" v-model="telNum" @blur="login1" @focus="login6"/>
      <label for="tel" ref="calltip1">迎</label>
    </div>
    <!--<p class="calltip" ref="calltip1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*请输入有效的号码</p>-->
    <div class="qq">
      <input type="number" placeholder="QQ号码"  v-model="qqNum" @blur="login2" @focus="login5"/>
      <label for="qq" ref="calltip2">你</label>
    </div>
    <!--<p class="calltip" ref="calltip2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*请输入有效的qq</p>-->
    <div class="she">
      <input type="text" v-model="vname" placeholder="现加入的社团"/>
    </div>
    <div class="short">
      <input type="text" v-model="short" placeholder="个人优缺点"/>
    </div>
    <div class="why" >
      <input type="text" v-model="join" placeholder="为什么要加入我们"/>
    </div>
    <div class="button" @click="login">
      <span>确认提交</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  components: {
    qs
  },
  data () {
    return {
      direction: '',
      fang: '',
      cname: '',
      name: '',
      qqNum: '',
      telNum: '',
      teNum: '',
      vname: '',
      short: '',
      join: ''
    }
  },
  methods: {
    login1: function () {
      if (!(11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.telNum))) {
        this.$refs.calltip1.style.width = '4rem'
        this.$refs.calltip1.innerHTML = '号码不合格'
        this.telNum = ''
        return false
      }
    },
    login4: function () {
      this.$refs.calltip3.innerHTML = 'I'
      this.$refs.calltip3.style.width = '10%'
    },
    login2: function () {
      if (!(/^[1-9]\d{4,9}$/.test(this.qqNum))) {
        this.$refs.calltip2.style.width = '4rem'
        this.$refs.calltip2.innerHTML = 'qq不合格'
        this.qqNum = ''
        return false
      }
    },
    login5: function () {
      this.$refs.calltip2.innerHTML = '你'
      this.$refs.calltip2.style.width = '10%'
    },
    login6: function () {
      this.$refs.calltip1.innerHTML = '迎'
      this.$refs.calltip1.style.width = '10%'
    },
    login3: function () {
      if (!(/^\d{8}$/.test(this.teNum))) {
        this.$refs.calltip3.style.width = '4rem'
        this.$refs.calltip3.innerHTML = '学号不合格'
        this.teNum = null
        return false
      }
    },
    login7: function () {
      axios.post('http://222.24.28.182/isExists', {
        params: {
          number: this.teNum
        }
      }).then(function (response) {
        if (response.data === 1) {
          this.$refs.calltip3.style.width = '4rem'
          this.$refs.calltip3.innerHTML = response.msg
        }
      }).catch(function (response) {
        console.log(response)
      })
      // let data1 = ({
      //   number: this.teNum
      // })
      // axios({
      //   method: 'get',
      //   url: 'http://222.24.28.182/isExists',
      //   data: data1,
      //   headers: {'Content-Type': 'application/json'}
      // }).then((response) => {
      //   if (response.data === 0) {
      //     this.$refs.calltip3.style.width = '180px'
      //     this.$refs.calltip3.innerHTML = '学号不合格'
      //   }
      // }).catch(error => function () {
      //   console.log(error)
      // })
    },
    login: function () {
      // let data1 = {
      //   section: 0,
      //   category: this.fang,
      //   clazz: this.cname,
      //   number: this.teNum,
      //   myName: this.name,
      //   elephont: this.telNum,
      //   qqNum: this.qqNum,
      //   active: this.vname,
      //   myShow: this.short,
      //   joinCause: this.join
      // }
      axios({
        method: 'post',
        url: 'http://222.24.28.182/joinDataSoftware',
        data: {
          section: 0,
          category: this.fang,
          clazz: this.cname,
          number: this.teNum,
          myName: this.name,
          elephont: this.telNum,
          qqNum: this.qqNum,
          active: this.vname,
          myShow: this.short,
          joinCause: this.join
        },
        headers: {'Content-Type': 'application/json'}
      }).then((response) => {
      }).catch(error => function () {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
  #login{
    margin: 0 auto;
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
  input:nth-of-type(2) label:after{
    content:"\21";
  }
  input:nth-of-type(3) label:after{
    content:"\22";
  }
  input:nth-of-type(4) label:after{
    content:"\23";
  }
  #login input{
    position:relative;
    font-size:0.4rem;
    height:0.8rem;
    width:100%;
    padding-left:0.1rem;
    border:0.12rem solid #fff;
    border-radius:0.03rem;
    box-shadow:inset 0 0 0 1px #c0c0c0,inset 1px 2px 0 #e6e6e6,1px 2px 0 #c0c0c0,-1px 2px 0 #c0c0c0,2px 3px 0 #c0c0c0,-2px 3px 0 #c0c0c0,2px 12px 0 #c0c0c0,-2px 12px 0 #c0c0c0,0 2px 0 3px #979797,0 10px 0 3px #979797,-2px 15px 10px rgba(0,0,0,.6);
    -webkit-box-sizing:border-box;
    -moz-box-sizing:border-box;
    -o-box-sizing:border-box;
    -ms-box-sizing:border-box;
    box-sizing:border-box;
    -webkit-transition: all 0.1s ease-in;
    -moz-transition: all 0.1s ease-in;
    -ms-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
  }
  #login input:focus{
    outline: 0 none;
    top:0.02rem;
    box-shadow:inset 0 0 0 1px #c0c0c0,inset 1px 2px 0 #e6e6e6,1px 2px 0 #c0c0c0,-1px 2px 0 #c0c0c0,1px 3px 0 #c0c0c0,-2px 3px 0 #c0c0c0,2px 12px 0 #c0c0c0,-2px 12px 0 #c0c0c0,0 2px 0 3px #979797,0 10px 0 3px #979797,-2px 15px 10px rgba(0,0,0,.6);
  }
  #login input:focus + label{
    top:0;
  }
  ::-webkit-input-placeholder {
    color:#d94a2d;
    font-style:italic;
  }
  #login label{
    position:absolute;
    top:0.2rem;
    right:0.2rem;
    width:10%;
    line-height:0.7rem;
    height: 0.7rem;
    color:#f3f2f1;
    font-size: 0.7rem;
    text-shadow:0 3px 1px #9e2719;
    border:1px solid #dd684f;
    background-color: #e78d7b;
    background:-webkit-linear-gradient(top,#e78d7b 0,#dd684f 0.72rem);
    background:-moz-linear-gradient(top,#e78d7b 0,#dd684f 0.72rem);
    background:-o-linear-gradient(top,#e78d7b 0,#dd684f 0.72rem);
    background:-ms-linear-gradient(top,#e78d7b 0,#dd684f 0.72rem);
    background:linear-gradient(top,#e78d7b 0,#dd684f 0.72rem);
    box-shadow:0 14px 0 #9c2912,0 0 5px rgba(0,0,0,.3);
    -webkit-transition: all 0.1s ease-in;
    -moz-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;
    -ms-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
  }
  #login label:after{
    position:absolute;
    display:block;
    width: 0.74rem;
    text-align: center;
    font: normal normal 0.3rem/0.56rem 'icomoon';
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  .fang,.class,.xuehao,.name,.tel,.qq{
    position: relative;
    margin-top: 0.2rem;
  }
  .fang input,.class input,.xuehao input,.name input,.tel input,.qq input{
    border: none;
    zoom:1;
    outline: medium;
    outline: none;
    text-align: center;
    background:rgba(0, 0, 0, 0);
  }
  .she,.short,.why{
    margin-top: 0.2rem;
  }
  .button{
    margin-top: 1rem;
    display: inline-block;
    /*   margin: 15px 15px 0;
      padding: .6em 1.1em; */
    /*font-size: 12px;*/
    font-size: 1rem;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #fe4365;
    border-radius: 3px;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    -webkit-box-shadow: 0 0 0 -2px #cff09e, 0 0 0 -1px #fe4365;
    box-shadow: 0 0 0 -2px #cff09e, 0 0 0 -1px #fe4365;
    border: none;
    -webkit-transition: -webkit-box-shadow .3s;
    transition: box-shadow .3s;
  }
  .button:hover, .button:focus {
    -webkit-box-shadow: 0 0 0 2px #cff09e, 0 0 0 4px #ff0364;
    box-shadow: 0 0 0 0.5px rgb(1, 190, 188), 0 0 0 0.5px #19C1C0;
    -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    -webkit-animation: gelatine 0.5s 1;
    animation: gelatine 0.5s 1;
    /* -webkit-box-shadow: 0 0 0 2px #cff09e, 0 0 0 4px #ff0364;
    box-shadow: 0 0 0 2px #cff09e, 0 0 0 4px #ff0364;
    -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
    -webkit-animation: gelatine 0.5s 1;
    animation: gelatine 0.5s 1; */
  }

  .button:active {
    background: #4ecdc4;
    -webkit-transition-duration: 0;
    transition-duration: 0;
    -webkit-box-shadow: 0 0 0 2px #cff09e, 0 0 0 4px #3ac7bd;
    box-shadow: 0 0 0 2px #cff09e, 0 0 0 4px #3ac7bd;
  }
  @keyframes gelatine {
    from, to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    25% {
      -webkit-transform: scale(0.9, 1.05);
      transform: scale(0.9, 1.1);
    }

    50% {
      -webkit-transform: scale(1.1, 0.9);
      transform: scale(1.1, 0.9);
    }

    75% {
      -webkit-transform: scale(0.95, 1.05);
      transform: scale(0.95, 1.05);
    }

    from, to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    25% {
      -webkit-transform: scale(0.98, 1.01);
      transform: scale(0.98, 1.01);
    }

    50% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    75% {
      -webkit-transform: scale(0.98, 1.01);
      transform: scale(0.98, 1.01);
    }
  }
  @-webkit-keyframes gelatine {
    from, to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    25% {
      -webkit-transform: scale(0.9, 1.1);
      transform: scale(0.9, 1.1);
    }

    50% {
      -webkit-transform: scale(1.1, 0.9);
      transform: scale(1.1, 0.9);
    }

    75% {
      -webkit-transform: scale(0.95, 1.05);
      transform: scale(0.95, 1.05);
    }

    from, to {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    25% {
      -webkit-transform: scale(0.98, 1.01);
      transform: scale(0.98, 1.01);
    }

    50% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }

    75% {
      -webkit-transform: scale(0.98, 1.01);
      transform: scale(0.98, 1.01);
    }
  }
  #login p a{
    color:#d94a2d;
    line-height:0.3rem;
    font-size:0.14rem;
  }
  #login div:first-child{
    font-size:1rem;
    margin-bottom:20px;
    text-shadow:0 2px 0 #c0c0c0,0 3px #979385;
  }
</style>
