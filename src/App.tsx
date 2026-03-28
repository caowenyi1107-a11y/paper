import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

const heroImages = [
  new URL('../素材/个人照1.jpg', import.meta.url).href,
  new URL('../素材/个人照2.jpg', import.meta.url).href,
  new URL('../素材/个人照3.jpg', import.meta.url).href,
  new URL('../素材/个人照4.jpg', import.meta.url).href,
] as const;

const dollProjects = [
  {
    name: 'wrmi',
    attribute: 'dio',
    factory: '誉家玩偶定制',
    images: [
      new URL('../素材/wrmi1.jpg', import.meta.url).href,
      new URL('../素材/wrmi2.jpg', import.meta.url).href,
      new URL('../素材/wrmi3.jpg', import.meta.url).href,
      new URL('../素材/wrmi4.jpg', import.meta.url).href,
    ],
  },
  {
    name: 'heaven',
    attribute: 'dio',
    factory: 'QD玩偶制作',
    images: [
      new URL('../素材/heaven1.jpg', import.meta.url).href,
      new URL('../素材/heaven2.jpg', import.meta.url).href,
      new URL('../素材/heaven3.jpg', import.meta.url).href,
      new URL('../素材/heaven4.jpg', import.meta.url).href,
    ],
  },
  {
    name: '豆豆迪',
    attribute: 'dio',
    factory: 'QD玩偶制作',
    images: [
      new URL('../素材/豆豆迪1.jpg', import.meta.url).href,
      new URL('../素材/豆豆迪2.jpg', import.meta.url).href,
      new URL('../素材/豆豆迪3.jpg', import.meta.url).href,
      new URL('../素材/豆豆迪4.jpg', import.meta.url).href,
    ],
  },
] as const;

const activityMerchImages = [
  new URL('../素材/无料1.jpg', import.meta.url).href,
  new URL('../素材/无料2.jpg', import.meta.url).href,
  new URL('../素材/无料3.jpg', import.meta.url).href,
] as const;

const processSteps = [
  { index: '01', title: '约稿', desc: '基于角色设定整理需求，与画师沟通稿件方向。' },
  { index: '02', title: '打样', desc: '对接厂家进行初样制作，并围绕细节进行调整。' },
  { index: '03', title: '宣发 / 成团', desc: '推进宣传、拉群、下单与成团节奏管理。' },
  { index: '04', title: '出货', desc: '完成地址整理、邮费补缴与代发对接，确保顺利寄送。' },
] as const;

