// change contact details
$(document).ready(function() {

$("#bttn45").click(function() {

    $("#frm").animate( {
        height:'toggle'
    });
   
});


});

// change email
$(document).ready(function() {

    $("#bttn46").click(function() {
    
        $("#frm22").animate( {
            height:'toggle'
        });
       
    });
    
    
});

// change of password
$(document).ready(function() {

    $("#bttn47").click(function() {
    
        $("#frm33").animate( {
            height:'toggle'
        });
       
    });
    
    
    });


   // delete account
$(document).ready(function() {

    $("#bttn48").click(function() {
    
        $("#frm43").animate( {
            height:'toggle'
        });
       
    });
    
    
    });


    //it will work fo a tag
    // $(document).ready(function() {
    //     $("a[href='#top']").click(function() {
    //         $("html, body").animate({ scrollTop: 0 }, "slow");
    //         return false;
    //     });
    
    //     $(window).scroll(function(){
    //          if ($(this).scrollTop() > 200) {
    //              $('.btn-scroll-to-top').fadeIn();
    //          } else {
    //              $('.btn-scroll-to-top').fadeOut();
    //          }
    //     });
    // });


  $(function() {
   $("#Registerfrmzab").click(function()
    {
       $("#rgsfrmzab").animate( {
          height:'toggle'
       });
    });
  });

// upload file
//   $(document).ready(function() {

//      $("#imageBrows").change(function() {
//          var file = this.files;
//          if(file && files[0])
//          {
//             ReadImage(file[0]);
//          }
      
//      });
//   });

//   var ReadImage = function(file)
//   {
//       var reader = new FileReader;
//       var image = new Image;

//       reader.readAsDataURL(file);
//       reader.onload = function(_file) {
//           image.src = _file.target.result;
//           image.onload = function() {
//               var height = this.height;
//               var width = this.width;
//               var type = file.type;
//               var size = ~~(file.size/1024) + "kb";
//               $("#targetImg").attr('src',_file.target.result);
//                $("#description").text("size:"+size+","+height +"x"+width+"");
//               $("#imagePreview").show();
//           }
//       }
//   }

//   var Clearpreview = function() {
//       $("#imageBrows").val('');
//       $("#description").text('');
//       $("#imagePreview").hide();
//   }




function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview1').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview2').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview3').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}



function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#image_upload_preview4').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


 
$(function() {
    
$("#inputFile").change(function () {
    readURL(this);
});

$("#inputFile1").change(function () {
    readURL1(this);
});
$("#inputFile2").change(function () {
    readURL2(this);
});
$("#inputFile3").change(function () {
    readURL3(this);
});
$("#inputFile4").change(function () {
    readURL4(this);
});
});

//  add of respected things
$(function() {
   
    $(".madeofcountry").hide();
    $(".upldimg").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();
    $(".band").hide();
    $(".model").hide();
    $(".color").hide();
    $(".codition").hide();
    $(".curAdd").hide();
    $(".monitaryunit").hide();




   $(".vehecal").click(function() {

    $(".madeofcountry").hide();
    $(".upldimg").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();

   
    $(".kmdrv").show();
    $(".Inshurancedate").show();
    $(".fuel").show();
    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();




  });

$(".mobile").click(function() {
    $(".madeofcountry").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();

    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();




    
    
    
});

$(".computer").click(function() {
    $(".madeofcountry").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();

    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();


   
});

$(".auto").click(function() {
    $(".name").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();

    $(".kmdrv").show();
    $(".Inshurancedate").show();
    $(".fuel").show();
    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();


});

$(".bike").click(function() {
    $(".name").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();

    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();
    $(".kmdrv").show();


});

$(".books").click(function() {
    $(".madeofcountry").hide();
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();
    $(".band").hide();
    $(".model").hide();
    $(".color").hide();

    $(".publish").show();
    $(".auther").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();



});

$(".clothes").click(function() {
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();
    $(".band").hide();
    $(".name").hide();
    $(".publish").hide();
    $(".auther").hide();


    $(".name").show();
    $(".madeofcountry").show();
    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();


   

});

$(".electronics").click(function() {
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();
    $(".name").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".madeofcountry").hide();


    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();


   

});

$(".appliance").click(function() {
    $(".curentworkingcomp").hide();
    $(".upldimg").hide();
    $(".gender").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".experience").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();
    $(".name").hide();
    $(".publish").hide();
    $(".auther").hide();

    $(".madeofcountry").show();
    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();


   

});

