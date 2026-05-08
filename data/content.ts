import type { ProjectCategory } from "./projects";

export type Language = "en" | "zh";

type EducationItem = {
  school: string;
  degree: string;
  meta: string;
  areasLabel: string;
  areas: string;
};

type SkillGroup = {
  title: string;
  items: string[];
};

type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  period?: string;
  description: string;
};

type PortfolioContent = {
  brand: string;
  languageLabel: string;
  sectionLabels: Record<"about" | "education" | "projects" | "skills" | "experience" | "contact", string>;
  nav: string[];
  focusPillars: string[];
  hero: {
    name: string;
    eyebrow: string;
    headline: string;
    subtitle: string;
    primaryAction: string;
    secondaryAction: string;
    photoAlt: string;
    achievementStrip: string;
  };
  sections: {
    about: {
      title: string;
      body: string[];
    };
    education: {
      title: string;
      items: EducationItem[];
    };
    projects: {
      title: string;
      intro: string;
      count: string;
      allFilter: string;
      filters: Record<ProjectCategory, string>;
      viewDetails: string;
    };
    skills: {
      title: string;
      groups: SkillGroup[];
    };
    experience: {
      title: string;
      items: ExperienceItem[];
    };
    contact: {
      title: string;
      intro: string;
      emailLabel: string;
      linkedinLabel: string;
      phoneLabel: string;
      phoneValue: string;
    };
  };
};

export const sectionIds = ["about", "education", "projects", "skills", "experience", "contact"] as const;

