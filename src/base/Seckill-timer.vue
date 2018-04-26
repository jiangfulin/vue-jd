<template>
  <div class="seckill-timer">
    <span v-if="timer.days>0">{{timer.days}}</span>
    <span class="seckill-time">{{timer.hours}}</span><span class="seckill-time-separator">:</span>
    <span class="seckill-time">{{timer.minutes}}</span><span class="seckill-time-separator">:</span>
    <span class="seckill-time">{{timer.seconds}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        timer: {
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          seckill: '',
          setTime:''
        },
      }
    },
    porps:{

    },
    methods: {
      record(timer) { //timer='2016/09/22 18:14:00'
        let curDate = new Date(); //获取当前的时间
        let targetDate = new Date(timer); //目标时间，先转化成时间格式的对象才能使用getTime()方法

        let curDate1970 = curDate.getTime(); //当前时间距离1970的ms数
        let targetDate1970 = targetDate.getTime(); //目标距离1970的ms
        let time = targetDate1970 - curDate1970; //时间差
        //换算单位把time换算成h/m/s
        //先换算成小时
        let h = Math.floor(time / (1000 * 60 * 60)); // 向下取整
        // 换算分钟  => 需要把h小时所占用的ms数减去，然后再换算分钟

        let m = Math.floor((time - h * 60 * 60 * 1000) / (1000 * 60));

        // 换算s  => 把小时和分钟所占用的ms数都减去，然后再换算成s

        let s = Math.floor((time - h * 60 * 60 * 1000 - m * 60 * 1000) / 1000);
        if (time <= 0) {
          clearInterval(this.seckill);
          return
        }
        this.timer.hours = this.addZero(h);
        this.timer.minutes = this.addZero(m);
        this.timer.seconds = this.addZero(s);
      },
      addZero(n) { //给不足10的数前面添加一个0
        return n < 10 ? '0' + n : n;
      }
    },
    mounted() {
      this.seckill = setInterval(() => {
        this.record('2018-03-21 13:52:00')

      }, 1000)
    },
    computed: {},
    components: {},
  }
</script>
<style scoped lang="scss">

  .seckill-timer {
    font-size: 0;
    .seckill-time {
      font-size: 12px;
      border: 1px solid #dfdfdf;
      padding: 0 2px;
    }

    .seckill-time-separator {
      font-size: 12px;
      text-align: center;
      padding: 0 1px;
    }
  }


</style>
