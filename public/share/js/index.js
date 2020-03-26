
$(function () {
  $("#shareBt").on("click", function () {
    share();
  })
  $("#closeAll").on("click", function () {
    $("#fiexd").hide();
  })
  
  $("#generateQrCode").click(function () {
    $("#qrcode").html("");
    let codeText  =  $("#codeText").val();
    // let codeText  =  "www.baidu.com";
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
  var imgHtml="<img src='/public/img/icon.png'>";
  $("canvas").append(imgHtml);
}