const fanficWorks = [
  {
    title: '《杨老师》',
    preview: [
      '今儿是杨戬第一天上班。',
      '大学生逃不过选修课，听又听不进，不去又怕点名，反正就是烦的不行。',
      '杨戬踩着点走进了课室，手中还拿着个冒着热气的保温杯。',
    ],
    fullText: `今儿是杨戬第一天上班。
大学生逃不过选修课，听又听不进，不去又怕点名，反正就是烦的不行。今天是本学期第一节中国神话课，第一节课总归是人多点，聪明的大学生早早地去到占位——当然是从后往前。
也不知怎么，这堂课给安排了巨大的课室，就是所有学生来齐了也不过占了二分之一。
杨戬踩着点走进了课室，手中还拿着个冒着热气的保温杯，里头泡着养生枸杞茶。
半个课室都是空的，离他最近的第一排同学也是十万八千里远，坐在后头的同学们通通低着头。
杨老师放下保温杯，轻轻咳嗽了两声，“咳咳。”
听到老师来了，底下的几个同学终于抬起了自己高贵的头颅，随之几声惊呼在人群中响起。
“卧槽，这么靓仔的老师？？”
随之同学们纷纷放下手机，探头探脑地看着台上的老师。
杨老师双手撑着讲台，健壮的腰背隔着衣服都展露无遗，勾着嘴角玩味地看着底下伸长脖子的小朋友们，半长的头发在后脑勺扎了个小啾啾，好一个年轻帅气的男老师。
“鄙姓杨，单名戬。”杨戬一边自我介绍，一边拿了支粉笔，在黑板上洋洋洒洒地烙下了苍劲有力的“杨戬”二字。
“今儿开始，就是你们的中国神话老师，平时不点名，期末800字论文。”
哪来的神仙老师啊！长得帅还不点名！
杨老师说话语气温和，语调也没什么起伏，讲的东西对大学生来说实属无聊，他也不管下头的学生有没有听，他讲他的，重点是赚个钱回家还得养外甥和狗子。
所以台上耷拉着眼睛自顾自讲着这些乱七八糟半真半假神仙八卦的杨戬老师并没有发现下头的学生早就小小声地爆炸了。
“卧槽，你们快过来，我选修课老师帅呆了。”
[图片][图片]
女生A在宿舍群扔下一个炸弹。
“速来！”舍友们光速回复。
下课铃声响，一节课终于过去了，杨戬叹了口气，拿着喝空的保温杯说了句“同学们下课休息一下”就潇洒地离开了课室去打水。
杨老师一离开的课室，几个人一溜烟地从后排冲去前排占着位置，课室外也涌进来了一拨人，整个课室闹哄哄的。
本人不在场，学生们肆无忌惮地讨论着刚刚的帅哥老师。
“太帅了吧我晕！”
“怎么会有人用保温杯喝水都这么帅！！”
“他刚刚走出去你看到没，卧槽腿好长！！！”

而被夸的杨老师本人，此时被他的好外甥给缠住了。
“舅舅。”
杨戬打着水，今晚的月亮很亮，他盯着地上的一片月光发呆。
突然，一个影子擦过，随后背部就撞上了一个结实的胸膛，两条手臂环上自己的腰，熟悉的味道瞬间把他包围，热气轻轻喷洒在耳畔。
杨戬叹了口气，把溢出来的热水关掉。
手肘轻轻往后怼了怼，还不敢用什么劲儿，“行了啊你，在学校呢，被人看见不好。”
环在腰上手臂却更加收紧。
“你刚刚怎么都不看我。”
哪里没看，这人身高体长的，坐在最后一排都扎眼得不行，眼睛跟喷火似的烙在自己身上，非常影响杨老师的讲课效率，索性不看拉到。
“还有好多人看你。”后槽牙摩擦的声音清晰可见，沉香一口咬上了杨戬漂亮的脖子。
狗崽子！
杨戬反手给沉香来了个锁喉把人给推开，赶紧揉了揉脖子，等会儿还要不要上课了！
成年后的沉香抽条似的长，比他舅舅还要高上几公分，此时却跟认错的的小狗似的耷拉下脑袋。还往杨戬颈窝上蹭，一副受了伤的可怜模样。
杨戬无奈，薅了两把沉香利落的短发，给小狗顺顺毛。
跟杨戬还留着个骚包的小啾啾不同，沉香剪了短发。成年后，靠着过人的体能以体育特长生的身份考进了这间大学。
两人确认关系后沉香对杨戬的占有欲越发肆无忌惮，杨戬的一步一步退让也给了沉香无数的有机可乘。
当然。杨戬也未必不是乐在其中。

刚走进课室门，杨戬就退了出来，看了看有没有走错课室。
没错啊？
怎么这么多人？？
刚刚不过一半人，现在整个课室都满了，他刚刚一扫，甚至有几个姑娘是两个人挤着一张椅子。
杨戬什么大风大浪没见过，确认了没走错教室就大摇大摆地走上了讲台，轻轻放下保温杯，环视了一周底下座无虚席的学生们。
下头的学生都跟憋着劲儿似的鸦雀无声，几个小姑娘涨红了脸，还有人在偷偷地拍照录像。
天下第一美战神对这种景象实在司空见惯，只是这回实在无法忽视从后门走进来在最后一排一屁股坐下的大外甥了。
“来我们开始上课。”
杨老师虽然自顾自地讲着，但这故事讲得确实也是幽默又风趣，加上那张帅脸的加成，他说啥都有人应和，实属是把这死气沉沉的选修课给盘活了。
终于放学了，杨戬在心里叹了口气——赶紧下班吧。
杨戬象征性的地说了句“有人有问题可以上来提问。”拿着保温杯就准备跑路。
结果几个小女生一溜烟跑了上来，围着他就问：“杨老师！所以说齐天大圣和二郎真君谁更强一点呀？”
杨戬打着哈哈，一边解释一边想赶紧溜之大吉。
后排抱着双臂死盯着他的大外甥那眼神都快把他吃了。
可惜学生们看不出杨老师想下班，杨老师也心软，不好意思丢下一群热情的学生。
“砰”的一声 ，沉香一脚踹开后门走了出课室，挤在讲台上的学生和杨戬都吓了一跳.
结果沉香又从前门绕了过来，脸色阴沉地一锤门，“关门了，赶紧走。”
成年后的沉香被他心软的舅舅宠得柔软了几分，但是刻在骨子里的占有欲一旦爆发出来着实又几分吓人，那股子凶神恶煞的味道吓得几个小姑娘也顾不上眼前的帅气男老师了，拉扯着赶紧跑路。
只留下终于下班的杨老师懒洋洋地单手撑着讲台，一脸戏谑地看着眼前炸了毛的大外甥。
杨戬冲沉香招了招手，沉香“啪”地把灯关了，亮堂堂的课室瞬间陷入了一片黑暗。
沉香欺身而上，把杨老师压在了三尺讲台之上。一只手还圈过杨戬精瘦，怕讲台的边缘硌到他。
“你怎么这么招人啊，身上臭死了！！！”沉香狠的牙痒痒，他舅舅怎么天生就长了这么张招人的脸！
他狠狠地蹭着杨戬的脖颈，恨不得在这个人全身都沾上自己的味道。
沉香又露出了自己的虎牙，这回杨戬有所准备，一把捂住了沉香的嘴。
“行了行了。”杨戬被自己外甥压着也不恼，还是那股子漫不经心的语调，又把手轻轻搭在沉香脖子上，往下轻轻一压。
啃了一下沉香嘴皮子。
沉香还没反应过来，就被杨戬提着后脑勺拎了起来。
讲了一晚上课的杨老师累死了，一手搭着外甥的脖子，半个人的重量都靠在人家身上。
没白养这么多年，比自己高几公分的身高搭拉起来最合适。
“走！陪舅舅吃宵夜去！”`,
  },
  {
    title: '《早班火车》',
    preview: ['今年冬天，张沉和程声来到了南方。', '“沉沉，我要冷死了。”', '“南方真的太潮湿了，就像我们的爱一样。”'],
    fullText: `早班火车

今年冬天，张沉和程声来到了南方。
“沉沉，我要冷死了。”
程声穿着厚厚的大棉裤和大棉袄，在沙发上里缩成一团。
南方寒潮来袭，又湿又冷。
张沉在沙发的另一头拿着把吉他扒拉。
他在练习一首粤语歌。
几秒钟过去了，张沉也没搭理他。
3，2，1。
一团毛茸茸直接向自己滚了过来，张沉一只手把吉他拿起，另一只手护着这坨人，让程声躺在了自己的腿上。
张沉摸上他的脸，指腹顺着眉毛、眼睛、鼻梁，再到嘴唇。
程声喜欢张沉这样抚摸自己，虽然他什么也没有说，但是程声觉得自己是被珍视的。
那双墨一样的眼眸无声地说着：“我爱你。”

除夕夜，是张沉今年巡演的最后一场。
今年的南方特别的冷，空气中潮湿的水分夹杂着寒气，无孔不入地入侵人的每一束神经。
但是有张沉在的场子必然是热的。
程声一个人坐在二楼。
他跟着张沉跑了很多个城市，看过他的每一场演出。
有时候会利用家属的权利坐在最好的位置，有时候是混在人群。
在台下看台上的张沉，程声怎么都不会腻。
耳边除了张沉或娓娓道来或张扬肆意的声音，还有铺天盖地的尖叫声、欢呼声，还会有男男女女声嘶力竭地喊着：“张沉我爱你！”
但是他只爱我。程声总是这样想。

从二楼看过去，距离有点远了，程声看不清张沉的表情。
除夕佳节，还是有很多人来看他演出。
太多人沉醉在舞台上的张沉了。是喜欢吗？不一定。
大概是羡慕。
羡慕他可以站在台上，用吉他和音乐演奏他的声音，音符和旋律替他诉说那些凝固在角落无人问津的情绪和故事。
有太多人站在台下，喉咙嘶哑，精神疲倦，用尽全力想要说些什么，最后只能沉默地闭上嘴巴。
他们站在台下听张沉一首一首唱颂他的孤独和自由，就好像他们也被插上自由的翅膀，可以无拘无束地高高飞起。

程声一直看着张沉。
但是张沉一直没有抬头，他明明知道自己在这里。

“接下来这首歌，是一首经典的粤语歌。”
“唱给你们。”

南方真的太潮湿了，就像我们的爱一样。
程声有段时间很不适应回南天。
干不了的衣服，湿漉漉的墙壁和镜子，一连好几天都见不到太阳，抬起头只能看见灰色阴暗的天空。
连张沉的怀抱都是潮湿的。
后来张沉拉着他在浴室接吻，水从花洒浇在两人身上，滑腻湿润的皮肤相互摩擦，水的连接让两个人似乎真正地融化在一起。

程声站了起来，身前的栏杆不过到自己的腰，好像只要稍微往前倾一点点，就会摔下去。
“火车呜呜那声响”
“在耳边偏偏似柔柔唱”
张沉抬起了头，明明一直看不清他的表情，此时程声却看见张沉闭着眼，嘴角微微带着笑意，身体随着旋律轻轻摇晃。
程声摸上了自己的胸膛，心跳沉稳而有力，好像慢慢和鼓点重叠在一起。
场下的人似乎都呆滞了，沉醉在这首悠扬婉转的情歌之中。

“盼永不分散”
“仍然幻想一天我是你终站，你轻倚我臂弯”
摔下去会被张沉接住，程声想。
程声摸了摸无名指上的银色素圈。
灯光打在张沉身上，同样的位置，张沉的无名指上反射一小个光点。
一曲而终，结尾是一段火车进站的鸣笛声。
与心跳声重叠的火车最终安稳地到达了它的终站。

距离除夕结束、大年初一到来还有不到十分钟。
张沉和程声十指相扣，漫步在城市的环城江边。
视野之内是城市的标志建筑。
明明夜色渐晚，明明寒风肆意，江边却依然喧闹。
每个人似乎都在兴奋地等待着新一年的到来。
辞旧迎新，一个不可避免的仪式感。

张沉的手总是凉凉的，程声这几年身体慢慢好起来了，只要穿得暖和了，双手就是个小火炉，他甚至不介意张沉把手伸进自己脖子里取暖。
张沉的拇指一下一下地拂过程声的指节。
平时这个时候，程声早就叽叽喳喳地说个不停了。
张沉突然停了下来，另一只手扣上程声的下巴，凑近他的脸。
程声以为张沉要吻他，顺着他的动作抬起头，闭上了双眼。
几秒过去，身前的人也没有动作。
程声睁开眼睛，看到眼前的人戏谑地看着自己，然后在自己的嘴唇上快速啄一下。
“沉沉！”程声惊呼。
张沉轻笑一声，扣着程声的手又拽得更紧了一点。
“你干嘛。”程声问。
“为什么不开心？”
程声愣了一下，说：“你最后那首歌，唱得我有点难过。”
“你哄哄我。”
闻言，张沉停下脚步，抓着程声的手放在自己的脸上。
张沉的脸被风吹得凉凉的，程声没有挣开他的手，手指摸摸他的耳朵，蹭蹭他的脸颊。
他盯着程声的脸。
脸颊有肉了，眼睛亮晶晶的，像小狗一样，但是眼角有点红，鼻头也是红红的，大概是被风吹的。
张沉捏捏他的手，两人的手指交错，指尖的素戒碰了一下，然后张沉亲吻了一下程声的掌心。

周围的人群开始骚动，最高的建筑上开始倒计时。
3——2——1
“新年快乐！”
人群中爆发出兴奋的呼喊声，新的一年悄然而至。
盛大的烟火划过天际，璀璨的星星点点照亮了无垠的夜空，点燃了新年的气息。
张沉和程声看向对方，和身边的人又一起度过一年了。
烟花炸开的声音震耳欲聋。
程声扑进张沉怀里，兴奋地贴着张沉的耳朵喊着：“沉沉新年快乐！我爱你！”
张沉看着程声映着烟火的眼睛，细碎的光像银河的星星流淌在他的双眸，然后他看到了自己，曾经一团黑影的他，在程声的眼中，竟也如何清晰可见。
张沉揽住他的腰，从后脑勺抚向脖颈，安抚似的捏了捏。
在盛大烟花的注视下，两人相拥得密不可分，就像他们过往的每一次拥抱一样，今年、明年、未来的每一年，他们都是彼此的终站。
“我也爱你声声，新年快乐。”`,
  },
  {
    title: '《飞机之上》',
    preview: ['如果是需要乘坐飞机作为交通工具的旅程，研磨会带上不用联网的游戏机。', '“我想要一张毯子。”', '“睡吧小黑。”'],
    fullText: `如果是需要乘坐飞机作为交通工具的旅程，研磨会带上不用联网的游戏机。在高空之上常人会觉得百无聊赖的几个小时，研磨反而会觉得这是没人打扰可以畅快打游戏的快乐时光。
黑尾反而是坐飞机反应很大的类型，气压变化导致的鼓膜刺痛会伴随整趟飞行，连身边恋人的声音都雾蒙蒙的。

“小黑，你还好吗？”研磨看到戴着口罩的恋人也掩饰不住的脸色差劲，平时高高竖起精神抖擞的鸡冠头都好像耷拉了下来。
研磨没忍住，伸手安抚似的摸了摸小黑的脸，又捏了捏恋人的耳朵。
黑尾其实没听太清研磨说了什么，只看见平时没什么表情的漂亮脸蛋挂着担忧的神色。
狭小的飞机舱很难塞下黑尾180+的大长腿，黑尾坐在靠窗的位置，腿占了恋人快三分之一的位置，两人的腿几乎是碰在一起的，研磨当然不会在意恋人的“越界”。
黑尾晃了下腿，贱兮兮地碰了碰研磨的膝盖，然后又贴在了一起，好像在说“才没事”。

客舱内光线昏暗，只有头顶的指示灯散发着一点微弱的光芒。
研磨按了呼叫铃。
“先生你好，请问有什么帮到你的吗？”
“我想要一张毯子。”研磨压低声音，小声地说。
黑尾看着自己家社恐小布丁一系列操作。
研磨拿到毯子，轻轻盖在小黑的身上，既然小黑的腿粘着自己，那就把自己的腿也盖上。
毯子之下，研磨附上恋人比自己大一圈的手上。
指甲修得平整，指腹和掌心都有一层薄薄的茧。
就是这双手，牵着自己长大。
黑尾干脆把头靠在研磨身上，一个有点别扭的姿势，耳边依然是令人心烦的轰鸣声。
但熟悉的味道让人安心，强大如黑尾，偶尔也是要依靠一下自己家幼驯染的。
“睡吧小黑。”`,
  },
  {
    title: '《谁都渴望遇见你》',
    preview: ['我已经很久没有见过汤浩了。', '有多久呢？快十年了吧。', '但是我总是能遇见他。'],
    fullText: `我已经很久没有见过汤浩了。
有多久呢？快十年了吧。
但是我总是能遇见他。
路过街头的屏幕、软件的开屏、电视上的综艺，我总是会在一些不经意的时刻重新见到那张我曾经最熟悉最迷恋的脸庞。
他们叫他伯远，但是我认识的人——叫汤浩。
是吗？我认识的人真的是汤浩吗？

明明跟汤浩是同班同学，但是我第一次注意到汤浩这个人，是在大学附近商圈的一家清吧。
清吧有个小舞台，几个固定的驻唱轮班哼着点婉转的调调，也算有点格调和氛围，没事的时候我偶尔会过去小酌一杯消磨时间。
那天，我坐在吧台和调酒师有一搭没一搭地闲聊着，清吧灯光昏暗，人也不多，除了我只有零零散散的几个人。
“大家好，我是新来的驻唱——汤浩。”
一个清瘦的青年走上了小舞台，穿着一件黑色棒球服外套，下身搭着一条牛仔裤，我看不太清他的脸，只能看到他流畅而又微微紧绷的下颌线，似乎有点紧张的样子。
青年唱了一首当时很火的流行曲，他真的很紧张，两只手将近痉挛地握着麦克风，单薄的身体微微颤抖，局促地站在原地唱着。
不过他对这首歌应该很熟悉，虽然声线不稳，但是每个转音都恰到好处。
嗓音清澈，听起来倒是悦耳的。
间奏部分他在小舞台走了两步，一束光倾斜地打在他身上，我才看清楚他的脸。
头发做了简单的造型，露出他的眉眼，一双清亮的眼眸温和地扫过酒吧里的每一个人，对上我的视线时轻轻地点了头，也算是和客人的简单互动。
不过蜻蜓点水的对视，我就捕获到了他眼底地局促和不安。
灯光洒在他身上像是镀上一层模糊的滤镜，柔软又温和。
我才恍然意识到，这个人好像有点眼熟，有点像我们班一个人？
他叫什么名字来着？汤......什么？
我掏出手机在班群巴拉了好几下，才找到班里唯一一个姓汤的人——汤浩。
嗯，有点耳熟，没什么印象。
一曲而终，无功无过，我看见汤浩偷偷地松了一口气，就接着唱下一首了。
一首接着一首，汤浩似乎越来越自在了，眉头和嘴角都是松弛的，身体伴着旋律缓缓律动。
不过场下除了我，好像也没有人把注意力放在他身上。

时间缓缓流淌，一个安静的夜晚悄然而过。
“最后一首歌，给大家带来一首我非常喜欢的歌。”汤浩说着，然后脱下了外套。
他里头穿着一件黑色的无袖，白花花的胳膊附着一点肌肉的线条，衣摆札进了裤子里。
一眼望过去，窄腰长腿。
这是一首快歌。
跟刚刚的歌曲风格截然不同，或许说跟这家店整体的风格都不太搭，但是跟汤浩却是意想不到的契合。
温和柔软的气质一扫而空，取之而代的是凌冽的眼神和洒脱果断的舞蹈动作。
指尖划过空气中的微粒，随着音乐的节奏一卡一顿，再拂过自己的腰身。
最后定格在一个漂亮的动作，两滴汗珠顺着他的额角流了下来，胸腔随着呼吸微微起伏。
两秒以后，汤浩收回了动作，瞬间切回羞涩的小青年形象，好像刚刚那个在狭窄小舞台上肆意唱跳张扬的人只是我的一个幻觉。

后来我总是下意识在不同的地方寻找汤浩的身影。
不住校，在外面自己租房子，家境一般般，看起来没有什么社交，日常扔在大海里都捞不出来的形象。
上课喜欢坐在前排，却是坐在最侧边的位置，四周几乎只有他一个人。
反而是个安全的区域。
黑色的粗框眼镜挂在他的脸上，柔顺微长的头发耷拉着，几乎看不见他的眼睛——那双明亮清澈的眼睛。
难怪我从来没有注意过这个人。
最无聊的水课，大家要么玩手机要么自己做自己的事，只有他松弛地坐在那里，目光始终落在黑板上，听着老师无聊的滔滔不绝。
后来我才知道，他只是在偷偷地描摹自己的未来而已。

汤浩不会每天都来驻唱，我直接问了老板，老板说一开始没想招他来，因为汤浩一开始给他展示的表演跟店里的风格完全不一致。
不过他说可以按给出的歌单演出，还愿意要低一点的薪酬，老板看他确实唱得还行，就让他来了。
有天放学，我看着汤浩一溜烟就跑了出去。
我盘算了一下，今天他应该不用去驻唱，这么急急忙忙去哪里呢？
我心里有点好奇，于是跟了上去。
汤浩进了一家舞室。
我知道这家舞室，当地很有名的一家舞室，绝对不是汤浩这样一个普通大学生可以负担得起的。
我才意识到，汤浩为什么会去驻唱，为什么身体会这么单薄。
某天我又盯着他唱了一个晚上，那天结束后，我直接跟着汤浩走，上前去把他拦住了。
我想他应该早就记住我了，或者认出了我是他的同班同学，只是我们两个都默契地保持着距离。
不过汤浩还是直接地喊出了我的名字，轻松地跟我打着招呼。

我可能是他唯一一个认真看着他的观众，汤浩可能也知道。
只要他站在灯光下面，他就好像被赋予了一种责任，一种必须要把这首歌、这支舞完成好的责任。
这种感觉很迷人。
我常常看着看着，一个晚上就过去了。
等他下班后，我就陪他走回城中村的小单间。
夜深了，路上出了偶尔窜出来的几个醉鬼，只有微风吹过树梢的声音。
慢慢熟悉以后，汤浩已经不是一开始害羞内敛的样子了。
反而是喜欢嘀嘀咕咕碎碎念类型。
汤浩经常会问我，“今天晚上我表现得怎么样？”或者更加细致的问题——比如某首歌唱得怎么样、有没有发现他埋的亮点之类的。
有时候他还会懊恼地自我检讨，说自己没唱好、有两个字唱劈了等等。
好可爱。
我比他高半个头，他跟我说话需要微微抬起头，眉毛不经意地拧在一起，厚厚的嘴唇开开合合，沾上一点亮晶晶的唾液。
汤浩真的好可爱。

但是我知道，他不只是想当一个哼着流行歌曲的酒吧驻唱。
我知道汤浩想要的是什么。
一个说出去会让人嗤之以鼻的春秋大梦，但是不知道为什么，落在汤浩身上，我却可以感受到那一份接近固执的真诚。
他跑远的身影背后，好像有一双透明的翅膀，没有办法帮助他飞起来，但是汤浩在用尽全力地煽动着。
太耀眼了，就像恒星吸引着行星一般，我无法逃离汤浩对我的吸引力。
于是，过了一段时间，我跟汤浩表白了。
他好像并不意外，只是抬起手摸了摸我的头，说对不起，他现在大概不能回应我的感情。
我问他为什么。
汤浩顿了顿，躲开了我直白的视线，嘴唇轻颤，最后却只是怅然地说着对不起。
我没有把他的拒绝放在心上，不过短暂的相处，我就知道汤浩不是一个会在这种事情上拒绝他人的人。
我跟汤浩说，我家有健身房可以练舞，我还可以给他请舞蹈老师，可以跟我住在一起这样可以节约房租，清吧的驻场想去还可以去不想去的话不去就好了......
我拉起他的手，亲吻了一下他的掌心，说：“我很想看你唱歌跳舞，想让你做自己想做的事，这些我都可以给你。”
汤浩明显怔住了，就这样任由我拉着他的手。
大概没有想到我会这么说，也没有想过自己还藏匿在黑暗里的偷偷发芽的梦想会被人看见。
我把汤浩揽入怀中，柔韧有劲的窄腰盈盈一握，汤浩浑身僵硬，但是没有阻止我的动作。
含水的双眸近在咫尺，汤浩的眼睛太漂亮了，多情如秋水，此时眼尾的一点红和藏不住的局促，看得我心尖发麻。
于是我低头吻上了汤浩的嘴唇，就像我无数次想象的一样。

我们顺理成章地在一起了。
汤浩把出租房退了搬进了我家。
我把家里健身房腾了出来，还制备了一套音响设备。
汤浩第一次踏进来时，惊讶和喜悦溢于言表。
明亮的落地镜映着我们的身影，汤浩激动的抱住了我，贴着我的耳畔说谢谢你。
汤浩头发和身体总是香香的，很清爽的味道。
和他在一起呆久了，感觉这样的味道也无时无刻地萦绕在我鼻尖。
汤浩的味道。

汤浩很多时间都会呆在我临时给他弄的“舞室”里。
甚至一些水课我们俩就直接一起翘了。
他练舞，我看他练舞。
汤浩练得认真，每周两节的舞蹈课他掰碎了一点点吃透。
每一个动作都扣得细，重复一次又一次，从标准到好看，再到符合歌曲的或活力或魅惑的舞台感要表现出来。
我就在旁边陪着他，帮他录视频，听他嘀嘀咕咕地碎碎念。

汤浩是个精神上很独立的人，但是却让我意外地接住了他“需要的东西”。
被一个独立的人依赖是一件非常爽的事情。
我们做爱的时候，汤浩总是非常的害羞，像一颗青涩的提子，被我残忍地撕开表皮，但是里头早已是柔软的果肉和香甜的汁水。
他咬着自己嘴唇，想要自己不要发出令人害羞的呻吟，但是抑制不住而漏出的情动的声音让我无法控制地对汤浩产生更强烈的施虐欲。
他不让我在脖子上留下痕迹，我就舔舐他单薄的肩胛骨，吮吸他柔软的腿跟。
汤浩太敏感，每当这个时候他会无法控制地浑身痉挛，香甜的汁水洒在他漂亮的身体上。
这时汤浩会往我身上靠，想要我抱抱他，一股子依恋的意味。
我太喜欢这个时候的汤浩了，像是蚌里头最柔软的肉，全部暴露在你面前。
把汤浩紧紧揽进怀里，摸摸他汗津津的头发，轻抚一下他的背他的腰。再亲吻他哭肿的眼睛、高挺的鼻子，最后再到柔软的厚唇。
他会把整张脸都埋在我胸前，只留下两只红彤彤的耳尖。

我们还会在舞室做爱。
汤浩跪在镜子前。
我一只手掐着他的腰，一只手掰着他的脸逼迫他看着镜子前的自己脸。
含不住的津液顺着嘴角流下，脸上都是自己的泪水和一些别的什么液体，脸色潮红，满眼都是情动的意味。
他会羞耻得浑身颤抖。
顺着腰摸到他白花花的两团臀肉，说来也奇怪，明明哪里都瘦，偏偏屁股肉感十足。
一巴掌下去，汤浩抑制不住地呻吟出声，单薄的肩胛骨一耸一耸的，像是要突破薄薄的皮肤，长出一双翅膀。
即使是性功能障碍，看到此时汤浩的脸也会勃起吧。
但是此时此刻的汤浩，只属于我一个人。

我和汤浩度过了一段很美好的时光，对我、对他，我想都是的。
我特别珍惜和汤浩在一起的每分每秒，因为我早就知道，汤浩不会只属于我一个人的。
毕业将至，汤浩和我提出了分手，他说他要去另一个城市当练习生了。
汤浩的世界那么宽广，星河缓缓流淌，他放任自己沉入宇宙的余晖之中，顺着星河缓慢流淌，他什么都想要，也什么都能要。
我知道我不应该留住他，汤浩应该高高飞起。
我从来没有问过汤浩，你爱我吗？你喜欢我吗？我不知道答案会是什么，也不想知道。
但我依然觉得自己幸运，可以遇见汤浩，可以陪伴他走过一段不被那么多人看见的旅程。
我想未来他的身边会有很多很多的人，像汤浩这样的人，谁都会渴望遇见。
只是我来得早，来得巧。

“伯远。”我念着这个名字，总觉得熟悉。
或许我遇见的人从来都不是汤浩，他一直都应该是伯远才对。`,
  },
] as const;

