import { AboutCard, ArticleCard, ProjectCard, ShortVideoCard, VideoCard } from '../types';

export const aboutCards: AboutCard[] = [
  { 
    id: '1', 
    type: 'advantage', 
    title: '能力概览', 
    content: [
      '技术内容转译 | 让客户听懂复杂技术',
      '内容策划与脚本 | 从0到1设计内容表达',
      '品牌与产品表达 | 提炼卖点，强化感知',
      '内容资产体系 | 让内容持续产生价值'
    ] 
  },
  { 
    id: '2', 
    type: 'education', 
    title: '教育经历', 
    subTitle: '重庆大学 | 环境工程 | 本科',
    content: [], 
    period: '2016.09-2020.06' 
  },
  { 
    id: '3', 
    type: 'work', 
    title: '品牌宣传经理',
    subTitle: '智协慧同（北京）科技有限公司',
    period: '2023.03 - 至今', 
    content: [
      {
        title: '品牌宣传经理',
        items: [
          '官网建设与管理：负责公司官网的架构规划、内容维护及视觉迭代；通过定期更新技术方案与新闻动态，确保品牌门户的即时性与专业度。',
          '技术内容策划：围绕“车端数据库”及“车云数据底座”产品，产出 FAQ、客户案例、产品手册等标准化资产，支持销售转化与客户教育。',
          '新媒体运营：统筹公众号与视频号的选题与执行，结合产品节奏发布图文及短视频，提升产品认知度。',
          '活动策划统筹：负责年度用户大会、展会及沙龙的传播物料与内容规划，协调演讲嘉宾，落地品牌推广活动。'
        ]
      }
    ] 
  },
  { 
    id: '4', 
    type: 'work', 
    title: '策划编辑 & 记者', 
    subTitle: '51CTO (北京无忧创想信息技术有限公司)',
    period: '2023.4-2024.8',
    content: [
      {
        title: '策划编辑 & 记者',
        items: [
          '内容策划与创作：对网络安全、云计算、人工智能等相关领域的热点进行跟进，策划人物专访、内容综述、专题以及直播栏目，公众号文章阅读平均 5000+/篇，直播场观 6000+/场。',
          '品牌合作策划：根据品牌产品推广、品牌营销等需求定制内容与营销方案，并执行多渠道推广，共服务 20+ 客户。',
          '内容项目管理：推动商业项目的内容执行，合理规划内容排期，对接设计、剪辑、技术等部门交付提交，代表案例包括 Google 开发者大会 (参与人数 800+，直播播放 3w+) 及火山引擎城市沙龙 (5 场)。'
        ]
      }
    ]
  },
  { 
    id: '5', 
    type: 'work', 
    title: '工作经历', 
    subTitle: '北京亿欧网盟科技有限公司',
    period: '2021.4-2023.4',
    content: [
      {
        title: '内容运营',
        items: [
          '内容策划与执行：进行文章、视频、直播的选题策划与执行，累计文章 80+，直播 50+、短视频 150+。',
          '数据分析与策略调整：跟踪、挖掘和分析各渠道数据，包括公众号、头条号、雪球、微博、小红书、b 站、抖音等平台，调整内容和传播策略。',
          '媒体矩阵维护：完成媒体矩阵从 0-1 的搭建，管理并维护各媒体渠道内容分发与维护，实现公众号新增关注超 400%。'
        ]
      }
    ]
  },
  { 
    id: '7', 
    type: 'skill', 
    title: '职业技能', 
    content: [
      { name: '原创文章撰写', level: '熟练' },
      { name: '视频剪辑', level: '掌握' },
      { name: '文案撰写', level: '熟练' },
      { name: '公众号运营', level: '熟练' },
      { name: 'PS', level: '掌握' },
      { name: 'AIGC 应用', level: '掌握' },
      { name: 'MS Office', level: '熟练' },
      { name: '策划撰写', level: '熟练' } // 补充
    ] 
  }
];

