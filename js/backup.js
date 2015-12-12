
          script=document.createElement('script');
          script.setAttribute('src','http://code.responsivevoice.org/responsivevoice.js');
          document.getElementsByTagName('head')[0].appendChild(script);


          var inputfield = $('#inputfield'); 
          var preview = $('.preview'); 
          var sendButton = $('.send');


          preview.on("click", function() {




            
            
              var inputvalue = inputfield.val();
              console.log(inputvalue);
              responsiveVoice.speak(inputvalue);
              revealSend();   

              // console.log(input);
              // var player = GetPlayer();
              // var textToSpeech = player.GetVar("textToSpeech");
     
          });

          
          function revealSend(){
            sendButton.css({ display:'inline'});
          }



       <!--  <script type="text/javascript" src="js/script.js"></script>  -->    
          




          preview.on("click", function() {

              var inputvalue = inputfield.val();

              if ( inputvalue === "Don't touch our internet, Trump" ) {
                  responsiveVoice.speak("Don't touch our internet, Trump");
                  console.log(inputvalue);
              }

              else {
                  inputfield.val(inputvalue);
                  responsiveVoice.speak(inputvalue);
                  console.log("replaced");
              }

          
              // console.log(inputvalue);
              // responsiveVoice.speak(inputvalue);
              // revealSend();   

              // console.log(input);
              // var player = GetPlayer();
              // var textToSpeech = player.GetVar("textToSpeech");
     
          });