const activityStats = [
  { value: '10+ 场', label: '二次元活动落地' },
  { value: '15w+', label: '累计流水' },
  { value: '百度', label: '二次元内容运营' },
  { value: '内容运营', label: '执行内容' },
] as const;

const activityCases = [
  {
    title: '活动推进',
    description: '负责活动全流程进度跟进、文案撰写与素材整理，确保任务高效落地。',
  },
  {
    title: '数据复盘',
    description: '针对活动效果进行信息汇总与结果整理，辅助形成更清晰的复盘表达。',
  },
  {
    title: '内容包装',
    description: '将活动 banner、现场截图与过程信息整合为可展示的项目材料。',
  },
] as const;

const activityBanners = [
  new URL('../素材/二次元活动banner1.png', import.meta.url).href,
  new URL('../素材/二次元活动banner2.png', import.meta.url).href,
  new URL('../素材/二次元活动banner3.png', import.meta.url).href,
  new URL('../素材/二次元活动banner4.png', import.meta.url).href,
] as const;

const activityShots = [
  new URL('../素材/二次元活动截图1.png', import.meta.url).href,
  new URL('../素材/二次元活动截图2.png', import.meta.url).href,
  new URL('../素材/二次元活动截图3.png', import.meta.url).href,
  new URL('../素材/二次元活动截图4.png', import.meta.url).href,
] as const;

