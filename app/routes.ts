export type TravelMode = '高铁' | '自驾' | '包车' | '大巴' | '景区交通' | '步行';

export type TransportLeg = {
  from: string;
  to: string;
  mode: TravelMode;
  normal: string;
  holiday?: string;
  note?: string;
};

export type RouteDay = {
  day: number;
  title: string;
  region: string;
  placeIds: string[];
  stay: string;
  summary: string;
  legs: TransportLeg[];
};

export type RoutePlan = {
  id: string;
  code: string;
  days: 5 | 6 | 7;
  name: string;
  theme: string;
  pace: '舒缓' | '中等' | '较高';
  featured?: boolean;
  confirmed?: boolean;
  color: string;
  summary: string;
  cities: string[];
  fiveScoreIds: string[];
  hotelMoves: number;
  longestLeg: string;
  itinerary: RouteDay[];
};

export const routePlans: RoutePlan[] = [
  {
    id: 'route-5a', code: '5A', days: 5, name: '河洛文明＋龙潭', theme: '人文与峡谷', pace: '中等', color: '#c85a32',
    summary: '第一次到河南的均衡选择，用登封与洛阳串起四个高分点。', cities: ['郑州', '登封', '洛阳', '新安'],
    fiveScoreIds: ['shaolin', 'sanhuangzhai', 'longmen', 'longtan-canyon'], hotelMoves: 2, longestLeg: '郑州→登封，国庆 2–3 小时',
    itinerary: [
      { day: 1, title: '上海 → 郑州 → 登封', region: '郑州 / 登封', placeIds: [], stay: '登封', summary: '把抵达日只用于进省和靠近景区，不安排必须预约的景点。', legs: [
        { from: '上海虹桥', to: '郑州东', mode: '高铁', normal: '约 4–6 小时', note: '具体车次待 12306 开售后复核' },
        { from: '郑州东', to: '登封', mode: '自驾', normal: '约 1.5 小时', holiday: '建议 2–3 小时', note: '含出城、停车缓冲' },
      ] },
      { day: 2, title: '少林寺＋三皇寨', region: '登封', placeIds: ['shaolin', 'sanhuangzhai'], stay: '登封', summary: '少林核心与少室山安排完整一天；体力一般时缩短三皇寨线路。', legs: [
        { from: '少林寺', to: '三皇寨', mode: '景区交通', normal: '索道＋步行串联', holiday: '完整游览约 7–8 小时', note: '大风或降雨时取消三皇寨' },
      ] },
      { day: 3, title: '登封 → 洛阳＋龙门石窟', region: '登封 / 洛阳', placeIds: ['longmen'], stay: '洛阳', summary: '上午转场，下午给龙门石窟留出完整 3–5 小时。', legs: [
        { from: '登封', to: '洛阳', mode: '自驾', normal: '约 1–1.7 小时', holiday: '至少预留 2 小时' },
      ] },
      { day: 4, title: '龙潭大峡谷', region: '洛阳 / 新安', placeIds: ['longtan-canyon'], stay: '洛阳', summary: '洛阳往返，景区游览与停车接驳合计按一整天安排。', legs: [
        { from: '洛阳市区', to: '龙潭大峡谷', mode: '自驾', normal: '约 1.5–2 小时', holiday: '单程建议增加 1 小时', note: '不与白云山同日串联' },
      ] },
      { day: 5, title: '洛阳 → 上海', region: '洛阳', placeIds: [], stay: '返程', summary: '上午留作休息或市区散步，避免把返程日排满。', legs: [
        { from: '洛阳龙门', to: '上海虹桥', mode: '高铁', normal: '约 4 小时 40 分–5 小时 50 分', note: '优先下午或傍晚直达车' },
      ] },
    ],
  },
  {
    id: 'route-5b', code: '5B', days: 5, name: '云台山＋八里沟', theme: '南太行山水', pace: '舒缓', featured: true, color: '#2f7663',
    summary: '五日自然线首选，云台山住两晚，减少换酒店和跨区赶路。', cities: ['郑州', '焦作', '辉县'],
    fiveScoreIds: ['yuntaishan', 'baligou'], hotelMoves: 2, longestLeg: '云台山→八里沟，国庆 1.5–2.5 小时',
    itinerary: [
      { day: 1, title: '上海 → 郑州 → 焦作/修武', region: '郑州 / 焦作', placeIds: [], stay: '云台山岸上服务区', summary: '高铁进省后继续前往修武，抵达后休息。', legs: [
        { from: '上海虹桥', to: '郑州东', mode: '高铁', normal: '约 4–6 小时' },
        { from: '郑州东', to: '焦作/修武西', mode: '高铁', normal: '约 53–62 分钟', note: '郑州东、郑州站车次不可混用' },
      ] },
      { day: 2, title: '云台山峡谷线', region: '焦作', placeIds: ['yuntaishan'], stay: '云台山岸上服务区', summary: '红石峡与潭瀑峡/泉瀑峡为主，景交等待计入全天。', legs: [
        { from: '岸上服务区', to: '云台山核心区', mode: '景区交通', normal: '景交滚动发车', holiday: '需增加排队时间' },
      ] },
      { day: 3, title: '云台山峰林线', region: '焦作', placeIds: ['yuntaishan'], stay: '云台山岸上服务区', summary: '茱萸峰或剩余核心区，第二天不再跨景区。', legs: [] },
      { day: 4, title: '云台山 → 八里沟', region: '焦作 / 辉县', placeIds: ['baligou'], stay: '辉县或八里沟附近', summary: '早上转场，八里沟主游览区安排完整一天。', legs: [
        { from: '云台山', to: '八里沟', mode: '自驾', normal: '约 1 小时', holiday: '建议 1.5–2.5 小时', note: '山区道路避免夜驾' },
      ] },
      { day: 5, title: '辉县 → 郑州 → 上海', region: '辉县 / 郑州', placeIds: [], stay: '返程', summary: '只安排返程，为山区堵车预留余量。', legs: [
        { from: '八里沟', to: '郑州东', mode: '自驾', normal: '按实时导航', holiday: '至少额外预留 1 小时' },
        { from: '郑州东', to: '上海虹桥', mode: '高铁', normal: '约 4–6 小时' },
      ] },
    ],
  },
  {
    id: 'route-6a', code: '6A', days: 6, name: '龙门＋龙潭＋白云山', theme: '伏牛山精华', pace: '舒缓', color: '#aa6f2f',
    summary: '六日最舒适方案，以洛阳为枢纽，三处高分景点各留足时间。', cities: ['洛阳', '新安', '嵩县'],
    fiveScoreIds: ['longmen', 'longtan-canyon', 'baiyunshan'], hotelMoves: 2, longestLeg: '洛阳→白云山，常规 2–2.5 小时',
    itinerary: [
      { day: 1, title: '上海 → 洛阳', region: '洛阳', placeIds: [], stay: '洛阳市区', summary: '直达高铁进入洛阳，不绕郑州。', legs: [{ from: '上海虹桥', to: '洛阳龙门', mode: '高铁', normal: '约 4 小时 40 分–5 小时 50 分' }] },
      { day: 2, title: '龙门石窟', region: '洛阳', placeIds: ['longmen'], stay: '洛阳市区', summary: '预约早场，半天到一天慢游，下午不安排远郊。', legs: [] },
      { day: 3, title: '龙潭大峡谷', region: '洛阳 / 新安', placeIds: ['longtan-canyon'], stay: '洛阳或新安', summary: '峡谷单列一天，游后回洛阳或住新安。', legs: [{ from: '洛阳市区', to: '龙潭大峡谷', mode: '自驾', normal: '约 1.5–2 小时', holiday: '单程建议增加 1 小时' }] },
      { day: 4, title: '洛阳 → 白云山', region: '洛阳 / 嵩县', placeIds: ['baiyunshan'], stay: '白云山附近', summary: '把远郊进山作为半天转场，下午只做低强度游览。', legs: [{ from: '洛阳市区', to: '白云山', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3–3.5 小时', note: '另计上山换乘' }] },
      { day: 5, title: '白云山完整日', region: '嵩县', placeIds: ['baiyunshan'], stay: '白云山附近', summary: '玉皇顶与九龙瀑布按天气、体力和索道队列取舍。', legs: [{ from: '游客中心', to: '核心景区', mode: '景区交通', normal: '盘山大巴/自驾预约', holiday: '另留 1–2 小时换乘缓冲' }] },
      { day: 6, title: '白云山 → 洛阳 → 上海', region: '嵩县 / 洛阳', placeIds: [], stay: '返程', summary: '早出发，把全天定义为返程日。', legs: [{ from: '白云山', to: '洛阳龙门', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3–3.5 小时' }, { from: '洛阳龙门', to: '上海虹桥', mode: '高铁', normal: '约 4 小时 40 分–5 小时 50 分' }] },
    ],
  },
  {
    id: 'route-6b', code: '6B', days: 6, name: '嵩山＋南太行', theme: '双山岳', pace: '较高', color: '#57705a',
    summary: '四个高分点覆盖更多，但连续山岳日对体力要求较高。', cities: ['郑州', '登封', '焦作', '辉县'],
    fiveScoreIds: ['shaolin', 'sanhuangzhai', 'yuntaishan', 'baligou'], hotelMoves: 3, longestLeg: '登封→云台山，按半天转场',
    itinerary: [
      { day: 1, title: '上海 → 郑州', region: '郑州', placeIds: [], stay: '郑州或登封', summary: '高铁抵达后取车，晚到则留宿郑州。', legs: [{ from: '上海虹桥', to: '郑州东', mode: '高铁', normal: '约 4–6 小时' }] },
      { day: 2, title: '少林寺＋三皇寨', region: '登封', placeIds: ['shaolin', 'sanhuangzhai'], stay: '登封', summary: '完整一天，恶劣天气时只保留少林核心。', legs: [] },
      { day: 3, title: '登封 → 云台山', region: '登封 / 焦作', placeIds: ['yuntaishan'], stay: '云台山岸上服务区', summary: '白天转场，下午只安排低强度区域。', legs: [{ from: '登封', to: '云台山', mode: '自驾', normal: '按实时导航', holiday: '按半天转场处理' }] },
      { day: 4, title: '云台山完整日', region: '焦作', placeIds: ['yuntaishan'], stay: '云台山岸上服务区', summary: '优先红石峡与峡谷组团，不追求全部打卡。', legs: [] },
      { day: 5, title: '云台山 → 八里沟', region: '焦作 / 辉县', placeIds: ['baligou'], stay: '辉县或八里沟附近', summary: '早转场后完整游览八里沟主景区。', legs: [{ from: '云台山', to: '八里沟', mode: '自驾', normal: '约 1 小时', holiday: '建议 1.5–2.5 小时' }] },
      { day: 6, title: '辉县 → 郑州 → 上海', region: '辉县 / 郑州', placeIds: [], stay: '返程', summary: '不再增加林州，把时间留给返程。', legs: [{ from: '八里沟', to: '郑州东', mode: '自驾', normal: '按实时导航', holiday: '至少额外预留 1 小时' }, { from: '郑州东', to: '上海虹桥', mode: '高铁', normal: '约 4–6 小时' }] },
    ],
  },
  {
    id: 'route-7a', code: '7A', days: 7, name: '伏牛山完整线', theme: '峡谷与高山', pace: '中等', color: '#775c91',
    summary: '三个高分点外加入老君山，适合接受连续山景与多次景区住宿的人。', cities: ['洛阳', '新安', '嵩县', '栾川'],
    fiveScoreIds: ['longmen', 'longtan-canyon', 'baiyunshan'], hotelMoves: 3, longestLeg: '洛阳→白云山，常规 2–2.5 小时',
    itinerary: [
      { day: 1, title: '上海 → 洛阳', region: '洛阳', placeIds: [], stay: '洛阳市区', summary: '直达高铁进洛阳。', legs: [{ from: '上海虹桥', to: '洛阳龙门', mode: '高铁', normal: '约 4 小时 40 分–5 小时 50 分' }] },
      { day: 2, title: '龙门石窟', region: '洛阳', placeIds: ['longmen'], stay: '洛阳市区', summary: '早场慢游，下午休整。', legs: [] },
      { day: 3, title: '龙潭大峡谷', region: '洛阳 / 新安', placeIds: ['longtan-canyon'], stay: '洛阳', summary: '单列一天，不与白云山同日串联。', legs: [{ from: '洛阳市区', to: '龙潭大峡谷', mode: '自驾', normal: '约 1.5–2 小时', holiday: '单程建议增加 1 小时' }] },
      { day: 4, title: '洛阳 → 白云山', region: '洛阳 / 嵩县', placeIds: ['baiyunshan'], stay: '白云山附近', summary: '半天转场，下午轻量游览。', legs: [{ from: '洛阳市区', to: '白云山', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3–3.5 小时' }] },
      { day: 5, title: '白云山完整日', region: '嵩县', placeIds: ['baiyunshan'], stay: '白云山附近', summary: '完整一天留给核心区域。', legs: [] },
      { day: 6, title: '白云山 → 老君山', region: '嵩县 / 栾川', placeIds: ['laojunshan'], stay: '栾川', summary: '早转场，使用两级索道控制体力；天气差则取消。', legs: [{ from: '白云山', to: '老君山', mode: '自驾', normal: '约 1–1.5 小时', note: '低等级估算，须临行复核' }] },
      { day: 7, title: '栾川 → 洛阳 → 上海', region: '栾川 / 洛阳', placeIds: [], stay: '返程', summary: '只安排返程，避免爬山后夜驾。', legs: [{ from: '老君山', to: '洛阳龙门', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议至少 3 小时' }, { from: '洛阳龙门', to: '上海虹桥', mode: '高铁', normal: '约 4 小时 40 分–5 小时 50 分' }] },
    ],
  },
  {
    id: 'route-7b', code: '7B', days: 7, name: '五个高分点全覆盖', theme: '人文山水全景', pace: '中等', featured: true, color: '#d45d39',
    summary: '覆盖优先的首选路线，登封、洛阳与伏牛山各留出完整游览日。', cities: ['郑州', '登封', '洛阳', '新安', '嵩县'],
    fiveScoreIds: ['shaolin', 'sanhuangzhai', 'longmen', 'longtan-canyon', 'baiyunshan'], hotelMoves: 3, longestLeg: '洛阳→白云山，国庆 3–3.5 小时',
    itinerary: [
      { day: 1, title: '上海 → 郑州 → 登封', region: '郑州 / 登封', placeIds: [], stay: '登封', summary: '高铁抵达后直接靠近少林景区，晚到可改住郑州。', legs: [{ from: '上海虹桥', to: '郑州东', mode: '高铁', normal: '约 4–6 小时' }, { from: '郑州东', to: '登封', mode: '自驾', normal: '约 1.5 小时', holiday: '建议 2–3 小时' }] },
      { day: 2, title: '少林寺＋三皇寨', region: '登封', placeIds: ['shaolin', 'sanhuangzhai'], stay: '登封', summary: '完整一天；雨天或大风时取消三皇寨。', legs: [] },
      { day: 3, title: '登封 → 洛阳＋龙门石窟', region: '登封 / 洛阳', placeIds: ['longmen'], stay: '洛阳', summary: '上午转场，下午给龙门留足 3–5 小时。', legs: [{ from: '登封', to: '洛阳', mode: '自驾', normal: '约 1–1.7 小时', holiday: '至少预留 2 小时' }] },
      { day: 4, title: '龙潭大峡谷', region: '洛阳 / 新安', placeIds: ['longtan-canyon'], stay: '洛阳', summary: '洛阳往返，峡谷单列一天。', legs: [{ from: '洛阳市区', to: '龙潭大峡谷', mode: '自驾', normal: '约 1.5–2 小时', holiday: '单程建议增加 1 小时' }] },
      { day: 5, title: '洛阳 → 白云山', region: '洛阳 / 嵩县', placeIds: ['baiyunshan'], stay: '白云山附近', summary: '把进山定义为半天转场，下午低强度活动。', legs: [{ from: '洛阳市区', to: '白云山', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3–3.5 小时', note: '另计上山换乘' }] },
      { day: 6, title: '白云山完整日', region: '嵩县', placeIds: ['baiyunshan'], stay: '白云山附近', summary: '根据天气在玉皇顶与九龙瀑布之间取舍。', legs: [] },
      { day: 7, title: '白云山 → 洛阳 → 上海', region: '嵩县 / 洛阳', placeIds: [], stay: '返程', summary: '早出发返洛，选择下午或傍晚高铁。', legs: [{ from: '白云山', to: '洛阳龙门', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3–3.5 小时' }, { from: '洛阳龙门', to: '上海虹桥', mode: '高铁', normal: '约 4 小时 40 分–5 小时 50 分' }] },
    ],
  },
  {
    id: 'route-6c', code: '6C', days: 6, name: '中原全景线（公开方案一）', theme: '南太行＋古都全景', pace: '较高', color: '#8a6d3b',
    summary: '公开旅行社最常见的河南小全景结构：南太行山水加三大古都，景点最全但转场最密。', cities: ['郑州', '辉县', '焦作', '洛阳', '开封'],
    fiveScoreIds: ['guoliangcun', 'yuntaishan', 'longmen', 'shaolin'], hotelMoves: 4, longestLeg: '郑州→万仙山，常规 2.5–3.5 小时',
    itinerary: [
      { day: 1, title: '上海 → 郑州', region: '郑州', placeIds: [], stay: '郑州市区', summary: '抵达日只做进省与休整，不安排需要预约的场馆。', legs: [
        { from: '上海虹桥', to: '郑州东', mode: '高铁', normal: '约 4–6 小时' },
      ] },
      { day: 2, title: '万仙山·郭亮村挂壁公路', region: '郑州 / 辉县', placeIds: ['guoliangcun'], stay: '郭亮村或辉县', summary: '公开线路多为当天往返郑州，这里改成山上住一晚，把挂壁公路和崖上村落走完。', legs: [
        { from: '郑州东', to: '万仙山景区', mode: '自驾', normal: '约 2.5–3.5 小时', holiday: '建议 4 小时以上', note: '景区内需换乘观光车' },
      ] },
      { day: 3, title: '云台山', region: '辉县 / 焦作', placeIds: ['yuntaishan'], stay: '焦作岸上服务区', summary: '红石峡与小寨沟为主，茱萸峰按体力与排队情况决定。', legs: [
        { from: '万仙山景区', to: '云台山', mode: '自驾', normal: '约 1–1.5 小时', holiday: '建议 2 小时' },
        { from: '岸上服务区', to: '云台山核心区', mode: '景区交通', normal: '景交滚动发车', holiday: '需增加排队时间' },
      ] },
      { day: 4, title: '云台山 → 洛阳', region: '焦作 / 洛阳', placeIds: ['white-horse', 'luoyi-ancient-city'], stay: '洛阳市区', summary: '上午转场，下午白马寺，晚上洛邑古城看夜景。', legs: [
        { from: '云台山', to: '洛阳市区', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3 小时' },
      ] },
      { day: 5, title: '龙门石窟 → 少林寺 → 开封', region: '洛阳 / 登封 / 开封', placeIds: ['longmen', 'shaolin', 'kaifeng-drum-tower'], stay: '开封市区', summary: '公开方案里强度最高的一天：两个 5 分点加一次跨城，务必赶早场。', legs: [
        { from: '洛阳市区', to: '少林寺', mode: '自驾', normal: '约 1–1.7 小时', holiday: '至少预留 2 小时' },
        { from: '登封', to: '开封', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3 小时', note: '也可少林寺→郑州东→开封北，高铁约 25–30 分钟' },
      ] },
      { day: 6, title: '包公祠 → 黄河风景区 → 上海', region: '开封 / 郑州', placeIds: ['baogong-temple', 'yellow-river-park'], stay: '返程', summary: '上午开封收尾，下午在郑州看黄河后返程；时间紧可只留一项。', legs: [
        { from: '开封', to: '郑州黄河风景名胜区', mode: '自驾', normal: '约 1.5 小时', holiday: '建议 2 小时' },
        { from: '郑州东', to: '上海虹桥', mode: '高铁', normal: '约 4–6 小时' },
      ] },
    ],
  },
  {
    id: 'route-6d', code: '6D', days: 6, name: '文化沉浸线（公开方案二）', theme: '演艺＋三大古都', pace: '中等', color: '#4d6f8c',
    summary: '把云台山与老君山设成二选一，只有河南、龙门、少林与开封宋文化各留完整时段。', cities: ['郑州', '焦作', '洛阳', '开封'],
    fiveScoreIds: ['yuntaishan', 'longmen', 'shaolin'], hotelMoves: 2, longestLeg: '云台山→洛阳，常规 2–2.5 小时',
    itinerary: [
      { day: 1, title: '上海 → 郑州', region: '郑州', placeIds: [], stay: '郑州市区', summary: '抵达后只安排市区活动，为次日整天演艺留体力。', legs: [
        { from: '上海虹桥', to: '郑州东', mode: '高铁', normal: '约 4–6 小时' },
      ] },
      { day: 2, title: '只有河南·戏剧幻城', region: '郑州 / 中牟', placeIds: ['only-henan'], stay: '郑州市区', summary: '整天沉浸式观演，按剧场时间表排顺序，夜场结束后回郑州。', legs: [
        { from: '郑州东', to: '只有河南', mode: '自驾', normal: '打车约 30 分钟', holiday: '建议 1 小时', note: '也可城际到绿博园站再打车约 8 公里' },
      ] },
      { day: 3, title: '云台山（或老君山二选一）', region: '郑州 / 焦作', placeIds: ['yuntaishan'], stay: '洛阳市区', summary: '山水日只留一座山；偏爱金顶景观可把本日换成老君山。', legs: [
        { from: '郑州东', to: '焦作/修武西', mode: '高铁', normal: '约 53–62 分钟' },
        { from: '云台山', to: '洛阳市区', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3 小时' },
      ] },
      { day: 4, title: '白马寺 → 龙门石窟 → 洛邑古城', region: '洛阳', placeIds: ['white-horse', 'longmen', 'luoyi-ancient-city'], stay: '洛阳市区', summary: '上午白马寺、下午龙门石窟、晚上洛邑古城，全天不出洛阳。', legs: [
        { from: '白马寺', to: '龙门石窟', mode: '自驾', normal: '约 40–50 分钟', holiday: '建议 1 小时' },
      ] },
      { day: 5, title: '少林寺 → 开封', region: '洛阳 / 登封 / 开封', placeIds: ['shaolin', 'kaifeng-drum-tower'], stay: '开封市区', summary: '上午少林寺，下午转场开封，晚上鼓楼夜市与书店街。', legs: [
        { from: '洛阳市区', to: '少林寺', mode: '自驾', normal: '约 1–1.7 小时', holiday: '至少预留 2 小时' },
        { from: '登封', to: '开封', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3 小时' },
      ] },
      { day: 6, title: '清明上河园 → 上海', region: '开封 / 郑州', placeIds: ['qingming-riverside'], stay: '返程', summary: '半天宋文化主题园区，午后经郑州东返程。', legs: [
        { from: '开封北', to: '郑州东', mode: '高铁', normal: '约 25–30 分钟' },
        { from: '郑州东', to: '上海虹桥', mode: '高铁', normal: '约 4–6 小时' },
      ] },
    ],
  },
  {
    id: 'route-6e', code: '6E', days: 6, name: '洛阳深度＋一座山（公开方案四）', theme: '古都深度', pace: '舒缓', color: '#7d5a76',
    summary: '以洛阳为主基地，把河洛人文看透，只留一段进山行程，换酒店次数最少。', cities: ['洛阳', '栾川', '嵩县', '登封'],
    fiveScoreIds: ['longmen', 'baiyunshan', 'shaolin', 'sanhuangzhai'], hotelMoves: 2, longestLeg: '洛阳→老君山，常规 2–2.5 小时',
    itinerary: [
      { day: 1, title: '上海 → 洛阳', region: '洛阳', placeIds: ['luoyi-ancient-city'], stay: '洛阳市区', summary: '直达高铁进洛阳，抵达当天只安排免票的洛邑古城夜游。', legs: [
        { from: '上海虹桥', to: '洛阳龙门', mode: '高铁', normal: '约 4 小时 40 分–5 小时 50 分' },
      ] },
      { day: 2, title: '龙门石窟 → 隋唐洛阳城', region: '洛阳', placeIds: ['longmen', 'suitang-city'], stay: '洛阳市区', summary: '早场龙门石窟，傍晚看应天门与明堂天堂灯光。', legs: [
        { from: '龙门石窟', to: '应天门', mode: '自驾', normal: '约 25–35 分钟' },
      ] },
      { day: 3, title: '白马寺 → 洛阳博物馆', region: '洛阳', placeIds: ['white-horse', 'luoyang-museum'], stay: '洛阳市区', summary: '人文低强度日，把预约类场馆集中处理，为进山养体力。', legs: [] },
      { day: 4, title: '洛阳 → 老君山', region: '洛阳 / 栾川', placeIds: ['laojunshan'], stay: '栾川山下', summary: '半天转场进山，下午上金顶，避免当天往返洛阳。', legs: [
        { from: '洛阳市区', to: '老君山', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议至少 3 小时', note: '索道另计排队' },
      ] },
      { day: 5, title: '白云山（或改龙潭大峡谷）', region: '栾川 / 嵩县', placeIds: ['baiyunshan'], stay: '洛阳市区', summary: '顺路再加一座山；若更想看峡谷，可把本日换成新安龙潭大峡谷。', legs: [
        { from: '老君山', to: '白云山', mode: '自驾', normal: '约 1–1.5 小时' },
        { from: '白云山', to: '洛阳市区', mode: '自驾', normal: '约 2–2.5 小时', holiday: '建议 3–3.5 小时' },
      ] },
      { day: 6, title: '少林寺与三皇寨 → 上海', region: '洛阳 / 登封', placeIds: ['shaolin', 'sanhuangzhai'], stay: '返程', summary: '返程日顺路走嵩山，从郑州东上车；体力有限就只走少林寺。', legs: [
        { from: '洛阳市区', to: '少林寺', mode: '自驾', normal: '约 1–1.7 小时', holiday: '至少预留 2 小时' },
        { from: '郑州东', to: '上海虹桥', mode: '高铁', normal: '约 4–6 小时' },
      ] },
    ],
  },
  {
    id: 'route-6f', code: '已定', days: 6, name: '我们的洛阳行程', theme: '河洛人文＋白云山', pace: '中等', featured: true, confirmed: true, color: '#b8434f',
    summary: '杭州直达高铁进洛阳，前三天把河洛人文看透，第四天进白云山住一晚看日出，第六天返程。全程只换一次住宿区域，是目前 10 条路线里换酒店最少的。',
    cities: ['杭州', '洛阳', '嵩县'],
    fiveScoreIds: ['longmen', 'baiyunshan'], hotelMoves: 1, longestLeg: '杭州东→洛阳龙门，高铁约 6 小时 20 分',
    itinerary: [
      { day: 1, title: '杭州 → 洛阳 · 龙门石窟', region: '洛阳', placeIds: ['longmen'], stay: '洛阳市区', summary: '按计划 14:00 到龙门站、15:00 进景区。要留意：龙门石窟需分时段实名预约，且 18:30 停止入场，15:00 进场只有约 3.5 小时，想游满 4 小时建议改坐更早的车次。', legs: [
        { from: '杭州东', to: '洛阳龙门', mode: '高铁', normal: '约 6 小时 20–25 分', note: '直达车 G1874 06:26→12:49、G1882 07:53→14:18、G1894 11:19→17:41；想 15:00 稳进景区，G1874 比 G1882 更保险' },
        { from: '洛阳龙门站', to: '龙门石窟', mode: '自驾', normal: '约 4 公里 / 打车 10 分钟', holiday: '国庆建议预留 20–30 分钟', note: '公交 71 路可直达但约 42 分钟，赶时间就打车' },
      ] },
      { day: 2, title: '洛阳博物馆 → 应天门 → 洛邑古城', region: '洛阳', placeIds: ['luoyang-museum', 'suitang-city', 'luoyi-ancient-city'], stay: '洛阳市区', summary: '洛博 17:00 闭馆、16:30 停止入馆，必须上午去。下午跨洛河看应天门，傍晚步行到洛邑古城夜游，动线是南岸→北岸→老城，不折返。', legs: [
        { from: '洛阳博物馆', to: '应天门', mode: '自驾', normal: '打车约 20–30 分钟', note: '两点分处洛河南北岸，公交需在王城广场一带换乘' },
        { from: '应天门', to: '洛邑古城', mode: '步行', normal: '约 2.5 公里 / 步行 30–40 分钟', note: '也可乘地铁 1 号线，应天门站→洛邑古城站直达' },
      ] },
      { day: 3, title: '汉魏故城 → 白马寺 → 古墓博物馆', region: '洛阳', placeIds: ['hanwei', 'white-horse', 'ancient-tombs'], stay: '洛阳市区', summary: '把你们原计划的顺序调了一下：国庆白马寺周边有交通管制，官方建议把车停在汉魏洛阳故城遗址博物馆停车场，步行 500 米进白马寺最省事。三个馆都是 17:00 闭馆、16:30 停止入馆，9 点开门就要到，一天塞三个偏紧。', legs: [
        { from: '汉魏洛阳故城遗址博物馆', to: '白马寺', mode: '步行', normal: '约 500 米 / 6–10 分钟', note: '国庆白马寺区域部分时段限行，先停汉魏博物馆再步行' },
        { from: '白马寺', to: '洛阳古墓博物馆', mode: '自驾', normal: '打车约 20–30 分钟', note: '一个在城东、一个在北邙山上，是当天最长的一段，务必留足时间' },
      ] },
      { day: 4, title: '洛阳 → 白云山', region: '洛阳 / 嵩县', placeIds: ['baiyunshan'], stay: '白云山景区内', summary: '上午就出发，不要等下午。景区直达大巴官方口径 13:30 一班、约 3 小时，坐这班到山上天就快黑了。下午先看瀑布群，第二天清早看日出。', legs: [
        { from: '洛阳市区', to: '白云山', mode: '自驾', normal: '约 150 公里 / 2.5 小时', holiday: '国庆建议预留 3.5–4 小时', note: '白云天路弯多坡急，到景区后建议换乘景交车上山' },
        { from: '龙门客运站', to: '白云山', mode: '大巴', normal: '直达大巴约 3 小时 / 45 元', note: '官方口径 13:30 发车，另有 7:40、7:50 早班；各来源时刻不一致，出发前务必电话确认' },
      ] },
      { day: 5, title: '白云山日出 → 返回洛阳', region: '嵩县 / 洛阳', placeIds: ['baiyunshan'], stay: '洛阳市区', summary: '清早坐玉皇顶早班索道看日出，上午继续逛小天池一带，下午返回洛阳。10 月山顶清晨可能接近 0℃，冲锋衣或羽绒必备。', legs: [
        { from: '白云山', to: '洛阳市区', mode: '自驾', normal: '约 2.5 小时', holiday: '国庆建议预留 3–3.5 小时' },
        { from: '铜河游客服务中心', to: '洛阳市区', mode: '大巴', normal: '12:30、13:30 两班，约 3–4 小时', note: '末班 13:30，错过当天回不了市区，坐大巴的话上午安排要压缩' },
      ] },
      { day: 6, title: '洛阳 → 杭州', region: '洛阳', placeIds: [], stay: '返程', summary: '返程日不排景点。想再逛就近选个市区免票点，别安排需要预约的场馆。', legs: [
        { from: '洛阳龙门', to: '杭州东', mode: '高铁', normal: '约 6 小时 20 分–6 小时 40 分', note: '参考 G3113 洛阳龙门 07:31→杭州东 14:08；具体车次以 12306 为准' },
      ] },
    ],
  },
];