$(".job").click(function() {
    $(".madeofcountry").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();
    $(".band").hide();
    $(".model").hide();
    $(".color").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".monitaryunit").hide();
    $(".codition").hide();
   

    $(".curentworkingcomp").show();
    $(".upldimg").show();
    $(".gender").show();
    $(".nationality").show();
    $(".curposition").show();
    $(".careerlvl").show();
    $(".unspecified").show();
    $(".curAdd").show();
    $(".experience").show();




});

$(".otherzab").click(function() 
{
    $(".madeofcountry").hide();
    $(".kmdrv").hide();
    $(".Inshurancedate").hide();
    $(".fuel").hide();
    $(".color").hide();
    $(".publish").hide();
    $(".auther").hide();
    $(".nationality").hide();
    $(".curposition").hide();
    $(".careerlvl").hide();
    $(".unspecified").hide();
    $(".curentworkingcomp").hide();
    $(".gender").hide();
    $(".upldimg").hide();
    $(".experience").hide();


    $(".band").show();
    $(".model").show();
    $(".color").show();
    $(".codition").show();
    $(".curAdd").show();
    $(".monitaryunit").show();


    
   

});

});

// end of add


// upload page  showing subcatagory pics started
$(document).ready(function() {
   $("#zaranzab").click(function()  {
       var getsrc = $(".rikimg").attr('src');
       var getavalue = $("#zaranzab").text();
      
    $(".imgwithmaingatagory").attr('src',getsrc);
    $(".imgwithmaingatagory").show();
    $(".submenuname").text("welcome to zarange form --> "+getavalue);
    $(".submenuname").show();
   });
   
    $("#zaranzab1").click(function()  {
        var getsrc = $(".rikimg").attr('src');
        var getavalue = $("#zaranzab1").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to riksha form --> "+getavalue);
     $(".submenuname").show();
    });

    });