export const articleCards: ArticleCard[] = [
  // 产品宣传稿
  { 
    id: 'ap1',
    category: 'product',
    title: '智慧楼宇升级，从边缘入手',
    excerpt: '',
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    link: 'https://mp.weixin.qq.com/s/1jz8VzJ2tMkN0QF2lnjdgA?scene=1'
  },
  { 
    id: 'ap2',
    category: 'product',
    title: '从理论到实践：车辆智能诊断Agent的路线该如何选择？',
    excerpt: '',
    cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39b?q=80&w=1200&auto=format&fit=crop',
    link: 'https://mp.weixin.qq.com/s/1VO6mGyY1aqW5FZly9cLNQ?scene=1'
  },
  { 
    id: 'ap3',
    category: 'product',
    title: '基于车云计算的智能热管理方案，让新能源汽车跑更远',
    excerpt: '',
    cover: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    link: 'https://mp.weixin.qq.com/s/gSUBbF-rWWKhuRe55xNLYw?scene=1'
  },
  { 
    id: 'ap4',
    category: 'product',
    title: '解决日志采集与应用困境————EXD车端数据库 vData 2.4.0版上线',
    excerpt: '',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    link: 'https://mp.weixin.qq.com/s/E2vSvWjphVjX4exOjtDPFQ?scene=1'
  },
  {
    id: 'ap5',
    category: 'product',
    title: '突发问题导致车辆紧急断电，数据怎么办？',
    excerpt: '',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    link: 'https://mp.weixin.qq.com/s/nfHRsy1-ND5Pwniau5FIhQ?scene=1'
  },
  // 采访稿件
  { 
    id: 'a5', category: 'interview', title: '与昇思 MindSpore 共成长', excerpt: '开源新生代解锁大模型开发', cover: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/758128.html' 
  },
  { 
    id: 'a6', category: 'interview', title: 'MongoDB 首席技术官：AI 将加速现代化应用程序的构建', excerpt: '', cover: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/759465.html' 
  },
  { 
    id: 'a7', category: 'interview', title: 'SUSE:强化零信任、自动化和易用性', excerpt: '筑牢云原生安全防线', cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/757788.html' 
  },
  { 
    id: 'a8', category: 'interview', title: '零数科技 CTO 兰春嘉:区块链与人工智能的结合点在数据', excerpt: '', cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/760595.html' 
  },
  { 
    id: 'a9', category: 'interview', title: '人工智能助力空天报国梦', excerpt: '厦门大学团队用 AI 能力护“工业 皇冠明珠”', cover: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/767698.html' 
  },
  { 
    id: 'a10', category: 'interview', title: 'AIGC+ "| 营销新范式', excerpt: 'AIGC 能否成为出海企业“新 利器”？', cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/776975.html' 
  },
  // 活动稿件
  { 
    id: 'a11', category: 'event', title: '鸿蒙千帆起，是长期主义者的胜利', excerpt: '', cover: 'https://images.unsplash.com/photo-1505373877741-2d3924deb82b?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/779817.html' 
  },
  { 
    id: 'a12', category: 'event', title: '深扎根，研精品，适配三大市场，共赢数字未来!', excerpt: '', cover: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/755282.html' 
  },
  { 
    id: 'a13', category: 'event', title: '“万”象更新:华为分销市场正迈向繁荣', excerpt: '', cover: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/784261.html' 
  },
  { 
    id: 'a14', category: 'event', title: '共探“专精特新”企业高质量发展之路', excerpt: '腾讯云“专精特 新”成长直通车活动在青岛成功举行', cover: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/759468.html' 
  },
  { 
    id: 'a15', category: 'event', title: '网宿安全:防止网络安全“木桶效应”', excerpt: '企业如何构 建“体系化安全”？', cover: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/767901.html' 
  },
  { 
    id: 'a16', category: 'event', title: 'OCP China Day 2023 开放计算生态论坛', excerpt: '强化生态 聚合，产业链协同发展', cover: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop', link: 'https://server.51cto.com/article/763777.html' 
  },
  { 
    id: 'a17', category: 'event', title: 'AI 重塑媒体行业，凤凰卫视重磅入场 AI 数据赛道', excerpt: '', cover: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/773741.html' 
  },
  { 
    id: 'a18', category: 'event', title: '中国工商银行李逸帆:平台工程能更好地驱动 DevOps 推进', excerpt: '', cover: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1200&auto=format&fit=crop', link: 'https://www.51cto.com/article/767198.html' 
  },
  // 企业新闻
  { 
    id: 'a19', category: 'news', title: '智协慧同完成 PreB 轮融资', excerpt: '加速从数据库底座到数据 应用的进阶!', cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/1gtjjWomy9aMl043bGqmTw' 
  },
  { 
    id: 'a20', category: 'news', title: '智协慧同荣膺 2024 第六届金猿奖', excerpt: '最佳技术实践应 用奖', cover: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=1200&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/o0ajCx3R1cnJwbRulTZNIQ' 
  },
  { 
    id: 'a21', category: 'news', title: '“数据驱动 共赢未来”', excerpt: '智协慧同 2024 闭门用户沙 龙圆满落幕', cover: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/2BL3RoxSl0HJ8OOy6SE6w' 
  },
  { 
    id: 'a22', category: 'news', title: '智协慧同车载数据库获美国专利授权', excerpt: '将定义新一代 智能汽车的数据库', cover: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/1I6c2mW09gMKz6pcokwNA' 
  }
];

