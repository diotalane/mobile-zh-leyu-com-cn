// assets/content-map.js
// 站点内容分区与搜索过滤模块

const siteConfig = {
  baseUrl: "https://mobile-zh-leyu.com.cn",
  defaultLang: "zh-CN",
  version: "1.2.0"
};

// 内容分区定义
const contentSections = [
  {
    id: "home",
    title: "首页",
    slug: "/",
    keywords: ["首页", "乐鱼体育", "体育赛事", "综合"]
  },
  {
    id: "live",
    title: "直播",
    slug: "/live",
    keywords: ["直播", "乐鱼体育", "体育直播", "NBA", "足球"]
  },
  {
    id: "esports",
    title: "电竞",
    slug: "/esports",
    keywords: ["电竞", "乐鱼体育", "英雄联盟", "DOTA2", "CSGO"]
  },
  {
    id: "casino",
    title: "真人娱乐",
    slug: "/casino",
    keywords: ["真人", "乐鱼体育", "娱乐场", "百家乐", "轮盘"]
  },
  {
    id: "promotions",
    title: "优惠活动",
    slug: "/promotions",
    keywords: ["优惠", "乐鱼体育", "活动", "奖励", "红包"]
  }
];

// 示例搜索数据（模拟内容条目）
const sampleContentItems = [
  { title: "NBA季后赛直播", section: "live", tags: ["篮球", "NBA", "乐鱼体育"] },
  { title: "LPL夏季赛", section: "esports", tags: ["电竞", "英雄联盟", "乐鱼体育"] },
  { title: "真人百家乐", section: "casino", tags: ["真人", "百家乐", "乐鱼体育"] },
  { title: "周末充值送红包", section: "promotions", tags: ["优惠", "红包", "乐鱼体育"] },
  { title: "英超焦点战", section: "live", tags: ["足球", "英超", "乐鱼体育"] }
];

// 根据关键词搜索内容分区
function searchSectionByKeyword(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  const matched = contentSections.filter(section =>
    section.keywords.some(kw => kw.toLowerCase().includes(lowerKeyword))
  );
  return matched.length > 0 ? matched : null;
}

// 根据标签搜索示例内容条目
function searchContentByTags(searchTags) {
  if (!Array.isArray(searchTags)) return [];
  const lowerTags = searchTags.map(t => t.toLowerCase());
  return sampleContentItems.filter(item =>
    item.tags.some(tag => lowerTags.includes(tag.toLowerCase()))
  );
}

// 获取所有分区的关键词列表（去重）
function getAllKeywords() {
  const keywordSet = new Set();
  contentSections.forEach(section => {
    section.keywords.forEach(kw => keywordSet.add(kw));
  });
  return Array.from(keywordSet);
}

// 根据分区ID获取完整URL
function getSectionUrl(sectionId) {
  const section = contentSections.find(s => s.id === sectionId);
  if (!section) return null;
  return `${siteConfig.baseUrl}${section.slug}`;
}

// 导出（支持CommonJS和浏览器全局）
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    siteConfig,
    contentSections,
    sampleContentItems,
    searchSectionByKeyword,
    searchContentByTags,
    getAllKeywords,
    getSectionUrl
  };
} else if (typeof window !== "undefined") {
  window.contentMap = {
    siteConfig,
    contentSections,
    sampleContentItems,
    searchSectionByKeyword,
    searchContentByTags,
    getAllKeywords,
    getSectionUrl
  };
}