export const content: Record<Language, PortfolioContent> = {
  en: {
    brand: "Erhan Nie",
    languageLabel: "Language",
    sectionLabels: {
      about: "PROFILE",
      education: "EDUCATION",
      projects: "PROJECT ARCHIVE",
      skills: "TECHNICAL TOOLKIT",
      experience: "EXPERIENCE",
      contact: "CONTACT",
    },
    nav: ["About Me", "Education", "Projects", "Skills", "Experience", "Contact"],
    focusPillars: ["Digital Grid", "Hardware Systems", "Analog / Mixed-Signal Design"],
    hero: {
      name: "Erhan Nie",
      eyebrow: "Personal Portfolio",
      headline: "Electrical & Computer Engineering · Digital Grid · Hardware Systems",
      subtitle:
        "I am an Electrical & Computer Engineering Master of Engineering graduate from the University of Toronto, currently working at China Southern Power Grid Digital Grid Group. My work and interests focus on digital power systems, smart grid technologies, hardware engineering, analog/mixed-signal circuits, and intelligent engineering solutions.",
      primaryAction: "View Projects",
      secondaryAction: "Contact",
      photoAlt: "Portrait of Erhan Nie, Electrical and Computer Engineering professional",
      achievementStrip: "12 Engineering Projects · UofT MEng · UBC Electrical Engineering · Digital Grid & Hardware Systems",
    },
    sections: {
      about: {
        title: "About Me",
        body: [
          "I am an Electrical & Computer Engineering professional with academic and project experience across power systems, digital grid technologies, hardware design, analog/mixed-signal circuits, and applied machine learning.",
          "My engineering background combines system-level thinking with hands-on implementation. I have worked on power protection simulation, pulse-rate monitoring IC design, analog circuit design, PCB validation, signal-integrity testing, and deep reinforcement learning projects. I am especially interested in applying engineering intelligence to digital power systems, smart grid infrastructure, and reliable hardware platforms.",
          "Currently, I work at China Southern Power Grid Digital Grid Group, where I focus on the digitalization, intelligence, and reliability of modern power systems.",
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            school: "University of Toronto",
            degree: "Master of Engineering, Electrical & Computer Engineering",
            meta: "Toronto, Canada · Jan 2024 – Oct 2025",
            areasLabel: "Relevant areas",
            areas:
              "Power Protection, Smart Grid, Analog Circuit Design, VLSI Design Methodology, Applied Deep Learning, Reinforcement Learning.",
          },
          {
            school: "The University of British Columbia",
            degree: "Bachelor of Applied Science, Electrical Engineering",
            meta: "Kelowna, Canada · Sep 2018 – Jun 2023",
            areasLabel: "Relevant areas",
            areas:
              "Power System Analysis and Design, Microelectronics, Digital Signal Processing, Electric Circuits and Power, Linear Circuit Theory, VLSI Systems.",
          },
        ],
      },
      projects: {
        title: "Projects",
        intro:
          "A collection of engineering projects across integrated circuits, analog design, power systems, control, hardware prototyping, and applied machine learning.",
        count: "12 Engineering Projects",
        allFilter: "All",
        filters: {
          "IC & Analog Circuits": "IC & Analog Circuits",
          "Power Systems & Control": "Power Systems & Control",
          "AI & Software": "AI & Software",
          "Hardware Prototyping": "Hardware Prototyping",
          "Engineering Design": "Engineering Design",
        },
        viewDetails: "View Details",
      },
      skills: {
        title: "Skills",
        groups: [
          {
            title: "Engineering Domains",
            items: [
              "Power systems",
              "Digital grid",
              "Smart grid",
              "Transmission line protection",
              "Analog/mixed-signal circuits",
              "Hardware validation",
              "PCB debugging",
              "Signal integrity",
              "Power management",
              "VLSI design",
            ],
          },
          {
            title: "Software & EDA Tools",
            items: [
              "Cadence Virtuoso",
              "Spectre/ADE",
              "Altium Designer",
              "LTspice",
              "MATLAB/Simulink",
              "PSCAD",
              "KLayout",
              "Quartus",
              "ModelSim",
            ],
          },
          {
            title: "Programming",
            items: ["Python", "Verilog", "C++", "Assembly"],
          },
          {
            title: "Laboratory Tools",
            items: [
              "Oscilloscope",
              "Multimeter",
              "Function generator",
              "Logic analyzer",
              "Spectrum analyzer",
              "Network analyzer",
              "Soldering iron",
              "Breadboard",
            ],
          },
        ],
      },
      experience: {
        title: "Experience",
        items: [
          {
            company: "China Southern Power Grid Digital Grid Group",
            role: "Digital Grid / Electrical Engineering Professional",
            location: "China",
            description:
              "Currently working on digital grid technologies and power-system digitalization, with a focus on intelligent energy infrastructure, system reliability, and engineering implementation.",
          },
          {
            company: "University of Toronto",
            role: "Teaching Assistant, ECE295H1S: Hardware Design and Communication",
            location: "Toronto, Canada",
            period: "Jan 2025 – Apr 2025",
            description:
              "Guided undergraduate teams in hardware design, demodulator subsystem development, schematic review, LTspice simulation, Altium ERC/DRC checking, PCB validation, soldering inspection, and final system testing.",
          },
          {
            company: "AzurEngine Technologies, Inc.",
            role: "Hardware Design Intern",
            location: "Zhuhai, China",
            period: "Jun 2023 – Nov 2023",
            description:
              "Worked on Buck converter simulation, BGA rework, quad-phase power board validation, signal-integrity testing, MXM PCB electrical validation, soldering, impedance testing, and hardware-software integration.",
          },
          {
            company: "Huawei Technologies Co., Ltd.",
            role: "Hardware Development Intern",
            location: "Canada",
            period: "Sep 2022 – Oct 2022",
            description:
              "Worked with Verilog and Quartus for digital logic design, LED timing, frequency measurement, digital-tube display, DDS output, and basic wireless communication simulation.",
          },
        ],
      },
      contact: {
        title: "Contact",
        intro: "For professional opportunities, collaborations, or engineering discussions:",
        emailLabel: "Email",
        linkedinLabel: "LinkedIn",
        phoneLabel: "Phone / WeChat",
        phoneValue: "Available upon request",
      },
    },
  },
  zh: {
    brand: "聂尔含",
    languageLabel: "语言",
    sectionLabels: {
      about: "个人简介",
      education: "教育背景",
      projects: "项目档案",
      skills: "技术能力",
      experience: "工作经历",
      contact: "联系方式",
    },
    nav: ["关于我", "教育经历", "项目经历", "技能", "工作经历", "联系方式"],
    focusPillars: ["数字电网", "硬件系统", "模拟 / 混合信号设计"],
    hero: {
      name: "聂尔含",
      eyebrow: "个人作品集",
      headline: "电气与计算机工程 · 数字电网 · 硬件系统",
      subtitle:
        "我是多伦多大学电气与计算机工程硕士，目前就职于南方电网数字电网集团。我的工作与兴趣方向聚焦数字电力系统、智能电网技术、硬件工程、模拟/混合信号电路与智能工程解决方案。",
      primaryAction: "查看项目",
      secondaryAction: "联系我",
      photoAlt: "聂尔含的个人肖像，电气与计算机工程方向工程技术人员",
      achievementStrip: "12 个工程项目 · 多伦多大学工程硕士 · UBC 电气工程 · 数字电网与硬件系统",
    },
    sections: {
      about: {
        title: "关于我",
        body: [
          "我是电气与计算机工程方向的工程技术人员，具备电力系统、数字电网、硬件设计、模拟/混合信号电路以及应用机器学习方面的学习与项目经验。",
          "我的工程背景结合了系统级理解与动手实现能力。我曾参与电力保护仿真、脉率监测 IC 设计、模拟电路设计、PCB 验证、信号完整性测试以及深度强化学习项目。我尤其关注如何将工程智能应用于数字电力系统、智能电网基础设施与高可靠硬件平台。",
          "目前我就职于南方电网数字电网集团，关注现代电力系统的数字化、智能化与可靠性提升。",
        ],
      },
      education: {
        title: "教育经历",
        items: [
          {
            school: "多伦多大学",
            degree: "电气与计算机工程硕士",
            meta: "加拿大多伦多 · 2024.01 – 2025.10",
            areasLabel: "相关方向",
            areas: "电力系统保护、智能电网、模拟电路设计、VLSI 设计方法学、深度学习应用、强化学习。",
          },
          {
            school: "不列颠哥伦比亚大学",
            degree: "电气工程应用科学学士",
            meta: "加拿大基洛纳 · 2018.09 – 2023.06",
            areasLabel: "相关方向",
            areas: "电力系统分析与设计、微电子学、数字信号处理、电路与电能、线性电路理论、VLSI 系统。",
          },
        ],
      },
      projects: {
        title: "项目经历",
        intro: "以下项目涵盖集成电路、模拟电路、电力系统、控制、硬件原型设计与应用机器学习等方向。",
        count: "12 个工程项目",
        allFilter: "全部",
        filters: {
          "IC & Analog Circuits": "集成电路与模拟电路",
          "Power Systems & Control": "电力系统与控制",
          "AI & Software": "人工智能与软件",
          "Hardware Prototyping": "硬件原型设计",
          "Engineering Design": "工程设计",
        },
        viewDetails: "查看详情",
      },
      skills: {
        title: "技能",
        groups: [
          {
            title: "工程方向",
            items: [
              "电力系统",
              "数字电网",
              "智能电网",
              "输电线路保护",
              "模拟/混合信号电路",
              "硬件验证",
              "PCB 调试",
              "信号完整性",
              "电源管理",
              "VLSI 设计",
            ],
          },
          {
            title: "软件与 EDA 工具",
            items: [
              "Cadence Virtuoso",
              "Spectre/ADE",
              "Altium Designer",
              "LTspice",
              "MATLAB/Simulink",
              "PSCAD",
              "KLayout",
              "Quartus",
              "ModelSim",
            ],
          },
          {
            title: "编程语言",
            items: ["Python", "Verilog", "C++", "Assembly"],
          },
          {
            title: "实验工具",
            items: [
              "示波器",
              "万用表",
              "函数信号发生器",
              "逻辑分析仪",
              "频谱分析仪",
              "网络分析仪",
              "电烙铁",
              "面包板",
            ],
          },
        ],
      },
      experience: {
        title: "工作经历",
        items: [
          {
            company: "南方电网数字电网集团",
            role: "数字电网 / 电气工程方向",
            location: "中国",
            description:
              "目前从事数字电网与电力系统数字化相关工作，关注智能能源基础设施、系统可靠性与工程落地。",
          },
          {
            company: "多伦多大学",
            role: "ECE295H1S《硬件设计与通信》课程教学助理",
            location: "加拿大多伦多",
            period: "2025.01 – 2025.04",
            description:
              "指导本科生团队完成硬件设计、解调子系统开发、电路原理图审核、LTspice 仿真、Altium ERC/DRC 检查、PCB 验证、焊接检查与最终系统测试。",
          },
          {
            company: "芯动力科技有限公司",
            role: "硬件设计实习生",
            location: "中国珠海",
            period: "2023.06 – 2023.11",
            description:
              "参与 Buck 转换器仿真、BGA 返修、四相电源验证板测试、信号完整性分析、MXM PCB 电气验证、焊接、阻抗测试以及硬件软件集成验证。",
          },
          {
            company: "华为技术有限公司",
            role: "硬件开发实习生",
            location: "加拿大",
            period: "2022.09 – 2022.10",
            description:
              "使用 Verilog 与 Quartus 进行数字逻辑设计，包括 LED 定时、频率测量、数码管显示、DDS 输出以及基础无线通信仿真。",
          },
        ],
      },
      contact: {
        title: "联系方式",
        intro: "欢迎就职业机会、项目合作或工程技术交流联系我：",
        emailLabel: "邮箱",
        linkedinLabel: "领英",
        phoneLabel: "电话 / 微信",
        phoneValue: "可根据需要提供",
      },
    },
  },
};

export const contactLinks = {
  email: "13680183466@163.com",
  linkedin: "https://www.linkedin.com/in/nieerhan",
};
