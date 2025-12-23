
import { GreetingMessage } from "../types";

const GREETINGS_LIBRARY: GreetingMessage[] = [
  {
    title: "致小美的2025圣诞寄语",
    content: "2025年的初雪，轻柔地落在时光的缝隙里。愿这一抹纯白带走岁月的尘埃，为你新的一年铺就满目星辰。圣诞快乐，愿你永远是被宠爱的那个姑娘。",
    signature: "始终牵挂你的朋友"
  },
  {
    title: "岁末冬绥，万事胜意",
    content: "铃声穿越了2025的四季，最终在今夜停驻。愿圣诞树上的每一盏灯火，都能照亮你前行的路；愿每一个雪片，都化作守护你的温柔。小美，圣诞安康。",
    signature: "于冬日暖阳处"
  },
  {
    title: "星河长明，圣诞绮梦",
    content: "这一年的故事即将翻到最后一页，最好的篇章原来都留在了这个飘雪的圣诞。愿小美的2025在欢笑中圆满，在期待中开启。愿你眼里有光，心底有爱。",
    signature: "寄自星辰彼岸"
  },
  {
    title: "2025 暖冬赞歌",
    content: "即便窗外寒风凛冽，只要想起你的笑容，这个冬天便有了春天的温度。在这特别的2025圣诞夜，愿你所有的心愿都能如期而至，所有的美好都与你环环相扣。",
    signature: "你的专属暖阳"
  },
  {
    title: "冰雪奇缘：给最特别的你",
    content: "2025的雪，是冬天的告白。它替我告诉小美：无论世界如何变迁，你永远是那个最值得被温柔对待的灵魂。愿圣诞老人的雪橇里，装满了给你的所有好运。",
    signature: "圣诞老人的信使"
  },
  {
    title: "繁星寄语：2025圣诞快乐",
    content: "在2025的最后一个月份，我想把全世界的浪漫都装进袜子里送给你。愿你在往后的日子里，不畏严寒，不负韶华，活出最灿烂的自己。圣诞快乐，小美！",
    signature: "静候花开的人"
  },
  {
    title: "时光礼盒：藏在雪里的祝福",
    content: "推开2025圣诞的大门，愿你撞见满怀的惊喜。愿你的生活像肉桂热红酒一样甜美醇厚，愿你的梦境像平安夜的钟声一样悠远宁静。永远快乐，小美。",
    signature: "守护时光的少年"
  },
  {
    title: "纯白之约：冬日的私语",
    content: "这一年我们走过了许多路，而这一刻的宁静最是动人。2025的圣诞树下，不需要昂贵的礼物，只要你平安喜乐，便是这个季节最美的风景。祝小美圣诞快乐。",
    signature: "岁月的同路人"
  },
  {
    title: "圣诞物语：2025 的温柔回顾",
    content: "回顾2025，每一个有你的瞬间都闪闪发光。愿这圣诞的烛火燃尽过往的不快，只留下对未来的璀璨憧憬。愿小美在未来的日子里，被幸福紧紧包围。",
    signature: "珍惜每一刻的朋友"
  },
  {
    title: "极光下的暖意",
    content: "据说在2025的圣诞夜许愿最为灵验。我对着第一颗升起的星为你祈祷：愿你一生努力，一生被爱，想要的都拥有，得不到的都释怀。圣诞快乐，亲爱的小美。",
    signature: "远方的祝福"
  }
];

export const generateChristmasGreeting = async (recipient: string): Promise<GreetingMessage> => {
  // 模拟网络延迟，增加仪式感
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // 随机选择一个祝福
  const randomIndex = Math.floor(Math.random() * GREETINGS_LIBRARY.length);
  return GREETINGS_LIBRARY[randomIndex];
};