$(document).ready(function() {
   
    $("#jobsubm").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });

    $("#jobsubm1").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm1").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });

    
    $("#jobsubm2").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm2").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });

    
    $("#jobsubm3").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm3").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });

    
    $("#jobsubm4").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm4").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });

    
    $("#jobsubm5").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm5").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });

    
    $("#jobsubm6").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm6").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });

    
    $("#jobsubm7").click(function()  {
        var getsrc = $(".jobimg").attr('src');
        var getavalue = $("#jobsubm7").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to job form --> "+getavalue);
     $(".submenuname").show();
    });
 });
 
 $(document).ready(function() {

    $("#booksubM").click(function()  {
        var getsrc = $(".bookzab").attr('src');
        var getavalue = $("#booksubM").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to Books form --> "+getavalue);
     $(".submenuname").show();
    });
    
     $("#booksubM1").click(function()  {
         var getsrc = $(".bookzab").attr('src');
         var getavalue = $("#booksubM1").text();
        
      $(".imgwithmaingatagory").attr('src',getsrc);
      $(".imgwithmaingatagory").show();
      $(".submenuname").text("welcome to BOOKs form --> "+getavalue);
      $(".submenuname").show();
     });

     $("#booksubM2").click(function()  {
        var getsrc = $(".bookzab").attr('src');
        var getavalue = $("#booksubM2").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to BOOKs form --> "+getavalue);
     $(".submenuname").show();
    });


    $("#booksubM3").click(function()  {
        var getsrc = $(".bookzab").attr('src');
        var getavalue = $("#booksubM3").text();
       
     $(".imgwithmaingatagory").attr('src',getsrc);
     $(".imgwithmaingatagory").show();
     $(".submenuname").text("welcome to BOOKs form --> "+getavalue);
     $(".submenuname").show();
    });

 
     });

     $(document).ready(function() {
      
        $("#veheicalsubM").click(function()  {
            var getsrc = $(".veheicalzab").attr('src');
            var getavalue = $("#veheicalsubM").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Veheicals form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#veheicalsubM1").click(function()  {
            var getsrc = $(".veheicalzab").attr('src');
            var getavalue = $("#veheicalsubM1").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Veheicals form --> "+getavalue);
         $(".submenuname").show();
        });
      

        $("#veheicalsubM2").click(function()  {
            var getsrc = $(".veheicalzab").attr('src');
            var getavalue = $("#veheicalsubM2").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Veheicals form --> "+getavalue);
         $(".submenuname").show();
        });
    
    

        $("#veheicalsubM3").click(function()  {
            var getsrc = $(".veheicalzab").attr('src');
            var getavalue = $("#veheicalsubM3").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Veheicals form --> "+getavalue);
         $(".submenuname").show();
        });
    


     });
 


     $(document).ready(function() {
         
        $("#mobilesubM").click(function()  {
            var getsrc = $(".mobilezab").attr('src');
            var getavalue = $("#mobilesubM").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Mobile form --> "+getavalue);
         $(".submenuname").show();
        });
    
        
        $("#mobilesubM1").click(function()  {
            var getsrc = $(".mobilezab").attr('src');
            var getavalue = $("#mobilesubM1").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Mobile form --> "+getavalue);
         $(".submenuname").show();
        });

        
        $("#mobilesubM2").click(function()  {
            var getsrc = $(".mobilezab").attr('src');
            var getavalue = $("#mobilesubM2").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Mobile form --> "+getavalue);
         $(".submenuname").show();
        });

        
        $("#mobilesubM3").click(function()  {
            var getsrc = $(".mobilezab").attr('src');
            var getavalue = $("#mobilesubM3").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Mobile form --> "+getavalue);
         $(".submenuname").show();
        });

        
        $("#mobilesubM4").click(function()  {
            var getsrc = $(".mobilezab").attr('src');
            var getavalue = $("#mobilesubM4").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Mobile form --> "+getavalue);
         $(".submenuname").show();
        });

        
        $("#mobilesubM5").click(function()  {
            var getsrc = $(".mobilezab").attr('src');
            var getavalue = $("#mobilesubM5").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Mobile form --> "+getavalue);
         $(".submenuname").show();
        });


     });

  
     $(document).ready(function() {

         
        $("#electronicsubM").click(function()  {
            var getsrc = $(".electronicszab").attr('src');
            var getavalue = $("#electronicsubM").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Electronics form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#electronicsubM1").click(function()  {
            var getsrc = $(".electronicszab").attr('src');
            var getavalue = $("#electronicsubM1").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Electronics form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#electronicsubM2").click(function()  {
            var getsrc = $(".electronicszab").attr('src');
            var getavalue = $("#electronicsubM2").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Electronics form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#electronicsubM3").click(function()  {
            var getsrc = $(".electronicszab").attr('src');
            var getavalue = $("#electronicsubM3").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Electronics form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#electronicsubM4").click(function()  {
            var getsrc = $(".electronicszab").attr('src');
            var getavalue = $("#electronicsubM4").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Electronics form --> "+getavalue);
         $(".submenuname").show();
        });

    

     });

     $(document).ready(function() {
       
        
        $("#computersubM").click(function()  {
            var getsrc = $(".computerzab").attr('src');
            var getavalue = $("#computersubM").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Computer form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#computersubM1").click(function()  {
            var getsrc = $(".computerzab").attr('src');
            var getavalue = $("#computersubM1").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Computer form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#computersubM2").click(function()  {
            var getsrc = $(".computerzab").attr('src');
            var getavalue = $("#computersubM2").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Computer form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#computersubM3").click(function()  {
            var getsrc = $(".computerzab").attr('src');
            var getavalue = $("#computersubM3").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Computer form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#computersubM4").click(function()  {
            var getsrc = $(".computerzab").attr('src');
            var getavalue = $("#computersubM4").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Computer form --> "+getavalue);
         $(".submenuname").show();
        });

     });



     $(document).ready(function() {

        
        $("#clothessubM").click(function()  {
            var getsrc = $(".clotheszab").attr('src');
            var getavalue = $("#clothessubM").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Clothes form --> "+getavalue);
         $(".submenuname").show();
        });
       
        $("#clothessubM1").click(function()  {
            var getsrc = $(".clotheszab").attr('src');
            var getavalue = $("#clothessubM1").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Clothes form --> "+getavalue);
         $(".submenuname").show();
        });


        $("#clothessubM2").click(function()  {
            var getsrc = $(".clotheszab").attr('src');
            var getavalue = $("#clothessubM2").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Clothes form --> "+getavalue);
         $(".submenuname").show();
        });


        $("#clothessubM3").click(function()  {
            var getsrc = $(".clotheszab").attr('src');
            var getavalue = $("#clothessubM3").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Clothes form --> "+getavalue);
         $(".submenuname").show();
        });


        $("#clothessubM4").click(function()  {
            var getsrc = $(".clotheszab").attr('src');
            var getavalue = $("#clothessubM4").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Clothes form --> "+getavalue);
         $(".submenuname").show();
        });

    
    });


    $(document).ready(function() {

        $("#bikesubM").click(function()  {
            var getsrc = $(".bikezab").attr('src');
            var getavalue = $("#bikesubM").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Bike form --> "+getavalue);
         $(".submenuname").show();
        });
    
        $("#bikesubM1").click(function()  {
            var getsrc = $(".bikezab").attr('src');
            var getavalue = $("#bikesubM1").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Bike form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#bikesubM2").click(function()  {
            var getsrc = $(".bikezab").attr('src');
            var getavalue = $("#bikesubM2").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Bike form --> "+getavalue);
         $(".submenuname").show();
        });


        $("#bikesubM3").click(function()  {
            var getsrc = $(".bikezab").attr('src');
            var getavalue = $("#bikesubM3").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Bike form --> "+getavalue);
         $(".submenuname").show();
        });

    });


    $(document).ready(function() {

        $("#apliancesumM").click(function()  {
            var getsrc = $(".apliancezab").attr('src');
            var getavalue = $("#apliancesumM").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Apliance form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#apliancesumM1").click(function()  {
            var getsrc = $(".apliancezab").attr('src');
            var getavalue = $("#apliancesumM1").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Apliance form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#apliancesumM2").click(function()  {
            var getsrc = $(".apliancezab").attr('src');
            var getavalue = $("#apliancesumM2").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Apliance form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#apliancesumM3").click(function()  {
            var getsrc = $(".apliancezab").attr('src');
            var getavalue = $("#apliancesumM3").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Apliance form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#apliancesumM4").click(function()  {
            var getsrc = $(".apliancezab").attr('src');
            var getavalue = $("#apliancesumM4").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Apliance form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#apliancesumM5").click(function()  {
            var getsrc = $(".apliancezab").attr('src');
            var getavalue = $("#apliancesumM5").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Apliance form --> "+getavalue);
         $(".submenuname").show();
        });

        $("#apliancesumM6").click(function()  {
            var getsrc = $(".apliancezab").attr('src');
            var getavalue = $("#apliancesumM6").text();
           
         $(".imgwithmaingatagory").attr('src',getsrc);
         $(".imgwithmaingatagory").show();
         $(".submenuname").text("welcome to Apliance form --> "+getavalue);
         $(".submenuname").show();
        });

    });