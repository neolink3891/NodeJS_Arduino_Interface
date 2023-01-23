const enablenotif = "0";

function tagLockers() {
    var wr, se, ve;
    var sres, smen;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            var jsonres = this.responseText;
            var obj = JSON.parse(jsonres);
            
            wr = obj.writer;
            se = obj.server;
            ve = obj.version;
            
            if((wr === "nlk-json-writer") && (se === "local-testing") && (ve === "3.0")){
                sres = obj.dats[0].dtarray[0].res;
                smen = obj.dats[0].dtarray[0].men;
                
                if(sres === "1"){
                    document.getElementById('pqp_loading').style.visibility = 'hidden';
                } else {
                    
                }
            }
        }
    };
    
    xhttp.open("POST", "http://ec2-52-23-130-105.compute-1.amazonaws.com/lns/core.php?requested=aaaaa", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("v1=" + "1" + "&v2=" + "1" + "&v3=" + "192.168.1.66" + "&v4=" + "aa:bb:cc:dd:ee" + "&v5=" + enablenotif);
}

function checkPIN(pin) {
    var wr, se, ve;
    var sres, smen;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            var jsonres = this.responseText;
            //alert(jsonres);
            var obj = JSON.parse(jsonres);
            
            wr = obj.writer;
            se = obj.server;
            ve = obj.version;
            
            if((wr === "nlk-json-writer") && (se === "local-testing") && (ve === "3.0")){
                sres = obj.dats[0].dtarray[0].res;
                smen = obj.dats[0].dtarray[0].men;
                
                if(sres !== "-1"){
                    openDoor(sres + "+1*");
                }
                
                clearPin();
                document.getElementById('pqp_pin').innerHTML = "";
                document.getElementById('pqp_mes').innerHTML = smen;
                document.getElementById('pqp_wait').style.visibility = 'hidden';
            }
        }
    };
    
    xhttp.open("POST", "http://ec2-52-23-130-105.compute-1.amazonaws.com/lns/core.php?requested=aaaab", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("v1=" + "1" + "&v2=*" + pin + "&v3=" + enablenotif);
}

function openDoor(signal) {
    /*var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3030/ard/msg:" + signal, true);
    xhttp.send(null);
    
    document.getElementById('pqp_message').style.visibility = 'visible';
    document.getElementById('pqp_keypad').style.visibility = 'hidden';*/
    window.location.href = "http://localhost:3030/ard/msg:" + signal;
}