const collectionGroups = [
  {
    title: '恋与制作人',
    layout: 'horizontal-pair',
    images: [
      new URL('../素材/恋与制作人1.jpg', import.meta.url).href,
      new URL('../素材/恋与制作人2.jpg', import.meta.url).href,
    ],
  },
  {
    title: '恋与深空',
    layout: 'horizontal-pair',
    images: [
      new URL('../素材/恋与深空1.jpg', import.meta.url).href,
      new URL('../素材/恋与深空2.jpg', import.meta.url).href,
    ],
  },
  {
    title: 'Chiikawa',
    layout: 'horizontal-pair',
    images: [
      new URL('../素材/Chiikawa1.jpg', import.meta.url).href,
      new URL('../素材/Chiikawa2.jpg', import.meta.url).href,
    ],
  },
  {
    title: '线条小狗',
    layout: 'single',
    images: [new URL('../素材/线条小狗1.jpg', import.meta.url).href],
  },
  {
    title: '三丽鸥',
    layout: 'single',
    images: [new URL('../素材/三丽鸥1.jpg', import.meta.url).href],
  },
  {
    title: '二次元 IP',
    layout: 'mixed',
    images: [
      new URL('../素材/二次元1.jpg', import.meta.url).href,
      new URL('../素材/二次元2.jpg', import.meta.url).href,
    ],
  },
] as const;

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-7 max-w-4xl md:mb-8">
      <p className="mb-2 text-[11px] uppercase tracking-[0.24em] text-paper-500 md:mb-3 md:text-xs md:tracking-[0.28em]">{eyebrow}</p>
      <h2 className="font-serif text-[1.9rem] leading-tight text-paper-900 md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm leading-7 text-paper-700 md:mt-4 md:text-[15px]">{description}</p> : null}
    </div>
  );
}

