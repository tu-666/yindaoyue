// 初始化Vue应用
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            // 网站基本信息
            siteName: '永久地址发布页',
            slogan: '永不失联的访问入口',
            announcement: '请收藏本页面，避免迷路。如遇到访问困难，请多尝试几个地址。',
            footerText: '© 2023 永久地址发布页 - 保存此页面，永不迷路',
            lastUpdateTime: new Date().toLocaleDateString(),
            
            // 网站地址列表
            sites: [
                {
                    name: '主站地址',
                    description: '推荐访问',
                    url: 'https://example.com',
                    icon: 'fas fa-home'
                },
                {
                    name: '备用地址1',
                    description: '稳定可靠',
                    url: 'https://backup1.example.com',
                    icon: 'fas fa-shield-alt'
                },
                {
                    name: '备用地址2',
                    description: '高速访问',
                    url: 'https://backup2.example.com',
                    icon: 'fas fa-bolt'
                },
                {
                    name: '加速地址',
                    description: '全球加速',
                    url: 'https://cdn.example.com',
                    icon: 'fas fa-tachometer-alt'
                },
                {
                    name: '永久域名',
                    description: '请牢记此地址',
                    url: 'https://permanent.example.com',
                    icon: 'fas fa-lock'
                },
                {
                    name: '最新地址',
                    description: '定期更新',
                    url: 'https://latest.example.com',
                    icon: 'fas fa-sync-alt'
                }
            ],
            
            // 通知相关
            showNotification: false,
            notificationMessage: '',
            notificationTimeout: null
        };
    },
    mounted() {
        // 初始化粒子位置
        this.initParticles();
        
        // 显示欢迎通知
        setTimeout(() => {
            this.showNotificationMessage('欢迎访问永久地址发布页！');
        }, 1000);
    },
    methods: {
        // 复制URL到剪贴板
        copyUrl(url) {
            navigator.clipboard.writeText(url).then(() => {
                this.showNotificationMessage('地址已复制到剪贴板！');
            }).catch(err => {
                this.showNotificationMessage('复制失败，请手动复制！');
                console.error('复制失败:', err);
            });
        },
        
        // 显示通知消息
        showNotificationMessage(message) {
            // 清除之前的定时器
            if (this.notificationTimeout) {
                clearTimeout(this.notificationTimeout);
            }
            
            this.notificationMessage = message;
            this.showNotification = true;
            
            // 设置通知自动消失
            this.notificationTimeout = setTimeout(() => {
                this.showNotification = false;
            }, 3000);
        },
        
        // 初始化粒子效果
        initParticles() {
            const particles = document.querySelectorAll('.particles');
            
            particles.forEach((particle, index) => {
                // 随机大小
                const size = Math.random() * 4 + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                // 随机透明度
                particle.style.opacity = Math.random() * 0.5 + 0.3;
                
                // 随机动画时长
                const duration = Math.random() * 10 + 10;
                particle.style.animationDuration = `${duration}s`;
                
                // 随机初始位置
                const randomLeft = Math.random() * 100;
                particle.style.left = `${randomLeft}%`;
                
                // 随机动画延迟
                const delay = Math.random() * 20;
                particle.style.animationDelay = `${delay}s`;
            });
        }
    }
});

// 挂载Vue应用
app.mount('#app');