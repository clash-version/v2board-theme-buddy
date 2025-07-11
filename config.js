window.config={
    logo: '/assets/happybus1.png', // 网站logo
    title:"Happy Bus", // 网站标题
    host:"https://api.kl8s.com/", // 后端接口地址
    storeHome: {
        title: '选择最适合你的订阅计划', // 套餐页标题
        description: '若您已购买订阅且当前未过期，再次购买相同套餐将在原过期时间上追加时长，购买其他套餐则对原有订阅进行折抵' // 套餐页描述
    },
    SignPage: {
        title: '覆盖全球的高速网络，您的高速旅程从 快乐巴士 开始', // 登录页标题
        desc1: 'High-speed network covering the whole world', // 登录页描述1
        desc2: 'Your high-speed journey starts with happly bus', // 登录页描述2
        inviteCodeEdit: false, // 是否允许用户修改邀请码
    },
    homeClient: {
        display: false, // 是否显示客户端下载教程卡片
        clients: [
            {
                key: 'windows',
                title: 'Windows客户端',
                icon: 'ri:windows-fill',
                downloadLink: 'https://clashapp.download/clash-download#Windows', // Windows客户端下载地址
                knowledgeLink: 'https://clashapp.download/topic/clash-windows', // 使用教程地址
            },
            {
                key: 'mac',
                title: 'Mac客户端',
                icon: 'ri:finder-fill',
                downloadLink: 'https://clashapp.download/clash-download#MacOS', // Mac客户端下载地址
                knowledgeLink: 'https://clashapp.download/topic/clash-macos', // 使用教程地址
            },
            {
                key: 'android',
                title: 'Android客户端',
                icon: 'ri:android-fill',
                downloadLink: 'https://clashapp.download/clash-download#Android', // Android客户端下载地址
                knowledgeLink: 'https://clashapp.download/topic/clash-android', // 使用教程地址
            },
            {
                key: 'ios',
                title: 'iOS客户端',
                icon: 'ri:apple-fill',
                downloadLink: 'https://clashapp.download/clash-download#iOS', // iOS客户端下载地址
                knowledgeLink: 'https://clashapp.download/topic/clash-ios', // 使用教程地址
            },
            {
                key: 'knowledge',
                title: '查看其它教程',
                icon: 'ri:questionnaire-fill',
                downloadLink: null,
                knowledgeLink: 'https://clashapp.download', // 使用教程地址
            }
        ],
    },
    homeBanner: {
        display: true, // 是否显示首页横幅
        title: '邀请好友，共享优惠', // 首页banner标题
        link: '/dashboard/invite', // 首页banner链接，站内链接
        btnText: '立即邀请', // 首页banner按钮文字
        element: '/assets/hongbao.webp', // 首页banner元素图片
        bgImg: '/assets/yaoqingbg.jpg', // 首页banner背景图片
    }
}