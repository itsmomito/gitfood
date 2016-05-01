
    function getMoxtraToken(){
        var access_token;
        var client_id = "gKXj33inWlI";
        var client_secret = "oFTk-eqjLss";
        var uniqueid = "user" + Math.floor((Math.random() * 10) + 1);
        var timestamp = new Date().getTime();
        //var hash = CryptoJS.HmacSHA256(client_id + "" + uniqueid + "" + timestamp, client_secret);
        //var signature = rtrim(strtr(CryptoJS.enc.Base64.stringify(hash), '+/', '-_'), '=');
        var firstname = uniqueid;

        $.ajax({
            method: "POST",
            url: "https://apisandbox.moxtra.com/oauth/token",
            data: {
                client_id: client_id,
                client_secret: client_secret,
                grant_type: "http://www.moxtra.com/auth_uniqueid",
                uniqueid: uniqueid,
                timestamp: timestamp,
                //signature: signature,
                firstname: "Dhanush",
                lastname: "Patel"
            },
            async: false,
            success: function(data, textStatus, jqXHR) {
                access_token = data.access_token;
               // alert(access_token);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
            

           // alert(access_token);
            if (access_token) {
                // Initialize Moxtra SDK Object
                var options = {
                    mode: "sandbox", 
                    client_id: client_id, //
                    access_token: access_token,
                    invalid_token: function(event) {
                        //Triggered when the access token is expired or invalid
                       // alert("Access Token expired for session id: " + event.session_id);
                    }
                };
                Moxtra.init(options);
            }
            else {
                //Authenticate and get access token for the user before proceeding further
                console.log ("No access token found");
            }
        }

        <!-- Start Meet Function  -->
        function start_chat() {
            var options = {
                email:"support@gitfood.co,itsmomito@gmail.com",
                iframe: true,
                tagid4iframe: "container",
                iframewidth: "800px",
                iframeheight: "800px",
                autostart_meet: true,
                autostart_note: false,
                start_chat: function(event) {
                    alert("Chat started session Id: " + event.session_id);
                },
                invite_meet: function(event) {
                    alert("Meet invite");
                },
                start_meet: function(event) {
                    alert("Meet started session key: " + event.session_key + " session id: " + event.session_id);
                },
                end_meet: function(event) {
                    alert("Meet end event");
                },
                invite_member: function(event) {
                    alert("Invite member into binder Id: " + event.binder_id);
                },
                request_note: function(event) {
                    alert("Clip start request");
                },
                error: function(event) {
                    alert("Chat error code: " + event.error_code + " error message: " + event.error_message);
                }
            };
            Moxtra.chat(options);
        }
        
        function getURL(){
            var url = document.location.href; 
            console.log("url: "+url);
            
        }

      }
    }}();
    