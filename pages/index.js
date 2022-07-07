import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.box}>
            <header className={styles.header}>
                <div className={styles.title}>
                    <logo className={styles.logo}>Notion+Lyket</logo>
                    <h1>现在开始获得反馈！</h1>
                </div>
                <div className={styles.text}>
                    <div>
                        <h4>这是将 Lyket 嵌入到 Notion 的解决方案。</h4>
                        <h4>通过让您的用户点赞，立即了解哪些是最受欢迎的内容！</h4>
                    </div>
                    <div>
                        <h4>您只需嵌入此路径到 Notion，即可创建 Lyket 按钮。</h4>
                        <h4>应用域名/like-button/ [button-namespace] / [button-id]</h4>
                    </div>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.item}>
                    <h4><a href="https://app.lyket.dev/signup" target="_blank">注册 Lyket</a></h4>
                    <div>
                        <p>以获取您的</p>
                        <p>个人 API 密钥</p>
                    </div>
                </div>
                <line>｜</line>
                <div className={styles.item}>
                    <h4><a
                        href="https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-%E8%87%AA%E8%BF%B0%E6%96%87%E4%BB%B6"
                        target="_blank">在 Vercel 上部署</a></h4>
                    <div>
                        <p>使用 Vercel 平台</p>
                        <p>选择您的存储库并部署</p>
                    </div>
                </div>
                <line>｜</line>
                <div className={styles.item}>
                    <h4><a href="https://www.notion.so" target="_blank">在Notion创建按钮</a></h4>
                    <div>
                        <p>使用已部署的应用地址</p>
                        <p>在 Notion 中创建按钮</p>
                    </div>
                </div>
                <line>｜</line>
                <div className={styles.item}>
                    <h4><a href="https://app.lyket.dev/dashboard/like" target="_blank">仪表盘查看数据</a></h4>
                    <div>
                        <p>监视点赞数据</p>
                        <p>实时获取最新反馈</p>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <a className={styles.github} href="https://github.com/kailous/notion-embed" target="_blank">Github</a>
            </footer>
        </div>
        // <div className={styles.container}>
        //   <main className={styles.main}>
        //     <p className={styles.description}>
        //         这是一个 Notion Lyket 嵌入小部件.
        //         在<a href="https://github.com/kailous/notion-embed">此处</a>查看如何将其添加到您的 Notion 项目中{" "}
        //         在<a href="https://app.lyket.dev/dashboard/like">此处</a>进入仪表盘查看按钮点击数据。
        //     </p>
        //   </main>
        // </div>
    );
}