export const videoCards: VideoCard[] = [
  { 
    id: 'v1', 
    title: '精彩直击｜一起来看 2023 Google 开发者大会', 
    cover: 'https://dl-zhibo.51cto.com/images/live/202309/d91e65b9773bcd59319437bdd39be00551f6b7.jpg', 
    link: 'https://zhibo.51cto.com/liveDetail/538',
    category: 'livestream'
  },
  { 
    id: 'v2', 
    title: '【T前线】AIGC大爆发，垂直领域如何落地应用？', 
    cover: 'https://dl-zhibo.51cto.com/images/live/202307/c8a3ca0060e0415649b929fbd03a2947744a3a.png', 
    link: 'https://zhibo.51cto.com/liveDetail/525',
    category: 'livestream'
  },
  {
    id: 'v3',
    title: '智协慧同公司宣传片（英文版）',
    cover: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    link: 'https://youtu.be/JFjsXWEPjfs?si=6dQJapgjvuAK69L-',
    category: 'promo'
  },
  {
    id: 'v4',
    title: '智协慧同VDM产品宣传片（英文版）',
    cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39b?q=80&w=1200&auto=format&fit=crop',
    link: 'https://www.bilibili.com/video/BV1zfHhzfE2L/?share_source=copy_web&vd_source=5269ac5759ae7426f688547bb87a869f',
    category: 'promo'
  }
];

