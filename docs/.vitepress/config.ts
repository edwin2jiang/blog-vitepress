import { defineConfig } from 'vitepress'

import { version } from '../../package.json'

export default defineConfig({
    title: '夏2同学的个人小站',
    description: 'Vite & Vue powered static site generator.',

    lastUpdated: true,

    themeConfig: {
        logo: '/me.jpg',
        nav: nav(),

        sidebar: {
            '/博客/': sidebarBlog(),
            '/学习笔记/': sidebarLearningNote()
        },

        editLink: {
            pattern: 'https://github.com/xia-2/blog-vitepress',
            text: 'Edit this page on GitHub'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/xia-2/blog-vitepress' }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Edwin Jiang'
        },

        algolia: {
            appId: '8J64VVRP8K',
            apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
            indexName: 'vitepress'
        },

        // algolia: {
        //   appId: '661RT1GWXB',
        //   apiKey: 'ee15958557f6c95c91297cf56873b505',
        //   indexName: 'blog_edwin_jiang'
        // },

        // carbonAds: {
        //     code: 'CEBDT27Y',
        //     placement: 'vuejsorg'
        // }
    }
})


function nav() {
    return [
        { text: '博客', link: '/博客/index', activeMatch: '/博客/' },
        { text: '学习笔记', link: '/学习笔记/index', activeMatch: '/学习笔记/' },
        {
            text: version,
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
                },
                {
                    text: 'Contributing',
                    link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                },
            ],
        },
    ]
}

function sidebarBlog() {
    return [
        {
            "text": "Java相关",
            "collapsible": true,
            "items": [
                {
                    "text": "Java的拓展包C3P0和DBUtil的使用",
                    "link": "/博客/Java相关/Java的拓展包C3P0和DBUtil的使用"
                },
                {
                    "text": "Java项目目录结构与解析",
                    "link": "/博客/Java相关/Java项目目录结构与解析"
                }
            ]
        },
        {
            "text": "python",
            "collapsible": true,
            "items": [
                {
                    "text": "python中的JSON到底怎么用？",
                    "link": "/博客/python/python中的JSON到底怎么用？"
                },
                {
                    "text": "python实现下载任意网站所有图片",
                    "link": "/博客/python/python实现下载任意网站所有图片"
                }
            ]
        },
        {
            "text": "Vue相关",
            "collapsible": true,
            "items": [
                {
                    "text": "Vue基础语法回顾",
                    "link": "/博客/Vue相关/Vue基础语法回顾"
                }
            ]
        },
        {
            "text": "科技杂文",
            "collapsible": true,
            "items": [
                {
                    "text": "mdNice皮肤文本",
                    "link": "/博客/科技杂文/mdNice皮肤文本"
                },
                {
                    "text": "Ubuntu software解决下载速度过慢",
                    "link": "/博客/科技杂文/Ubuntu software解决下载速度过慢"
                },
                {
                    "text": "【计算机专业必备】宿舍显示器指南",
                    "link": "/博客/科技杂文/【计算机专业必备】宿舍显示器指南"
                },
                {
                    "text": "搜狗输入法里的那些骚操作",
                    "link": "/博客/科技杂文/搜狗输入法里的那些骚操作"
                },
                {
                    "text": "笔记本电脑合起来后外接显示器，如何开机？",
                    "link": "/博客/科技杂文/笔记本电脑合起来后外接显示器，如何开机？"
                },
            ]
        },
        {
            "text": "软件推荐",
            "collapsible": true,
            "items": [
                {
                    "text": "【实用技能】如何复制项目文件不包括node_modules",
                    "link": "/博客/软件推荐/【实用技能】如何复制项目文件不包括node_modules"
                },
                {
                    "text": "别再翻了，大学私藏实用工具_网站全在这里了！",
                    "link": "/博客/软件推荐/别再翻了，大学私藏实用工具_网站全在这里了！"
                }
            ]
        },
        {
            "text": "软件教程",
            "collapsible": true,
            "items": [
                // {
                //     "text": "Python自带编辑器IDLE使用教程",
                //     "link": "/博客/软件教程/Python自带编辑器IDLE使用教程"
                // },
                {
                    "text": "typora图床教程-sm.ms",
                    "link": "/博客/软件教程/typora图床教程-sm.ms"
                },
                {
                    "text": "typora图床教程-阿里云版",
                    "link": "/博客/软件教程/typora图床教程-阿里云版"
                },
                {
                    "text": "typora图床教程_七牛版",
                    "link": "/博客/软件教程/typora图床教程_七牛版"
                },
                {
                    "text": "【亲测有效】andriod studio性能优化",
                    "link": "/博客/软件教程/【亲测有效】andriod studio性能优化"
                },
                {
                    "text": "微信公众号接入学习通答题教程",
                    "link": "/博客/软件教程/微信公众号接入学习通答题教程"
                },
                {
                    "text": "文档树生成方法",
                    "link": "/博客/软件教程/文档树生成方法"
                }
            ]
        }
    ]
}

function sidebarLearningNote() {
    return [
        {
            "text": "Vue快速入门",
            "collapsible": true,
            "items": [
                {
                    "text": "Vue3 - ref和reactive以及组合式API",
                    "link": "/学习笔记/Vue快速入门/Vue3 - ref和reactive以及组合式API"
                },
                {
                    "text": "Vue3 - watch和computed API",
                    "link": "/学习笔记/Vue快速入门/Vue3 - watch和computed API"
                },
                {
                    "text": "Vue3 - 父子组件数据传递",
                    "link": "/学习笔记/Vue快速入门/Vue3 - 父子组件数据传递"
                },
                {
                    "text": "Vue超简单的全局状态管理 - Pinia的最佳实践",
                    "link": "/学习笔记/Vue快速入门/Vue超简单的全局状态管理 - Pinia的最佳实践"
                }
            ]
        },
        {
            "text": "微信小程序",
            "collapsible": true,
            "items": [
                {
                    "text": "WXML学习",
                    "link": "/学习笔记/微信小程序/WXML学习"
                },
                {
                    "text": "组件学习01",
                    "link": "/学习笔记/微信小程序/组件学习01"
                },
                {
                    "text": "组件学习02",
                    "link": "/学习笔记/微信小程序/组件学习02"
                }
            ]
        }
    ]
}

