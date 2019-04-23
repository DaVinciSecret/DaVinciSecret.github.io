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
        imglist:['data/asset/image/poster/banner1.jpg','data/asset/image/poster/banner2.jpg','data/asset/image/poster/banner3.jpg','data/asset/image/poster/banner4.jpg'],
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
				title:'js运行机制',
				subtitle:'不要被事物的表面现象所迷惑……',
				time:'2/16/2017',
				author:'川枫·流',
				content:`<div class="preview"><div class="preview__inner-1"><div class="preview__inner-2 markdown_views prism-atom-one-dark" style="padding: 10px 20px 42px;"><div class="cl-preview-section"><p>快有一个月没写博客了，真是造孽啊。双十一也过去了，然鹅什么都没买。虽然双十一结束了，但是我却从此就要摆脱之前的单身生活，转而开始新的单身生活。最近这段时间一直在回顾反思，并学习一些新的东西。对于js的运行机制，也有了更深入的理解，之前写过一篇文章，但是那篇文章对于js的底层原理并没有深入的探讨。<br>
					通过一段时间的学习，我重新去深入的了解底层的运行机制，在此作以分享。<br>
					先上图：<br>
					</div><div class="cl-preview-section"><p>精髓之图！！！<br>
					<img src="https://img-blog.csdnimg.cn/20181118193444935.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzIzMjcxODI3,size_16,color_FFFFFF,t_70" alt="在这里插入图片描述"><br>
					这张图看着“比较”复杂，我会对其中的部分进行详细的讲解，<br>
					我会从以下几个部分对这张图的内容进行解释。<br>
					(1)进程与线程<br>
					(2)多进程的浏览器<br>
					(3)为什么js单线程<br>
					(4)同步与异步<br>
					(5)事件列表，事件队列，ESC执行栈，EventLoop。<br>
					(6)其他部分<br>
					(7)Promise中js处理机制的进阶宏任务与微任务。<br>
					</div><div class="cl-preview-section"><p>对于这篇文章目前的规划就是这些。接下来就来聊聊这些。<br>
					<h3>(1)进程与线程</h3><br>
					为什么要说这个，对于大多数人也许了解什么是进程什么是线程，即便如此还是有必要说一说的，并且很多人对于浏览器是类型的却并不了解，所以有必要说一下。<br>
					进程是内存分配的最小单位<br>
					线程是cpu调度的最小单位<br>
					抽象派：<br>
					进程就是一个加工厂，每个加工厂里的工人相当于线程，工人们相互协作完成任务，工厂内部的资源大家共同利用。工厂与工厂之间互相独立。<br>
					每个工厂里，都至少有一个工人。这就是进程与线程的原理。不做深究。<br>
					<h3>(2)多进程的浏览器</h3><br>
					浏览器是多进程的，可以通过查看浏览器的任务管理器了解
					</div><div class="cl-preview-section"><p>浏览器是多进程的，并且每打开一个新的tab页，就会增加一个进程。<br>
					并且相同的tab页的进程会被合并，这些可以自行验证。<br>
					浏览的对进程主要有以下几个：</p>
					</div><div class="cl-preview-section"><ul>
					<li style:"text-decoration:underline;">Browser进程</li>
					<li style:"text-decoration:underline;">render进程</li>
					<li style:"text-decoration:underline;">GPU进程</li>
					<li style:"text-decoration:underline;">第三方插件进程</li>
					<li style:"text-decoration:underline;">以及每个tab页都是一个进程</li>
					</ul>
					</div><div class="cl-preview-section"><p>(3)js单线程<br>
					我们所接触的每个页面是一个进程，而参与处理这个页面的进程主要是由render进程完成的，render进程内部又是多线程的，主要分为以下几个线程</p>
					</div><div class="cl-preview-section"><ul>
					<li style:"font-weight:bold;font-size:18px;">异步的http请求线程；</li>
					<li style:"font-weight:bold;font-size:18px;">事件触发线程</li>
					<li style:"font-weight:bold;font-size:18px;">定时器触发线程</li>
					<li style:"font-weight:bold;font-size:18px;">GUI渲染线程</li>
					<li style:"font-weight:bold;font-size:18px;">js引擎线程</li>
					</ul>
					</div><div class="cl-preview-section"><p>从上面可以看出来，浏览器只给了每个页面处理js的一条线程，也就是js引擎线程，所以js是单线程的，这大概众所周知了，可是为什么js是单线程的，不见得重做周知，浏览器是多进程的，对于每个页面的处理其实也是多线程的，但是对于js的处理，浏览器就给了一条线程。为什么呢，了解一样技术首先得从它的需求入手，不是说什么什么也可以什么什么，事情并没有想的那么简单。对于js也不例外，js的设计初衷，是为了页面交互，为了给浏览网页的用户带来更良好的交互体验，试想，如果js是多线程的，在同一时刻用户操作网页中的某个节点，但同时另一个线程要删除这个节点，浏览器该当如何，既不能影响用户正常体验，又要删除，并且谁能知道这个节点操作后，是否还会有后续操作。会带来一系列的问题。所以作者，反其道而行之，不如化简为一，只通过一条线程去处理。这就是为什么js最初被设计成单线程的原因。当然省了事，就会带来别的问题。<br>
					<h3>(4)同步与异步<br></h3>
					同步通俗的说就是一个时间段只能干一件事，每个任务都必须在前一个任务执行结束后，在执行，就如同排队一样，来的早的先办事，并且前一个任务不论耗时多久，后面的任务都得等，直到前面的任务结束。这样就会造成一些问题，例如：如果一个页面在执行某个任务，但是因此耗费了很长的执行时间，导致的问题就是，用户不能进行别的操作，一直等待页面的响应，这就会产生一种页面卡死的现象，会带来极差的用户体验。所以有了异步的产生。<br>
					异步是指：通俗的说就是同时干多件事，不必等待之前的任务执行结束，后面的任务也可以去执行，这样就可以解决同步所造成的资源浪费，并且对于js来说，也就能更有效的利用cpu的资源，js本质是直接耗费cpu资源的，这也是解释性语言的特点，直接通过解释器，再通过解码器，有的甚至不通过解码器例如V8引擎，就直接转换为二进制，供cpu进行运算。<br>
					但是js中是如何实现异步的呢，按理来说js不是单线程吗？我们要明确一点js是单线程，本质上并没有改变。只是它实现异步的方式有它的不同之处。<br>
					<h3>(5)事件列表，事件队列，ESC执行栈，EventLoop。</h3><br>
					接下来就是重头戏了。这里开始涉及到js的运行机制问题，所以敲黑板！！！<br>
					ESC执行栈：Execution Context即管理执行期上下文，是一个栈结构，所有的同步任务均由他管理执行，并且同步任务均属于js主线程上的任务，由ESC执行栈完成调用，所有的其他的异步任务基本上存在于事件列表中，事件列表与事件队列并不相同，异步任务主要分两种，一种是定时器异步任务，另一种是回调任务，这两种任务分别又不同的线程控制，定时器类型的异步任务是由定时器触发线程管理，异步回调任务是由事件处理线程进行管理的，接下来说说这些任务的运作方式。<br>
					：事件列表，存放所有的异步任务，在事件列表中挂起执行，<br>
					：事件队列，异步任务执行得到响应后，会将对应的完成的异步任务事件加至事件队列中，之后被ESC执行栈调用。<br>
					整个的这一过程就是EventLoop的机制。<br>
					对于主线程上的任务，他们会进入ESC执行栈，受执行栈直接控制，然后对应的异步任务，会被对应的线程进行管理，回调类型的异步任务会进入事件列表，此类任务会被挂起执行，等待I/O返回结果，结果返回后，会被推入事件列表，等待ESC执行栈中的任务执行完毕，然后进行EventLoop（事件循环），会到事件队列中的头部获取等待执行的任务。对于定时器类型的异步任务，直接由定时器事件触发线程管理，定时到时后就会将任务直接推入事件队列之中，如此循环往复，只要ESC执行栈中的任务结束，也就是主线程上的任务结束，就会进行事件循环，检查事件列表，异步任务，通过各自线程的管理进入事件列表，在没有主线程任务时被ESC获取，这就是最初的js执行机制。<br>
					对于执行栈部分的js代码解析过程，在本章节不重点讨论。但是大概说一下，因为涉及到的知识点比较多如词法作用域、scope、scope chain、prototype、prototype chain、VO、AO、以及Context（执行期上下文）、解析规则等等的问题，可以重新开几个章节讨论了,所以我只提几个点，<br>
					像之前说的任务进入ESC执行栈中执行，说白了就是function里的代码在ESC执行栈里执行，但是在进入ESC执行栈执行之前还会有好多的事情发生，在函数创建的时候，就会发生一件事，即函数的作用域在它定义时就决定了，函数内部的属性[[scope]]会保存所有函数外部变量到其中，就是所有外部变量对象的层级连，然后在函数进入ESC时函数被激活，别以为就这么简单，在激活的时候，也会发生很多事，创建作用域、创建活动对象AO，并且初始化AO，加入形参，函数声明，变量声明，然后会就将AO对象压入自身作用域链的顶端，然后才开始操作函数，函数执行的时候就是对AO对象进行修改，需要什么先在自己的AO上找，找不到就沿着作用链向上找。最后函数执行结束，从ESC中弹出，被释放。大致就是如此。</p>
					</div><div class="cl-preview-section"><hr>
					进阶：
					</div><div class="cl-preview-section"><p>以上所讲的js运行机制，很多人已经了解，当然很多人应该也不了解，当初我理解到此处的时候已经觉得上了一个层面，可是后来因为一些编程中遇到的例子，发现并不能解释的通，就很奇怪，于是乎又是一对搜索，不过说实话，搜索能给的帮助太少了，多数文章千篇一律，一个抄一个，最后还是在基佬俱乐部github上得到了答案。</p>
					</div><div class="cl-preview-section"><p>&nbsp;&nbsp;&nbsp;之前的运行机制，在我们遇到一般的程序可以解释的通，并且之前的运行机制也并没有错，只是它还不够完善。因为Promise的出现，它将js运行机制又划分了另一个层面。可以尝试一下图片中的例子，我都给到了，可以自己试一试。Promise将js底层的任务划分的更加明确，即微任务（microTask）和宏任务（macroTask）的概念<br>
					&nbsp;&nbsp;&nbsp;<strong>宏任务</strong>：就是ESC执行执行栈当中的任务，既包含当前的js主程序代码，定时器的异步触发任务等，因为最终都会进入ESC执行栈，他们是从事件队列中获取的。<br>
					&nbsp;&nbsp;&nbsp;<strong>微任务</strong>：是更为细化的一种任务，它的执行比setTimeOut还要快，setTimeOut最小时间为4ms，即便设为0，这是最小的设定。例如Promise、Promise.nextTick这些是属于微任务。</p>
					</div><div class="cl-preview-section"><p>那他们是怎么运行的呢？</p>
					</div><div class="cl-preview-section"><p>&nbsp;&nbsp;&nbsp;宏任务依然是在ESC执行栈中执行，与之前的同步任务，还有异步任务的运作方式是一样的，并且事件的循环也是一样的，只是在每次重新向ESC执行栈中添加新任务时，会加一层操作，就是检查微任务队列。在代码执行过程中，所有遇到的微任务microTask，也会进入一个队列中，这个微任务队列直接由js引擎线程控制。每次ESC执行栈中的一个宏任务执行结束，就会去检查微任务队列，寻找本轮是否还有微任务没有执行，然后执行微任务。只有本轮的宏任务和微任务都执行结束，然后开始检查渲染，此时由GUI线程接管渲染。渲染完毕后，就又会由JS引擎接管，开始下一轮的宏任务。</p>
					</div><div class="cl-preview-section"><p>&nbsp;&nbsp;&nbsp;问题到了此处，已经又是一个层面了，是不是觉得我逼话连篇，嘿嘿嘿，但是，理解到此处，却是豁然开朗的感觉，我也懒的敲代码示例了，理解原理，并且总结画出那张图花了不少时间，并且也把代码示例附在了图上，可以自己尝试。唉…，底层的东西太多，太深了，我还是知道的少。继续吧，不要松懈。</p>
					</div><div class="cl-preview-section"><p>哦对了，图片里还涉及到一些，其他的知识，有兴趣的可以自行了解，本篇就先说到这里。有些点说的比较笼统，后续应该还会有补充。</p>
					</div></div> <div class="gutter" style="left: 0px;"><!----></div></div> <!----></div>`
					},{},{}]
    },
    mounted(){
      	this.drawMap();
      	this.drawSystemMap();
    },
    methods:{
    	drawMap:function(){
    		var myChart = this.echarts.init(document.querySelector('#myCharts'));
	        // 绘制图表
	        myChart.setOption(airOption);
	    },
	    drawSystemMap:function(){
	    	var myChart2 = this.echarts.init(document.querySelector('#myCharts2'))
	    	myChart2.showLoading();

			$.get('https://echarts.baidu.com/data/asset/data/les-miserables.gexf', function (xml) {
			    myChart2.hideLoading();

			    var graph = echarts.dataTool.gexf.parse(xml);
			    var categories = [];
			    for (var i = 0; i < 9; i++) {
			        categories[i] = {
			            name: '类目' + i
			        };
			    }
			    graph.nodes.forEach(function (node) {
			        node.itemStyle = null;
			        node.value = node.symbolSize;
			        node.symbolSize /= 1.5;
			        node.label = {
			            normal: {
			                show: node.symbolSize > 10
			            }
			        };
			        node.category = node.attributes.modularity_class;
			    });
			    option = {
			        title: {
			            text: 'Les Miserables',
			            subtext: 'Circular layout',
			            top: 'bottom',
			            left: 'right'
			        },
			        tooltip: {},
			        legend: [{
			            // selectedMode: 'single',
			            data: categories.map(function (a) {
			                return a.name;
			            })
			        }],
			        animationDurationUpdate: 1500,
			        animationEasingUpdate: 'quinticInOut',
			        series : [
			            {
			                name: 'Les Miserables',
			                type: 'graph',
			                layout: 'circular',
			                circular: {
			                    rotateLabel: true
			                },
			                data: graph.nodes,
			                links: graph.links,
			                categories: categories,
			                roam: true,
			                label: {
			                    normal: {
			                        position: 'right',
			                        formatter: '{b}'
			                    }
			                },
			                lineStyle: {
			                    normal: {
			                        color: 'source',
			                        curveness: 0.3
			                    }
			                }
			            }
			        ]
			    };

			    myChart2.setOption(option);
			}, 'xml');
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
	        	"imgSrc":'data/asset/image/tea/cha5.jpg'
	        },{
	        	"title":"苏州碧螺春",
	        	"imgSrc":'data/asset/image/tea/cha2.jpg'
	        },{
	        	"title":"大红袍",
	        	"imgSrc":'data/asset/image/tea/cha7.jpg'
	        },{
	        	"title":"紫阳毛尖",
	        	"imgSrc":'data/asset/image/tea/cha4.jpg'
	        },{
	        	"title":"茉莉花茶",
	        	"imgSrc":'data/asset/image/tea/cha3.jpg'
	        },{
	        	"title":"西湖龙井",
	        	"imgSrc":'data/asset/image/tea/cha6.jpg'
	        }],
	},
	methods:{

	}
})


