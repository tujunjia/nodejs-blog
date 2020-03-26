
$(function () {
  $("#shareBt").on("click", function () {
    share();
  })
  $("#closeAll").on("click", function () {
    $("#fiexd").hide();
  })
  
  $("#generateQrCode").click(function () {
    $("#qrcode").html("");
    // let codeText  =  $("#codeText").val();
    let codeText  =  "www.baidu.com";
    generateQrCode("qrcode", codeText, 200, 200);
  }) 

  $("#shareBt").click(function () {
    html2canvas(document.querySelector('.qrcode'), {
      onrendered: function(canvas) {
        var url = canvas.toDataURL();//图片地址
        $("#fiexd").append(canvas);
        document.querySelector("#save").setAttribute('href', url);
      },
      width: 400,
      height: 400
    });
    
    $("#fiexd").show();
  }) 


  // $('#qrcode').qrcode("http://www.baidu.com");


  //直接选择要截图的dom，就能截图，但是因为canvas的原因，生成的图片模糊
  // html2canvas(document.querySelector('.qrcode')).then(function(canvas) {
  //    document.body.appendChild(canvas);
  // });
  // 创建一个新的canvas
  // var canvas2 = document.createElement("canvas");
  // let _canvas = document.querySelector('.qrcode');
  // var w = parseInt(window.getComputedStyle(_canvas).width);
  // var h = parseInt(window.getComputedStyle(_canvas).height);
  // //将canvas画布放大若干倍，然后盛放在较小的容器内，就显得不模糊了
  // canvas2.width = w * 2;
  // canvas2.height = h * 2;
  // canvas2.style.width = w + "px";
  // canvas2.style.height = h + "px";
  // //可以按照自己的需求，对context的参数修改,translate指的是偏移量
  // //  var context = canvas.getContext("2d");
  // //  context.translate(0,0);
  // var context = canvas2.getContext("2d");
  // context.scale(2, 2);
  // context.fillStyle="#FF0000";
  // context.fillRect(0,0,150,75);

  // // ctx.font="30px Arial";
  // // ctx.fillText("Hello World",10,50);
  // // ctx.font="30px Arial";
  // // ctx.strokeText("Hello World",10,50);
  // // context.drawImage(img,10,10);

  // html2canvas(document.querySelector('.qrcode'), { canvas: canvas2 }).then(
  //   function (canvas) {
  //   console.log(canvas)
  //   //document.body.appendChild(canvas);
  //   //canvas转换成url，然后利用a标签的download属性，直接下载，绕过上传服务器再下载
  //   document.querySelector(".down").setAttribute('href', canvas.toDataURL());
  // });

})

function share() {
  $.ajax({
    type: "post",
    url: "/share",
    data: {
      userId: "idcard",
      otherId: "otheridcard"
    },
    dataType: "json",
    success: function (data) {
      console.log(data)
    }
  });
}

function generateQrCode ( elmentId, url, width, height ) {
  $('#'+ elmentId).qrcode({width: width,height: height,text: url});
  var imgHtml="<img src='/public/img/icon.png'>";               // 以 HTML 创建新元素
  $("canvas").append(imgHtml);
}