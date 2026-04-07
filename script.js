// 建筑和济公文化故事的内容数据
const locationsData = [
    {
        id: 1,
        name: "永宁村碑",
        description: "永宁村碑是村庄的标志性建筑，记录了村庄的历史和文化传承。据记载，此碑立于清朝年间，见证了村庄的兴衰变迁。",
        story: "相传济公曾路过永宁村，见村民生活困苦，便施法帮助村民解决了水源问题，村民为了纪念济公的恩德，立此碑以作纪念。"
    },
    {
        id: 2,
        name: "展堂",
        description: "展堂是村庄的重要建筑，用于举办各种文化活动和展览。建筑风格古朴典雅，是当地文化的重要载体。",
        story: "传说济公曾在此地为村民讲经说法，传播佛法，深受村民爱戴。后来村民为了纪念济公，便建造了这座展堂。"
    },
    {
        id: 3,
        name: "济公像",
        description: "济公像是为了纪念济公而建造的雕像，雕像栩栩如生，展现了济公洒脱不羁的形象。",
        story: "济公是南宋时期的著名高僧，以济困扶危、惩恶扬善著称。他的故事在民间广为流传，深受百姓爱戴。"
    },
    {
        id: 4,
        name: "钓月亭",
        description: "钓月亭是一座古亭，建于山顶，是观赏月亮的绝佳地点。亭内有石桌石凳，可供游人休息。",
        story: "相传济公曾与友人在此亭赏月，即兴赋诗，留下了许多佳话。从此，钓月亭成为了文人墨客聚会的场所。"
    },
    {
        id: 5,
        name: "祖宫",
        description: "祖宫是当地的道教宫观，建筑宏伟壮观，是道教信徒朝拜的圣地。",
        story: "济公虽为佛教高僧，但与道教也有深厚的渊源。他曾在此宫观与道长论道，留下了许多关于宗教融合的佳话。"
    },
    {
        id: 6,
        name: "济公墙",
        description: "济公墙是一面刻有济公故事的墙壁，上面的浮雕生动地展现了济公的生平事迹。",
        story: "当地百姓为了纪念济公的功德，在墙壁上雕刻了济公的故事，希望后人能够铭记济公的精神。"
    },
    {
        id: 7,
        name: "观霞阁",
        description: "观霞阁是一座建在高处的楼阁，登临此处，可以俯瞰整个村庄的美景，特别是傍晚时分，红霞满天，景色壮观。",
        story: "济公曾在此阁观赏晚霞，感悟人生，留下了'霞光照破千年暗，清风拂尽万古愁'的诗句。"
    },
    {
        id: 8,
        name: "古井",
        description: "古井是村庄的重要水源，历史悠久，水质清澈甘甜。古井周围环境优美，是村民休闲的好去处。",
        story: "传说济公曾在此古井旁休息，见井水浑浊，便用禅杖搅动井水，井水顿时变得清澈甘甜。从此，这口井便成为了村庄的重要水源。"
    },
    {
        id: 9,
        name: "罗汉神木",
        description: "罗汉神木是一棵古老的大树，树龄悠久，枝繁叶茂。树干粗壮，需要数人才能合抱。",
        story: "传说济公曾在此树下打坐修行，感悟佛法。后来，这棵树便被村民称为罗汉神木，视为神圣的象征。"
    },
    {
        id: 10,
        name: "醉仙楼",
        description: "醉仙楼是一座历史悠久的酒楼，建筑风格古朴典雅，是当地著名的餐饮场所。",
        story: "传说济公曾在此楼饮酒，与酒友们谈天说地，留下了许多佳话。从此，醉仙楼成为了当地的知名场所。"
    }
];

// 为热点区域添加点击事件
const hotspots = document.querySelectorAll('.hotspot');

// 创建浮窗元素
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', function() {
        const id = parseInt(this.getAttribute('data-id'));
        window.location.href = `location${id}.html`;
    });
    
    // 添加鼠标悬停事件
    hotspot.addEventListener('mouseenter', function(e) {
        const id = parseInt(this.getAttribute('data-id'));
        const location = locationsData.find(loc => loc.id === id);
        
        if (location) {
            // 设置浮窗内容
            tooltip.textContent = location.description;
            
            // 设置浮窗位置
            const rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.right + 2}px`;
            tooltip.style.top = `${rect.top - 2}px`;
            
            // 显示浮窗
            tooltip.style.opacity = '1';
        }
    });
    
    // 添加鼠标离开事件
    hotspot.addEventListener('mouseleave', function() {
        // 隐藏浮窗
        tooltip.style.opacity = '0';
    });
});

// 为热点区域添加数字标识
hotspots.forEach((hotspot, index) => {
    hotspot.textContent = (index + 1).toString();
});