function TagRow({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-paper-200 bg-white/70 px-3 py-1.5 text-[10px] tracking-[0.18em] text-paper-600 backdrop-blur-sm md:px-4 md:py-2 md:text-[11px] md:tracking-[0.22em]">
          {item}
        </span>
      ))}
    </div>
  );
}

function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[1.5rem] bg-white/65 shadow-soft ring-1 ring-paper-200/70 backdrop-blur-sm ${className}`}>{children}</div>;
}

function ProcessStep({ index, title, desc }: { index: string; title: string; desc: string }) {
  return (
    <div className="rounded-[1.5rem] bg-paper-50 p-4 ring-1 ring-paper-200/60 md:p-5">
      <p className="text-[11px] uppercase tracking-[0.22em] text-paper-500 md:text-xs md:tracking-[0.24em]">{index}</p>
      <h4 className="mt-3 font-serif text-lg text-paper-900 md:text-xl">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-paper-700">{desc}</p>
    </div>
  );
}

function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-paper-900/45 px-3 py-3 backdrop-blur-sm md:items-center md:px-4 md:py-8" onClick={onClose}>
      <div
        className="max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[1.6rem] bg-paper-50 shadow-soft ring-1 ring-paper-200 md:max-h-[85vh] md:rounded-[2rem]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 border-b border-paper-200 px-4 py-4 md:items-center md:gap-4 md:px-6">
          <h3 className="pr-2 font-serif text-xl leading-8 text-paper-900 md:text-2xl">{title}</h3>
          <button onClick={onClose} className="shrink-0 rounded-full border border-paper-300 px-3 py-2 text-sm text-paper-700 transition hover:bg-white md:px-4">
            关闭
          </button>
        </div>
        <div className="max-h-[calc(92vh-72px)] overflow-y-auto whitespace-pre-line px-4 py-5 text-[15px] leading-8 text-paper-800 md:max-h-[calc(85vh-72px)] md:px-6 md:py-6 md:text-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

function CollectionMosaic({
  group,
  className = '',
}: {
  group: (typeof collectionGroups)[number];
  className?: string;
}) {
  const frameClass = 'overflow-hidden rounded-[1rem] bg-paper-50/85 p-1.5 md:rounded-[1.1rem] md:p-2';
  const imageClass = 'w-full rounded-[0.8rem] object-contain md:rounded-[0.85rem]';

  if (group.layout === 'horizontal-pair' || group.layout === 'mixed') {
    return (
      <div className={`grid gap-2.5 sm:grid-cols-2 md:gap-3 ${className}`}>
        {group.images.map((image, index) => (
          <article key={`${group.title}-${index}`} className={frameClass}>
            <img src={image} alt={`${group.title} ${index + 1}`} className={imageClass} />
          </article>
        ))}
      </div>
    );
  }

  return (
    <article className={`${frameClass} ${className}`}>
      <img src={group.images[0]} alt={`${group.title} 1`} className={imageClass} />
    </article>
  );
}

function App() {
  const [selectedStory, setSelectedStory] = useState<(typeof fanficWorks)[number] | null>(null);
  const [heroIndex, setHeroIndex] = useState(0);
  const roleTags = useMemo(() => ['IP 衍生品', '周边企划', '内容输出', '执行落地'] as const, []);
  const collectionRows = useMemo(
    () => [
      collectionGroups.slice(0, 2),
      collectionGroups.slice(2, 4),
      collectionGroups.slice(4, 6),
    ],
    [],
  );


  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(217,182,176,0.15),transparent_34%),linear-gradient(180deg,#fbf8f5_0%,#f5f1eb_100%)] text-paper-800">
      <main className="mx-auto max-w-7xl px-4 pb-16 pt-4 sm:px-5 md:px-8 md:pb-20 md:pt-6 lg:px-10">
        <header className="sticky top-0 z-30 -mx-4 mb-8 border-b border-paper-200/60 bg-[rgba(251,248,245,0.82)] px-4 py-3 backdrop-blur sm:-mx-5 sm:px-5 md:-mx-8 md:mb-10 md:px-8 md:py-4 lg:-mx-10 lg:px-10">
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-[0.22em] text-paper-500 md:flex-row md:items-center md:justify-between md:gap-4 md:text-xs md:tracking-[0.26em]">
            <span className="shrink-0">IP 开发策划作品集</span>
            <nav className="-mx-1 flex gap-3 overflow-x-auto px-1 pb-1 text-[10px] whitespace-nowrap scrollbar-none md:mx-0 md:flex-wrap md:justify-end md:gap-6 md:overflow-visible md:px-0 md:pb-0 md:text-xs">
              <a href="#intro" className="transition hover:text-paper-800">Intro</a>
              <a href="#merch" className="transition hover:text-paper-800">Merch</a>
              <a href="#content" className="transition hover:text-paper-800">Content</a>
              <a href="#collection" className="transition hover:text-paper-800">Collection</a>
              <a href="#activity" className="transition hover:text-paper-800">Ops</a>
            </nav>
          </div>
        </header>

        <section id="intro" className="scroll-mt-28 py-6 md:scroll-mt-32 md:py-12">
          <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:items-center lg:gap-8 xl:gap-10">
            <div className="max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.24em] text-paper-500 md:text-xs md:tracking-[0.3em]">Papergames-inspired / Morandi palette</p>
              <h1 className="mt-4 font-serif text-[2.5rem] leading-tight text-paper-900 md:mt-5 md:text-5xl">曹雯一</h1>
              <p className="mt-3 text-sm leading-7 tracking-[0.14em] text-paper-600 md:mt-4 md:text-lg md:tracking-[0.18em]">企划落地 · 吃谷能手 · 资深二次元 · 叠系玩家</p>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-paper-800 md:mt-7 md:text-[1.35rem] md:leading-9">从内容到实物，把热爱温柔地落进现实。</p>
              <div className="mt-5 md:mt-7">
                <TagRow items={roleTags} />
              </div>

              <GlassCard className="mt-5 max-w-2xl p-4 md:mt-7 md:p-6">
                <div className="space-y-3 text-sm leading-7 text-paper-700 md:text-base md:leading-8">
                  <p>恋与制作人 | 恋与深空 开服玩家，叠纸心意旗舰店消费 4,800+ ￥</p>
                </div>
              </GlassCard>
            </div>

            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:ml-auto lg:max-w-[380px]">
              <div className="relative overflow-hidden rounded-[1.6rem] bg-white/70 shadow-soft ring-1 ring-paper-200/70 md:rounded-[1.8rem]">
                {heroImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`曹雯一个人照 ${index + 1}`}
                    className={`aspect-[4/5] w-full object-cover transition-opacity duration-700 ${index === heroIndex ? 'opacity-100' : 'absolute inset-0 opacity-0'}`}
                  />
                ))}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-paper-50/78 px-3 py-2 backdrop-blur-sm md:bottom-4">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setHeroIndex(index)}
                      className={`h-2.5 w-2.5 rounded-full transition ${index === heroIndex ? 'bg-paper-800' : 'bg-paper-300 hover:bg-paper-500'}`}
                      aria-label={`切换到第 ${index + 1} 张个人照`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="merch" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-14">
          <SectionHeading eyebrow="01 · Merchandise" title="周边企划落地" />

          <div className="space-y-16 md:space-y-24">
            <div>
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-paper-500 md:text-xs md:tracking-[0.28em]">Subsection 01</p>
                <h3 className="mt-3 font-serif text-[1.7rem] text-paper-900 md:text-3xl">开团企划</h3>
                <p className="mt-2 text-base leading-7 text-paper-700 md:text-[1.22rem] md:leading-8">完成约稿 - 打样 - 宣发 - 成团 - 出货全流程</p>
              </div>

              <GlassCard className="p-4 md:p-7">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {processSteps.map((step) => (
                    <ProcessStep key={step.index} index={step.index} title={step.title} desc={step.desc} />
                  ))}
                </div>
              </GlassCard>

              <div className="mt-8 space-y-10">
                {dollProjects.map((project) => (
                  <section key={project.name} className="space-y-4">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                      <div>
                        <h4 className="font-serif text-[1.7rem] text-paper-900 md:text-2xl">{project.name}</h4>
                        <p className="mt-2 text-sm leading-7 text-paper-700">属性：{project.attribute}</p>
                        <p className="text-sm leading-7 text-paper-700">娃厂：{project.factory}</p>
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                      {project.images.map((image, index) => (
                        <article key={`${project.name}-${index}`} className="overflow-hidden rounded-[1.3rem] bg-white/70 shadow-soft ring-1 ring-paper-200/70 md:rounded-[1.5rem]">
                          <img src={image} alt={`${project.name} ${index + 1}`} className="w-full transition duration-500 hover:scale-[1.02]" />
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-paper-500 md:text-xs md:tracking-[0.28em]">Subsection 02</p>
                <h3 className="mt-3 font-serif text-[1.7rem] text-paper-900 md:text-3xl">《新神榜：杨戬》IP活动策划</h3>
                <p className="mt-2 text-base leading-7 text-paper-700 md:text-[1.22rem] md:leading-8">制作 30+ 种不同类型无料，落地授权-设计-打样-下印-派发全流程</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-3">
                {activityMerchImages.map((image, index) => (
                  <article key={image} className="overflow-hidden rounded-[1.4rem] bg-white/70 p-2.5 shadow-soft ring-1 ring-paper-200/70 md:rounded-[1.6rem] md:p-3">
                    <img src={image} alt={`《新神榜：杨戬》线下活动物料 ${index + 1}`} className="w-full rounded-[1.1rem] md:rounded-[1.2rem]" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="content" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-14">
          <SectionHeading eyebrow="02 · Content Creation" title="同人内容输出" />
          <div className="grid gap-4 lg:grid-cols-2 md:gap-5">
            {fanficWorks.map((work) => (
              <GlassCard key={work.title} className="flex h-full flex-col p-4 md:p-6">
                <h3 className="font-serif text-[1.6rem] text-paper-900 md:text-2xl">{work.title}</h3>
                <div className="mt-4 flex-1 rounded-[1rem] bg-white/70 p-4 text-sm leading-7 text-paper-800 ring-1 ring-paper-200/60 md:mt-5 md:rounded-[1.2rem] md:p-5 md:leading-8">
                  {work.preview.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedStory(work)}
                  className="mt-4 w-fit rounded-full border border-paper-300 px-5 py-2 text-sm text-paper-700 transition hover:bg-white md:mt-5"
                >
                  查看全文
                </button>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="collection" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-14">
          <SectionHeading eyebrow="03 · Collection Journey" title="吃谷记录" />
          <div className="mb-8 max-w-5xl md:mb-10">
            <p className="text-base leading-7 text-paper-700 md:text-[1.22rem] md:leading-8">恋与深空 | 恋与制作人 | Chiikawa | 线条小狗 | 三丽鸥 | 二次元IP （不完全展示）</p>
          </div>

          <div className="space-y-4 md:space-y-5">
            {collectionRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid gap-4 md:grid-cols-2 md:gap-5">
                {row.map((group) => (
                  <GlassCard key={group.title} className="p-4 md:p-5">
                    <div className="mb-3 flex items-center justify-between gap-3 md:mb-4">
                      <h3 className={rowIndex === 0 ? 'font-serif text-[1.55rem] text-paper-950 md:text-[1.7rem]' : 'font-serif text-[1.35rem] text-paper-900 md:text-xl'}>
                        {group.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-paper-500 md:tracking-[0.24em]">{group.images.length} 张</span>
                    </div>
                    <CollectionMosaic group={group} />
                  </GlassCard>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="activity" className="scroll-mt-28 py-12 md:scroll-mt-32 md:py-14">
          <SectionHeading eyebrow="04 · Event Operations" title="二次元活动落地" />

          <div className="space-y-8">
            <GlassCard className="p-4 md:p-7">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {activityStats.map((item) => (
                  <div key={item.label} className="rounded-[1.2rem] bg-paper-50 p-4 ring-1 ring-paper-200/60 md:rounded-[1.3rem]">
                    <p className="font-serif text-[1.9rem] text-paper-900 md:text-3xl">{item.value}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-paper-500 md:text-xs md:tracking-[0.22em]">{item.label}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-paper-500 md:text-xs md:tracking-[0.28em]">Banner</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {activityBanners.map((image, index) => (
                  <article key={image} className="overflow-hidden rounded-[1.4rem] bg-white/70 shadow-soft ring-1 ring-paper-200/70 md:rounded-[1.6rem]">
                    <img src={image} alt={`二次元活动 banner ${index + 1}`} className="w-full" />
                  </article>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-paper-500 md:text-xs md:tracking-[0.28em]">活动截图</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {activityShots.map((image, index) => (
                  <article key={image} className="overflow-hidden rounded-[1.1rem] bg-white/70 p-2 shadow-soft ring-1 ring-paper-200/70 md:rounded-[1.2rem]">
                    <img src={image} alt={`二次元活动截图 ${index + 1}`} className="h-full w-full rounded-[0.85rem] object-cover md:rounded-[0.9rem]" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Modal open={!!selectedStory} onClose={() => setSelectedStory(null)} title={selectedStory?.title ?? ''}>
        {selectedStory?.fullText ?? ''}
      </Modal>
    </div>
  );
}

export default App;
