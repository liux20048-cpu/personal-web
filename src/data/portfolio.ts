import { AboutCard, ArticleCard, ProjectCard, VideoCard } from '../types';

export const aboutCards: AboutCard[] = [
  { 
    id: '1', 
    type: 'advantage', 
    title: 'Highlights', 
    content: [
      '技术洞察与商业翻译 | 具备技术洞察力，能够围绕云计算、车云数据、AI 等产品，梳理核心卖点与差异化价值，并结合 AI 趋势探索技术产品的内容与传播方式创新，支撑品牌传播与业务推广。',
      '媒体与企业的“双栖”视角 | 拥有科技媒体与 B 端企业的复合经验，能够从第三方视角与内部业务双向驱动内容创新。',
      '整合型营销执行经验 | 参与技术内容 Campaign、用户大会及行业活动，具备从策划、物料制作到渠道分发与复盘的完整执行能力。',
      '全渠道矩阵运营 | 了解公众号、视频号、小红书、B 站等短视频及直播全流程策划，擅长利用多元化媒介形式为内容赋能。'
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
          '技术型内容策划：围绕车端数据库、车云一体数据底座等产品，构建 FAQ、客户案例、产品手册等标准化技术内容体系，支撑产品传播与市场教育。',
          '活动策划支持：参与年度用户大会及行业展会内容策划，负责嘉宾沟通与传播物料统筹，提升品牌在智能汽车数据领域的专业认知。',
          '内容资产沉淀：搭建可复用内容组件库，推动演讲、视频等内容跨平台、多场景复用，提升内容产出效率与一致性。',
          '新媒体运营：负责公众号与视频号选题与内容落地，通过图文与短视频输出技术与场景解读，强化产品能力认知。'
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
    period: '2022.7-2023.4',
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
    id: '6', 
    type: 'work', 
    title: '工作经历', 
    subTitle: '广州嘉为科技有限公司',
    period: '2021.4-2022.7',
    content: [
      {
        title: '运营工程师',
        items: [
          '平台部署运维：负责腾讯蓝鲸平台的部署、安装与调试，执行系统日常运维与巡检任务，保障平台稳定高效运行。',
          '数据监控优化：采集主机与网络多维数据，构建可视化监控体系，实现异常数据的实时监控与快速响应，提升运维效率与系统可靠性。'
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
    id: 'a1', category: 'product', title: '重磅升级!亚信安全发布信舷 AE 40G 高性能防毒墙', excerpt: '真实力打造边界防护第一关', cover: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/767698.html' 
  },
  { 
    id: 'a2', category: 'product', title: '英特尔超能云终端 3.0 再进化', excerpt: '助力千行百业云终端新体验', cover: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/767698.html' 
  },
  { 
    id: 'a3', category: 'product', title: '更轻更强更智能!Bonree ONE 春季正式版重磅发布', excerpt: '', cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/752694.html' 
  },
  { 
    id: 'a4', category: 'product', title: '防火墙再“进化”，更智能是否更安全？', excerpt: '', cover: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/779794.html' 
  },
  // 采访稿件
  { 
    id: 'a5', category: 'interview', title: '与昇思 MindSpore 共成长', excerpt: '开源新生代解锁大模型开发', cover: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/758128.html' 
  },
  { 
    id: 'a6', category: 'interview', title: 'MongoDB 首席技术官：AI 将加速现代化应用程序的构建', excerpt: '', cover: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/759465.html' 
  },
  { 
    id: 'a7', category: 'interview', title: 'SUSE:强化零信任、自动化和易用性', excerpt: '筑牢云原生安全防线', cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/757788.html' 
  },
  { 
    id: 'a8', category: 'interview', title: '零数科技 CTO 兰春嘉:区块链与人工智能的结合点在数据', excerpt: '', cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/760595.html' 
  },
  { 
    id: 'a9', category: 'interview', title: '人工智能助力空天报国梦', excerpt: '厦门大学团队用 AI 能力护“工业 皇冠明珠”', cover: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/767698.html' 
  },
  { 
    id: 'a10', category: 'interview', title: 'AIGC+ "| 营销新范式', excerpt: 'AIGC 能否成为出海企业“新 利器”？', cover: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/776975.html' 
  },
  // 活动稿件
  { 
    id: 'a11', category: 'event', title: '鸿蒙千帆起，是长期主义者的胜利', excerpt: '', cover: 'https://images.unsplash.com/photo-1505373877741-2d3924deb82b?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/779817.html' 
  },
  { 
    id: 'a12', category: 'event', title: '深扎根，研精品，适配三大市场，共赢数字未来!', excerpt: '', cover: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/755282.html' 
  },
  { 
    id: 'a13', category: 'event', title: '“万”象更新:华为分销市场正迈向繁荣', excerpt: '', cover: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/784261.html' 
  },
  { 
    id: 'a14', category: 'event', title: '共探“专精特新”企业高质量发展之路', excerpt: '腾讯云“专精特 新”成长直通车活动在青岛成功举行', cover: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/759468.html' 
  },
  { 
    id: 'a15', category: 'event', title: '网宿安全:防止网络安全“木桶效应”', excerpt: '企业如何构 建“体系化安全”？', cover: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/767901.html' 
  },
  { 
    id: 'a16', category: 'event', title: 'OCP China Day 2023 开放计算生态论坛', excerpt: '强化生态 聚合，产业链协同发展', cover: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop', link: 'https://server.51cto.com/article/763777.html' 
  },
  { 
    id: 'a17', category: 'event', title: 'AI 重塑媒体行业，凤凰卫视重磅入场 AI 数据赛道', excerpt: '', cover: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/773741.html' 
  },
  { 
    id: 'a18', category: 'event', title: '中国工商银行李逸帆:平台工程能更好地驱动 DevOps 推进', excerpt: '', cover: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop', link: 'https://www.51cto.com/article/767198.html' 
  },
  // 企业新闻
  { 
    id: 'a19', category: 'news', title: '智协慧同完成 PreB 轮融资', excerpt: '加速从数据库底座到数据 应用的进阶!', cover: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/1gtjjWomy9aMl043bGqmTw' 
  },
  { 
    id: 'a20', category: 'news', title: '智协慧同荣膺 2024 第六届金猿奖', excerpt: '最佳技术实践应 用奖', cover: 'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?q=80&w=800&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/o0ajCx3R1cnJwbRulTZNIQ' 
  },
  { 
    id: 'a21', category: 'news', title: '“数据驱动 共赢未来”', excerpt: '智协慧同 2024 闭门用户沙 龙圆满落幕', cover: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/2BL3RoxSl0HJ8OOy6SE6w' 
  },
  { 
    id: 'a22', category: 'news', title: '智协慧同车载数据库获美国专利授权', excerpt: '将定义新一代 智能汽车的数据库', cover: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop', link: 'https://mp.weixin.qq.com/s/1I6c2mW09gMKz6pcokwNA' 
  }
];

export const videoCards: VideoCard[] = [
  { 
    id: 'v1', 
    title: '精彩直击｜一起来看 2023 Google 开发者大会', 
    cover: 'https://dl-zhibo.51cto.com/images/live/202309/d91e65b9773bcd59319437bdd39be00551f6b7.jpg', 
    link: 'https://zhibo.51cto.com/liveDetail/538' 
  },
  { 
    id: 'v2', 
    title: '【T前线】AIGC大爆发，垂直领域如何落地应用？', 
    cover: 'https://dl-zhibo.51cto.com/images/live/202307/c8a3ca0060e0415649b929fbd03a2947744a3a.png', 
    link: 'https://zhibo.51cto.com/liveDetail/525' 
  },
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
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop'
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
      '内部协同撰稿、设计等部门配合完成网站聚合页的落地，外部邀请相关专家进行内容合作作为活动造势。'
    ],
    achievement: [
      '问答大赛线上参与人数 300+，大会现场参与人数 500+；会中会后解读直播平台 3W+/场；在线课程引流超额 200%+；'
    ],
    link: 'https://cloud.51cto.com/act/google/io2023',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop'
    ]
  }
];
