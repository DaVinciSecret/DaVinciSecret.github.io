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

Vue.prototype.i18n = i18n;
Vue.prototype.echarts = echarts;
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
        newlist:[]
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
        },{
        	day:'2',
        	month:'1',
        	year:'2019',
        	weather:'雪',
        	color:'snow',
        	time:'2/1/2019',
        	content:'下雪了，下雪了，卧槽！！下雪了耶'
        }],
        articalData:[{
        	title:'方丈的故事',
        	subtitle:'这是一个很久很久以前的故事……',
        	time:'6/8/2017',
        	author:'川枫·流',
        	content:'今天川枫遇见了一位方丈，方丈为川枫讲了一个故事，深深的启发着川枫。<br/> &nbsp;&nbsp;&nbsp;&nbsp;在很久很久以前，有一座山，山上有座庙，庙里有个老和尚正在讲故事，讲的是什么故事呢？讲的是，在很久很久以前，有一座山，山上有座庙，庙里有个老和尚正在给小和尚讲故事，讲的是什么故事呢？讲的是，在很久以前，有一座山，山上座庙……',
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
        	content:'Do you want strong body ? Do you want qucikly ? Do you want strong Musle ? If you want, let you do this that I say.',
        },{
        	title:'川枫的梦想',
        	subtitle:'梦想是那么的遥不可及，却又触手可及，可是川枫的梦在哪里？',
        	time:'3/9/2017',
        	author:'川枫·流',
        	content:'',
        },{
        	title:'正直的川枫',
        	subtitle:'川枫的人品一般，但是很正直……',
        	time:'2/14/2017',
        	author:'川枫·流',
        	content:'没有绝对的好人，也没有绝对的坏人。<br/>&nbsp;&nbsp;&nbsp;&nbsp;好人有时也会做坏事，坏人有时也会做好事。杀一人为罪，杀一千为雄……，做的都是自己内心觉得正确的事，真正的好坏不在事情本身，而在做事人的内心。就如同阴阳的太极图一般，都有各自强盛的一面，也都有各自薄弱的一面，好坏也是如此，只要不越过那道边界，就不会产生本质的改变，这也就是所谓的底线。',
        }],
        technicalData:[{
        	title:'原型和原型链',
        	subtitle:'程序如同艺术 ，源于生活而又高于生活…(扯淡！！)',
        	time:'2/16/2017',
        	author:'川枫·流',
        	content:`<div class="preview"><div class="preview__inner-1"><div class="preview__inner-2 markdown_views prism-atom-one-dark" style="padding: 10px 20px 20px;"><div class="cl-preview-section">
					每位coder就像追寻真理的苦行僧，他们谱写着自己对于生活的理解。并在程序的世界里，追寻&感悟真理。<br>
					</p>
					</div><div class="cl-preview-section"><h2><a id="____4"></a>《至简 ·  一》原型-原型链</h2>
					</div><div class="cl-preview-section"><p>第一次接触编程是在大学，那时是从c语言开始的，当时对于程序没有那么多的理解，更多的是新鲜。之后也学习了OOP，还有数据结构，但是最终对c语言还是没能进行更多的探究。<br>
					而是选择了前端进行深入，我喜欢从事有关美的事物，所以在大学期间，多数也算是“不务正业”，当初爱上了游戏场景设计，地形编辑。它们不同于当初写的c程序，因为它们表现的更直观。之后也经历了种种，也学习了种种。最终走上了前端这条路我想还是因为美。现在依然记得在做ASP时，对于网页美感的苛求，我敢肯定在这个点上花费的时间严重多于对于后台Server的设计。</p>
					</div><div class="cl-preview-section"><p><strong>回归正题，来讲述今天的话题</strong></p>
					</div><div class="cl-preview-section"><ol>
					<li>
					<p><font size="5" face="黑体"><strong>万物皆对象</strong></font>  ：这句话大概经常听到了，这句话是从程序的映射到现实的写照。但是却非最高境界，佛曰四大皆空。 神秀曰：身是菩提树，心如明镜台，时时勤拂拭，莫使惹尘埃。 慧能曰：菩提本无树，明镜亦非台，本来无一物，何处惹尘埃。<br>
					javascript的世界中，对象就如同这佛法，源于一个null。</p>
					</li>
					<li>
					<p><font size="5" face="黑体"><strong>道生一，一生二，二生三，三生万物</strong></font><br>
					何谓道，这是个还要继续追寻的真理。目前还不明确<br>
					还是说null吧，null就如同这个道，如同宇宙出生于混沌，null是什么，讲不清，道不明，null就是null，它既是无，又存在。</p>
					</li>
					</ol>
					</div><div class="cl-preview-section"><p>万物皆对象，其他的对象，通过构造函数创造，于是乎又诞生了Object和Function，他们彼此结合，提供了原型（prototype）和构造器（constructor）,一个为子孙提供基因，一个负责制造万千子孙，如果说null是上帝，那么他们俩就如同亚当和夏娃。</p>
					</div><div class="cl-preview-section"><ol start="3">
					<li><font size="5" face="黑体"><strong>什么是原型prototype</strong></font><br>
					什么是原型，通俗的讲，就是一个模子，要制作一件陶器，得先有个模子，照着这个模子，才能批量的生产，而prototype就是对象的模子，既然是模子，那么它也是存在的，它也是对象。构造函数，负责批量的生产。<br>
					如何找到这个模子呢，在js中函数function存在一个属性，即prototype属性，可以通过函数来访问。记住，只有函数存在prototype属性，例如：</li>
					</ol>
					</div><div class="cl-preview-section"><pre><code>
						function Person(){}
					       var person = new Person();
					</code></pre>
					</div><div class="cl-preview-section"><p>在浏览器里观察<br>
					<img src="https://img-blog.csdn.net/20181014125436857?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					可以看到Person通过prototype属性找到它的原型对象即Person.prototype，原型有通过constructor指向Person。意思就如同Person说，我的原型是Person.prototype,而Person.prototype说Person是我的构造器。就像酱紫：<br>
					<img src="https://img-blog.csdn.net/20181014130810372?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					可是prototype是只有function才有的属性，我们如何对每个对象该如何追根溯源呢？难道他们是猴子吗，是从石头缝里蹦出来的吗？emmm…这是一个问题。</p>
					</div><div class="cl-preview-section"><ol start="4">
					<li><font size="5" face="黑体"><strong>真正的基因__proto__</strong></font><br>
					每个对象都有着__proto__属性，它的作用是什么呢？就是告诉我们不要忘了自己的根儿…<br>
					接着看刚才那副图片<br>
					<img src="https://img-blog.csdn.net/2018101413210411?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					看到了一个浅紫色的__proto__，这是什么呢，__proto__指向了Object这能说明什么呢？先不急。<br>
					再来看看下一个</li>
					</ol>
					</div><div class="cl-preview-section"><pre><code> function Person(){}
					 var person = new Person();
					</code></pre>
					</div><div class="cl-preview-section"><p>举个栗子<br>
					我们通过构造函数Person实例化出一个新的小person，小person年少无知忘了自己亲爹是谁了，就问他面前的Person构造函数<br>
					说,“你是我爹吗？”<br>
					构造函数上去就是一嘴巴子，“完蛋玩意，我是你妈啊 ! 是我生的你啊，真完蛋！”。<br>
					小person明白了，哦 ，你是我妈，那我爹是谁啊？<br>
					他妈又是一嘴巴子说：你爹是Person.prototype！<br>
					谁知小person很气愤的说：“你说我爹是Person.prototype那就是吗？我不信! 万一不是呢…”。<br>
					只好拉着小person去做了基因检测，发现小person身上的基因__proto__的确是指向Person.prototype ,<br>
					<img src="https://img-blog.csdn.net/20181014134254191?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					至此，小person终于找到了自己的亲爹。<br>
					开个玩笑哈，方便去理解，这里的爹指的就是原型，就是那个模子。关系图如下。<br>
					<img src="https://img-blog.csdn.net/20181014212301115?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					对于__proto__属性，官方不建议使用，不建议对此属性进行操作，__proto__属于内部属性。若要检查对象的原型，可以通过</p>
					</div><div class="cl-preview-section"><ul>
					<li>instanceof 运算符返回一个布尔值，表示一个对象是否由某个构造函数创建。</li>
					<li>Object.isPrototypeOf()只要某个对象处在原型链上，也会返回一个bool值，若为true就说明对象是其原型。</li>
					<li>当然还有别的方法</li>
					</ul>
					</div><div class="cl-preview-section"><p>借此，我们就可以顺着这个基因链顺藤摸瓜，找到每一个对象的祖先。再次说一下，<strong>__proto__是每个对象都有的属性</strong>，function也是对象，也不例外。来试一试吧，来看看大person的爹是谁，小person妈妈(构造函数)的爹又是谁。<br>
					<img src="https://img-blog.csdn.net/20181014135933429?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"></p>
					</div><div class="cl-preview-section"><p>上面可以看到<strong>构造函数</strong>Person的祖先,就是Function原型对象。<br>
					<img src="https://img-blog.csdn.net/20181014140121364?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					可以看到小person祖先是Person.prototype原型对象，Person.prototype原型的祖先是Object.prototype原型对象。<br>
					并且可以看到Function.prototype的祖先也是Object.protype原型对象。<br>
					<img src="https://img-blog.csdnimg.cn/20181027100438172.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3,size_27,color_FFFFFF,t_70" alt="在这里插入图片描述"><br>
					也就是说Object.protype原型对象，是所有对象的的最祖先原型，即太太太太爷爷。</p>
					</div><div class="cl-preview-section"><p>我们还可以继续追根溯源,看看他们的祖先，太太太太爷爷的爹到底是谁<img src="https://img-blog.csdn.net/20181014140531223?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					最终发现对象的祖先是来源于一个null，还当真映了佛门那句，四大皆空，amazing。</p>
					</div><div class="cl-preview-section"><p>借此，以一幅图，来展示整个原型的关系结构：<br>
					<img src="https://img-blog.csdnimg.cn/20181210095109163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br>
					看到这个是不是有些蒙蔽，这啥玩意指来指去的，什么鬼。好吧，我承认这个图是有些复杂了，但是绝对是我良心之作。</p>
					</div><div class="cl-preview-section"><p>为了方便于理解，我又画了一个浓缩版的。<br>
					<img src="https://img-blog.csdn.net/20181014215222527?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="在这里插入图片描述"><br>
					大图是重点，可以看出，像这种，一个原型对象，作为另一个实例的原型，而原型对象，又是另一个原型的实例，通过__proto__属性链接，最终形成的这种层层递进的链式结构，也就是原型链的原理。</p>
					</div></div> <div class="gutter" style="left: 0px;"><!----></div></div> <!----></div>`},{

					},{},{}]
    },
    mounted(){
      	this.drawMap();
    },
    methods:{
    	drawMap:function(){
    		var myChart = this.echarts.init(document.querySelector('#myCharts'))
	        // 绘制图表
	        myChart.setOption(airOption);
	    },
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

new Vue({
	el:'.content-gt',
	data:{
	  	cardDate:[{
	  			"title":"绿茶",
	        	"imgSrc":'tea/cha5.jpg'
	        },{
	        	"title":"苏州碧螺春",
	        	"imgSrc":'tea/cha2.jpg'
	        },{
	        	"title":"大红袍",
	        	"imgSrc":'tea/cha7.jpg'
	        },{
	        	"title":"紫阳毛尖",
	        	"imgSrc":'tea/cha4.jpg'
	        },{
	        	"title":"茉莉花茶",
	        	"imgSrc":'tea/cha3.jpg'
	        },{
	        	"title":"西湖龙井",
	        	"imgSrc":'tea/cha6.jpg'
	        }],
	},
	methods:{

	}
})


