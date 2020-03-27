$(function () {

  // var data = [
  //   {
  //     timeStart: "2020/03/28",
  //     timeEnd: "2020/03/29",
  //     element: "#timeId1",
  //   },
  //   {
  //     timeStart: "2020/04/28",
  //     timeEnd: "2020/04/29",
  //     element: "#timeId2",
  //   },
  //   {
  //     timeStart: "2020/02/28",
  //     timeEnd: "2020/03/29",
  //     element: "#timeId3",
  //   },
  //   {
  //     timeStart: "2020/02/23",
  //     timeEnd: "2020/03/24",
  //     element: "#timeId4",
  //   }
  // ]
  // setInterval(function() {
  //   var ret = textSet(data);
  //   console.log(ret)
  // }, 1000)
  var data = [
    {
      time: "2020/03/26",
    },
    {
      time: "2020/03/29",
    },
    {
      time: "2020/03/30",
    },
  ]
  var data = PeriodOfTime(data);
  console.log(data)
})

// var timer = setInterval(function () {
//   mapForItem: function() {
//     data.map(function (item) {
//       var startTime = new Date(item.timeStart.replace(/-/g, "/")).getTime() //获取活动开始时间戳
//       var endtTime = new Date(item.timeEnd.replace(/-/g, "/")).getTime() //获取活动结束时间戳
//       var currentTime = new Date().getTime() //获取当前时间戳
//       var surplusTime = startTime - currentTime > 0 ? startTime - currentTime : endtTime - currentTime //计算距离活动开始/结束剩余时间
//       item.hours = Math.floor(surplusTime / (1000 * 60 * 60)) < 10 ? '0' + Math.floor(surplusTime / (1000 * 60 * 60)) : Math.floor(surplusTime / (1000 * 60 * 60)) //倒数小时
//       surplusTime = surplusTime - (item.hours * 1000 * 60 * 60) //减去小时的时间戳
//       item.minunts = Math.floor(surplusTime / (1000 * 60)) < 10 ? '0' + Math.floor(surplusTime / (1000 * 60)) : Math.floor(surplusTime / (1000 * 60)) //倒数分钟
//       surplusTime = surplusTime - (item.minunts * 1000 * 60) //减去分钟的时间戳
//       item.seconds = Math.floor(surplusTime / 1000) < 10 ? '0' + Math.floor(surplusTime / 1000) : Math.floor(surplusTime / 1000) //倒数秒数
//       if (endtTime - currentTime < 1000) {
//         //当剩余的时间戳小于1000时代表小于1秒，即可清除定时器
//         clearInterval(timer)
//         item.hours = '00'
//         item.minunts = '00'
//         item.seconds = '00'
//       }

//     })
//   }
// }, 1000)



// $(function () {
//   var status;
//   $(document).scroll(function () {

//     var height = $(".contentHeight").offset().top;
//     var scroolheight = $(document).scrollTop();
//     if (scroolheight <= height - 500) {
//       return
//     }
//     var decimal_places = 1;
//     var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;

//     if (status) {
//       return
//     }
//     status = "usered";
//     [{
//       number: 10,
//       unit: '万+'
//     }, {
//       number: 2000,
//       unit: '+'
//     }, {
//       number: 5000,
//       unit: '+'
//     }, {
//       number: 3,
//       unit: '万+'
//     }].map(function (item, index) {
//       return {
//         element: '#target' + index,
//         number: item.number,
//         unit: item.unit
//       }
//     }).map(animation);
//   })
// })



// function animation(params) {
//   $(params.element).animateNumber(
//     {
//       number: params.number * decimal_factor,
//       color: '#282828',
//       'font-size': '36px',
//       numberStep: function (now, tween) {
//         var floored_number = Math.floor(now) / decimal_factor,
//           target = $(tween.elem);
//         if (decimal_places > 0) {
//           floored_number = floored_number;
//         }
//         target.text(floored_number + params.unit);
//       }
//     },
//     {
//       easing: 'swing',
//       duration: 1500
//     })
// }

/**
 * 
 * @param {
 * timeStart: "2020/03/28", 
 * timeEnd: "2020/03/29",    
 * element: "#element",} data 
 * @returns {ret}
 */
function textSet(data) {
  var ret = data.map(function (item) {
    var startTime = new Date(item.timeStart.replace(/-/g, "/")).getTime() //获取活动开始时间戳
    var endtTime = new Date(item.timeEnd.replace(/-/g, "/")).getTime() //获取活动结束时间戳
    var currentTime = new Date().getTime() //获取当前时间戳
    var surplusTime = startTime - currentTime > 0 ? startTime - currentTime : endtTime - currentTime //计算距离活动开始/结束剩余时间
    item.htmlStr = startTime - currentTime > 0 ? "开始" : "结束" //计算距离活动状态
    item.status = startTime - currentTime > 0 ? 1 : 0 //计算距离活动状态
    item.hours = Math.floor(surplusTime / (1000 * 60 * 60)) < 10 ? '0' + Math.floor(surplusTime / (1000 * 60 * 60)) : Math.floor(surplusTime / (1000 * 60 * 60)) //倒数小时
    surplusTime = surplusTime - (item.hours * 1000 * 60 * 60) //减去小时的时间戳
    item.minunts = Math.floor(surplusTime / (1000 * 60)) < 10 ? '0' + Math.floor(surplusTime / (1000 * 60)) : Math.floor(surplusTime / (1000 * 60)) //倒数分钟
    surplusTime = surplusTime - (item.minunts * 1000 * 60) //减去分钟的时间戳
    item.seconds = Math.floor(surplusTime / 1000) < 10 ? '0' + Math.floor(surplusTime / 1000) : Math.floor(surplusTime / 1000) //倒数秒数
    item.htmlStr = item.htmlStr + item.hours + '小时' + item.minunts + '分钟' + item.seconds + '秒'
    if (endtTime - currentTime < 1000) {
      //当剩余的时间戳小于1000时代表小于1秒，即可清除定时器
      // clearInterval(timer)
      item.hours = '00'
      item.minunts = '00'
      item.seconds = '00'
      item.htmlStr = "活动已经结束"
    }
    $(item.element).html(item.htmlStr)
    return item
  })
  return ret
}

/**
 * 
 * @param {
 * time: "2020/03/28",}data 
 * @return {}
 */
function PeriodOfTime (data) {
  var retIndex
  var currentTime = new Date().getTime() //获取当前时间戳
  data = data.map(function(item) {
    return item.stamp = new Date(item.time.replace(/-/g, "/")).getTime()
  })
  data.push(currentTime)
  data = data.sort(function(a, b) {
    return a - b     //升序
  }).map(function( item, index) {
    if (item === currentTime) {
      retIndex = index
      return index
    }
  })
  return {retIndex:retIndex,data:data}
}