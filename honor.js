(function(){
    var canvas = document.getElementById('c1');
    var ctx = canvas.getContext('2d');
   
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var code = "01";
    code = code.split("");

    var font_size = 10;
    //分的列数
    var columns = canvas.width/font_size;

    var drops = [];
    for(var x = 0; x < columns; x ++){
        drops[x] = "";
    }

    function draw(){
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        ctx.fillStyle = "#ff0";
        ctx.font=font_size+'px';

        for(var i = 0; i < drops.length; i ++){
            var text = code[Math.floor(Math.random()*code.length)];
            ctx.fillText(text,i*font_size,drops[i]*font_size);
            //溢出拉回 
            if(drops[i]*font_size > canvas.height && Math.random() > 0.99){
                drops[i] = 0;
            }
            drops[i] ++;
        }
    }
    setInterval(draw,1000/30);
})()


new Vue({
    el:'.content-lt-top',
    data:{
        n:1,
        timer:null,
        imglist:['poster/banner1.jpg','poster/banner2.jpg','poster/banner3.jpg','poster/banner4.jpg'],
        activeObj:{
            'active':false
        },
        num:1,
        newlist:[],
        
    },
    mounted() {
        this.timer = setInterval(this.swipeNext,2000);
    },
    methods:{
         swipePrev:function(){
            this.n --;
            this.num --;
            if(this.n <= 0){
                this.n = 4;
            }
        },
        swipeNext:function(){
            this.n ++;
            this.num ++;
            if(this.n > 4){
                this.n = 1;
            }
        },
        stopInterval:function(){
            console.log('stop');
            clearInterval(this.timer);
        },
        startInterval:function(){
            console.log('start');
            this.timer = setInterval(this.swipeNext,2000);
        },
    }
})


new Vue({
    el:'.content-lt-ctn',
    data:{
        listitem:'list1',
    },
    mounted(){
      
    },
    methods:{
        newsClick:function(e){
            var target = e.target;
            console.log(target)
            if(target.nodeName == "A"){
                console.log(target.dataset.id);
                this.listitem = target.dataset.id;
                console.log(this.listitem);
            }
        }
    }
})