export const shortVideoCards: ShortVideoCard[] = [
  {
    id: 'sv1',
    title: '华为园区网络“光进铜退”先锋行动发布会',
    topicLogic: '围绕客户发布会传播目标，对技术信息进行筛选与重组，通过“现场记录+重点解读”的内容结构，将复杂技术转化为清晰的业务价值表达，支撑客户对外传播与方案推广。',
    structure: [
      '开头：发布会现场切入 + 引出“光进铜退”',
      '核心：提炼关键技术与方案能力',
      '场景：结合园区应用（教育 / 医疗 / 工厂等）',
      '结尾：总结技术趋势与方案价值'
    ],
    role: '策划 / 脚本 / 出镜',
    watchHint: '观看方式：视频号51CTO，搜索“光进铜退”',
    cover: '/images/光进铜退.png'
  },
  {
    id: 'sv2',
    title: '带你逛 2024 Google 开发者大会，AI 如何释放创新潜能？',
    topicLogic: '以“第一视角逛大会”为切入点，将大会中的 AI 技术内容进行筛选，重点提炼对开发者 / 行业的价值，提升内容的信息密度与观看体验，从而吸引更多人关注谷歌 AI 技术进展。',
    structure: [
      '开头：大会现场 + 提出核心问题（AI 有什么变化）',
      '核心：拆解重点技术（模型 / 工具 / 平台）',
      '场景：展区案例（AI 应用 / 社会价值）',
      '结尾：总结 AI 对开发者的影响'
    ],
    role: '策划 / 脚本',
    watchHint: '观看方式：视频号51CTO，搜索“2024 Google 开发者大会”',
    cover: '/images/谷歌开发者大会.png'
  },
  {
    id: 'sv3',
    title: '《数据驱动智能汽车100问》短视频栏目',
    topicLogic: '围绕智能汽车领域的高频问题，将复杂技术拆解为“一问一答”的轻量内容单元，降低理解门槛，同时形成系列化内容资产，支持销售沟通。',
    structure: [
      '开头：问题引入',
      '中段：核心解释，拆解概念 + 图文配合帮助理解',
      '结尾：一句话总结'
    ],
    role: '策划 / 脚本 / 剪辑',
    watchHint: '观看方式：微信搜索“数据驱动智能汽车100问”',
    cover: '/images/数据驱动.png'
  }
];

export const projectCards: ProjectCard[] = [
  { 
    id: 'p1', 
    title: '智协慧同用户大会', 
    subtitle: '数据驱动 共赢未来',
    role: '策划&执行',
    period: '2024.9-2024.11',
    description: '智协慧同用户大会是公司首次面向整车厂客户、技术专家与行业生态伙伴举办的大型品牌活动，旨在感谢长期合作客户的支持，展示公司核心技术能力，深化行业认知与客户信任。',
    responsibility: [
      '内容架构搭建与协同策划：统筹大会整体内容框架，组织高管、产品、研发等团队共同梳理演讲内容，协助撰写讲稿/PPT，确保输出内容既专业又贴合客户关注点。',
      '落地执行保障：全流程参与酒店选址、物料设计印刷、展台搭建、签到系统、嘉宾接待等会务环节，保障各项准备工作有序推进。',
      '传播与内容资产沉淀：主导图文直播、短视频剪辑、会议摘要撰写与后续演讲稿传播，形成可复用内容资产并同步至销售工具包体系。'
    ],
    achievement: [
      '带动目标客户高净签约转化，投入产出比达到 7:1 (ROI 700%)',
      '搭建公司首个“会议即内容资产”模板，演讲材料、FAQ文档、视频素材等内容复用频次达 10+ 次'
    ],
    images: [
      '/images/用户大会.png'
    ]
  },
  { 
    id: 'p2', 
    title: '谷歌开发者大会内容合作项目', 
    subtitle: '多元共进',
    role: '策划&执行',
    period: '2023.6-2023.10',
    description: 'Google 开发者大会是 Google 面向开发者和科技爱好者展示最新产品和平台的年度盛会，此项目的目的在于吸引开发者关注并积极参与开发者大会，同时鼓励更多的开发者学习谷歌开发者在线课程。',
    responsibility: [
      '策划大会前中后期的内容营销方案，以多期问答大赛将大会的宣传与在线课程的学习这两个目标结合；',
      '负责该项目的内容部分，包括线上线下活动内容策划、直播内容策划、海报、营销邮件、社群推广等文案；',
      '内部协同技术、设计等部门配合完成网站聚合页的落地，外部邀请相关专家进行内容合作作为活动造势。'
    ],
    achievement: [
      '问答大赛线上参与人数 300+，大会现场参与人数 500+；会中会后解读直播平台 3W+/场；在线课程引流超额 200%+；'
    ],
    link: 'https://cloud.51cto.com/act/google/io2023',
    images: [
      '/images/大会.png'
    ]
  }
];
