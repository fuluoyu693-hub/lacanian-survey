import { Question } from '@/types';

export const questions: Question[] = [
  // --- 话语问题（Q1–Q12）---
  {
    id: 1,
    type: 'discourse',
    text: '当一个群体缺乏明确方向时，你倾向于……',
    options: [
      { text: '主动介入，接管局面，设定明确的方向。', value: 'M' },
      { text: '提供最相关的知识或框架来组织事情。', value: 'U' },
      { text: '质疑既定目标本身是否正确。', value: 'H' },
      { text: '提出问题，帮助他人厘清他们真正想要的是什么。', value: 'A' },
    ],
  },
  {
    id: 2,
    type: 'discourse',
    text: '当某人……时，你感到最不舒服。',
    options: [
      { text: '忽视或质疑你的判断，却不给出任何解释。', value: 'M' },
      { text: '否定证据或专业知识，转而凭直觉行事。', value: 'U' },
      { text: '表现得好像自己掌握了所有答案。', value: 'H' },
      { text: '要求你告诉他们究竟该成为什么样的人。', value: 'A' },
    ],
  },
  {
    id: 3,
    type: 'discourse',
    text: '对你而言，知识首先意味着……',
    options: [
      { text: '行动的基础——知道意味着能够决定。', value: 'M' },
      { text: '需要掌握、整理并传递给他人的东西。', value: 'U' },
      { text: '用来质疑人们习以为常之物的工具。', value: 'H' },
      { text: '一种指向仍未知、仍未言说之物的标志。', value: 'A' },
    ],
  },
  {
    id: 4,
    type: 'discourse',
    text: '在亲密关系中，他人会如何描述你？',
    options: [
      { text: '做决定、带方向的那个人。', value: 'M' },
      { text: '给建议、提供信息的那个人。', value: 'U' },
      { text: '质疑、挑衅的那个人。', value: 'H' },
      { text: '倾听、反映的那个人。', value: 'A' },
    ],
  },
  {
    id: 5,
    type: 'discourse',
    text: '当有人给你建议时，你通常会……',
    options: [
      { text: '先与自己的判断对照，再加以考量。', value: 'M' },
      { text: '理性评估——这个建议站得住脚吗？', value: 'U' },
      { text: '感到矛盾——既想接受，又想抗拒。', value: 'H' },
      { text: '好奇这个建议揭示了给建议者本身什么。', value: 'A' },
    ],
  },
  {
    id: 6,
    type: 'discourse',
    text: '你认为你的话语对他人有何作用？',
    options: [
      { text: '引导并塑造他们的行为。', value: 'M' },
      { text: '提供信息，帮助他们理解。', value: 'U' },
      { text: '打破假设，激发新的思考。', value: 'H' },
      { text: '开辟一个空间，让他们找到自己的意义。', value: 'A' },
    ],
  },
  {
    id: 7,
    type: 'discourse',
    text: '你与"真相"的关系最准确地描述为……',
    options: [
      { text: '我相信直觉——感受到时便知道。', value: 'M' },
      { text: '真相通过证据和严格的方法得以确立。', value: 'U' },
      { text: '它永远比人们愿意承认的更复杂。', value: 'H' },
      { text: '它往往通过人们无法言说的东西浮现。', value: 'A' },
    ],
  },
  {
    id: 8,
    type: 'discourse',
    text: '你在哪种状态下感觉最有生命力？',
    options: [
      { text: '领导某件事——让愿景成为现实。', value: 'M' },
      { text: '深陷于某个复杂领域的学习或讲解之中。', value: 'U' },
      { text: '质疑所有人都习以为常的东西。', value: 'H' },
      { text: '帮助某人发现关于自身的某些东西。', value: 'A' },
    ],
  },
  {
    id: 9,
    type: 'discourse',
    text: '当一个机构或系统崩溃时，你的本能反应是……',
    options: [
      { text: '需要有人出面掌控并立即修复。', value: 'M' },
      { text: '更好的流程和知识本可以防止这一切。', value: 'U' },
      { text: '这个系统本来就有缺陷——现在只是暴露出来了。', value: 'H' },
      { text: '这次失败揭示了哪些构建它的欲望？', value: 'A' },
    ],
  },
  {
    id: 10,
    type: 'discourse',
    text: '当你说话时，你最希望他人……',
    options: [
      { text: '按你说的去做。', value: 'M' },
      { text: '清楚、完整地理解你的意思。', value: 'U' },
      { text: '质疑他们之前的假设。', value: 'H' },
      { text: '得出他们自己的答案。', value: 'A' },
    ],
  },
  {
    id: 11,
    type: 'discourse',
    text: '哪句话最能引起你的共鸣？',
    options: [
      { text: '"我知道该做什么。"', value: 'M' },
      { text: '"我有解决这个问题的知识。"', value: 'U' },
      { text: '"我想要答案——但如果感觉不对，我会拒绝它。"', value: 'H' },
      { text: '"比起任何答案，我对问题本身更感兴趣。"', value: 'A' },
    ],
  },
  {
    id: 12,
    type: 'discourse',
    text: '在冲突中，你倾向于……',
    options: [
      { text: '清楚地表明立场，期待他人逐渐认同。', value: 'M' },
      { text: '诉诸共同的事实、逻辑或原则。', value: 'U' },
      { text: '对看起来最确信的那一方反弹最强。', value: 'H' },
      { text: '试图理解每个人真正想要的是什么。', value: 'A' },
    ],
  },

  // --- 神经症问题（Q13–Q20）---
  {
    id: 13,
    type: 'neurosis',
    text: '当你渴望某件事时，你……',
    options: [
      { text: '常常找到理由拖延或使其复杂化。', value: 'Obs' },
      { text: '强烈地追求它，但一旦得到，又觉得并不完全对。', value: 'Hys' },
    ],
  },
  {
    id: 14,
    type: 'neurosis',
    text: '当一段关系最初的兴奋褪去之后……',
    options: [
      { text: '你留下来，但欲望悄悄漂移到别处或幻想之中。', value: 'Obs' },
      { text: '你感到这段关系永远无法给你真正需要的东西。', value: 'Hys' },
    ],
  },
  {
    id: 15,
    type: 'neurosis',
    text: '哪种焦虑对你来说更熟悉？',
    options: [
      { text: '对自己攻击性的恐惧——一旦放开会发生什么。', value: 'Obs' },
      { text: '害怕自己在表面之下并不知道自己是谁。', value: 'Hys' },
    ],
  },
  {
    id: 16,
    type: 'neurosis',
    text: '当你实现一个重要目标时，你通常感到……',
    options: [
      { text: '短暂的释然，然后焦虑于接下来应该发生什么。', value: 'Obs' },
      { text: '一种微妙的空洞——仿佛这不完全是你所想象的。', value: 'Hys' },
    ],
  },
  {
    id: 17,
    type: 'neurosis',
    text: '你的内心生活最像……',
    options: [
      { text: '一系列将事物维持在可控范围内的怀疑与仪式。', value: 'Obs' },
      { text: '一场持续进行的表演，而你永远无法确定观众是谁。', value: 'Hys' },
    ],
  },
  {
    id: 18,
    type: 'neurosis',
    text: '最困扰你的念头是……',
    options: [
      { text: '"我是否在虚度光阴？我做得足够多吗？"', value: 'Obs' },
      { text: '"我究竟是谁——在这些角色之下？"', value: 'Hys' },
    ],
  },
  {
    id: 19,
    type: 'neurosis',
    text: '在对话中，你倾向于……',
    options: [
      { text: '仔细准备要说的话，事后又反复质疑自己。', value: 'Obs' },
      { text: '自由地表达，然后感到被误解——或觉得暴露了太多。', value: 'Hys' },
    ],
  },
  {
    id: 20,
    type: 'neurosis',
    text: '你反复出现的焦虑或症状感觉像是……',
    options: [
      { text: '一种组织和容纳某种可能会让你崩溃之物的方式。', value: 'Obs' },
      { text: '一条写给某人的信——尽管你不确定是谁。', value: 'Hys' },
    ],
  },
];
