        // alert("안녕하지않다.집에보내줘라. 집에가고싶은학생의 사이트에 방문하신 걸 환영하지 않습니다! 뒤돌아정신병원가.");
        // let input = prompt("나이가 몇이니? - ");
        // let age = Number(input);

        // if (age<=13) {
        //     alert("님은 초딩이군요!");
        // }
        // else if (age<=16) {
        //     alert("님은 중딩이군요!");
        // }
        // else if (age<=19) {
        //     alert("님은 고딩이군요! 저런~");
        // }
        // else if (age<=29) {
        //     alert("개강한 대학생은 개강하다...");
        // }
        // else {
        //     alert("헋. 늙은이다!");
        // }

        function babo(name){
            console.log("뒤돌아정신병원가" + name);
        }
        babo("박한슬");
        babo("이예은");
        babo("한지우");

        let btn = document.querySelector(".btn");
        
        btn.addEventListener("click", function() {
            sessionStorage.setItem("visited", "yes")
        });
        document.addEventListener("visibilitychange", function(){
            if(document.visibilityState === "visible") {
                if(sessionStorage.getItem("visited") === "yes") {
                alert("주원 쌤을 위한 (빅엿을 가장한) 이벤트 ^^");
                sessionStorage.removeItem("visited");
                }
            }
        });

        let display = document.querySelector(".count");
        let count = 0;
        if (count === null){
            count =0;
        } 
        else {
            count = Number(count);
        }
        display.textContent = count;
        document.addEventListener("click", function(){
            count++;
            display.textContent = count;
            sessionStorage.setItem("clickcount", count);
        });

         
         let bList = document.querySelectorAll(".b");
         bList.forEach(function(b){
         b.addEventListener("click", function(){
            console.log("클릭");
            b.classList.toggle("wow");
         });
         });

         let Textarea = document.getElementById("Put");
         let counter = document.querySelector(".textcount");
         let button = document.querySelector(".tweet");
         let feed = document.querySelector(".feed");
         let posts = JSON.parse(localStorage.getItem("posts"))  || [];

         posts.forEach(function(text, index) {
         let post = document.createElement("div");
         post.classList.add("post");

         let content = document.createElement("span");
         content.textContent = "익명: " + text;
         let delBtn = document.createElement("button");
         delBtn.textContent = "X";
         delBtn.addEventListener("click", function(){
            post.remove();
            posts.splice(index,1);
            localStorage.setItem("posts", JSON.stringify(posts));
         });
         post.appendChild(content);
         post.appendChild(delBtn);

         feed.appendChild(post);
         });

         Textarea.addEventListener("input", function() {
            let length = Textarea.value.length;
            counter.textContent = length + " / 500";
         });
         button.addEventListener("click", function() {
            let text = Textarea.value.trim();
            if (text === "") return;
            let post = document.createElement("div");
            post.classList.add("post");
            
            let content = document.createElement("span");
            content.textContent = "익명: " + text;
            let delBtn = document.createElement("button");
            delBtn.textContent = "X";
            delBtn.addEventListener("click", function() {
                post.remove();
                posts.splice(0,1);
                localStorage.setItem("posts", JSON.stringify(posts));
            });
            post.appendChild(content);
            post.appendChild(delBtn);

            feed.prepend(post);
            posts.unshift(text);
            localStorage.setItem("posts",JSON.stringify(posts));
            Textarea.value = "";
            counter.textContent = "0 / 500";
         });
         
         document.addEventListener("keydown", function(e) {
            console.log(e.key);
         });
        //  let sound = document.querySelector("music");
        //  document.addEventListener("keydown", function(){
        //     sound.currenTime = 0;
        //     sound.play();
        //  });
        
