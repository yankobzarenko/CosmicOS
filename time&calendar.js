setInterval(function updateTime() {
        document.querySelector("#timeElement").innerHTML = (new Date().getMonth() + 1) + "/" + new Date().getDate() + "/" + new Date().getFullYear() + " " + new Date().toLocaleTimeString();
      }, 500);
