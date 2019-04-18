(function(){
    var canvas = document.getElementById('c1');
    var ctx = canvas.getContext('2d');
   
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    var code = "世有伯乐，然后有千里马。千里马常有，而伯乐不常有。故虽有名马，祇（zhǐ）辱于奴隶人之手，骈（pián）死于槽（cáo）枥（lì）之间，不以千里称也。马之千里者，一食（shi）或尽粟（sù）一石(dàn)。食（sì）马者不知其能千里而食（sì）也。是马也，虽有千里之能，食（shí）不饱，力不足，才美不外见（xiàn），且欲与常马等不可得，安求其能千里也？策之不以其道，食（sì）之不能尽其材，鸣之而不能通其意，执策而临之，曰：“天下无马！”呜呼！其真无马邪（yé）？其真不知马也。";
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
})();


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
            // this.num --;
            if(this.n <= 0){
                this.n = 4;
            }
        },
        swipeNext:function(){
            this.n ++;
            // this.num ++;
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

Vue.filter('timeFormate',function(value,time){
	var arr = value.split('/');
	if(time == "year"){
		return arr[2];
	}
	if(time == "month"){
		return arr[1];
	}
	if(time == 'day'){
		return arr[0];
	}
})
new Vue({
    el:'.content-lt-ctn',
    data:{
        listitem:'list1',
        diaryData:[
        {
        	day:'18',
        	month:'4',
        	year:'2019',
        	weather:'晴',
        	color:'summer',
        	time:'18/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        },
        {
        	day:'17',
        	month:'4',
        	year:'2019',
        	weather:'风',
        	color:'wind',
        	time:'17/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        },
        {
        	day:'16',
        	month:'4',
        	year:'2019',
        	weather:'雨',
        	color:'rain',
        	time:'16/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        },
        {
        	day:'15',
        	month:'4',
        	year:'2019',
        	weather:'云',
        	color:'cloud',
        	time:'15/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        },
        {
        	day:'14',
        	month:'4',
        	year:'2019',
        	weather:'阴',
        	color:'shade',
        	time:'14/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        },
        {
        	day:'13',
        	month:'4',
        	year:'2019',
        	weather:'云',
        	color:'cloud',
        	time:'13/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        },
        {
        	day:'12',
        	month:'4',
        	year:'2019',
        	weather:'阴',
        	color:'shade',
        	time:'12/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        },
        {
        	day:'11',
        	month:'4',
        	year:'2019',
        	weather:'雨',
        	color:'rain',
        	time:'11/4/2019',
        	content:'Today is a good day，I fell happy，are you？'
        }],
        articalData:[{
        	title:'方丈的故事',
        	subtitle:'这是一个很久很久以前的故事……',
        	time:'6/8/2017',
        	author:'川枫·流',
        	content:'今天川枫遇见了一位方丈，方丈为川枫讲了一个故事，深深的启发着川枫。<br/>在很久很久以前，有一座山，山上有座庙，庙里有个老和尚正在讲故事，讲的是什么故事呢？讲的是，在很久很久以前，有一座山，山上有座庙，庙里有个老和尚正在给小和尚讲故事，讲的是什么故事呢？讲的是，在很久以前，有一座山，山上座庙……',
        },{
        	title:'川枫的初恋',
        	subtitle:'在那个樱花飘落的季节，遇见了美丽的你',
        	time:'21/3/2017',
        	author:'川枫·流',
        	content:'那飘落的不是花瓣，是川枫的点点爱意。',
        },{
        	title:'凶恶的教练',
        	subtitle:'明天开始，每天长跑2公里，100个俯卧撑，100个引体向上……',
        	time:'18/7/2017',
        	author:'川枫·流',
        	content:'',
        },{
        	title:'川枫的梦想',
        	subtitle:'梦想是那么的遥不可及，却又触手可及，可是我的梦在哪里？',
        	time:'3/9/2017',
        	author:'川枫·流',
        	content:'',
        }]
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



