这是将 [Lyket](https://lyket.dev/) 嵌入到 [`Notion`](https://notion.so) 的解决方案。

使用此解决方案，您只需导航到路径 “ /like-button/ [button-namespace] / [button-id] ” 即可创建 Lyket 按钮

阅读更多关于需要创建什么 Lyket 按钮的信息 [这里](https://lyket.dev/docs/react)

您可以看到它的外观演示 [喜欢按钮](https://lyket-notion-embed.vercel.app/like-button/all/my-button) | [上下按钮](https://lyket-notion-embed.vercel.app/updown-button/all/my-button) | [拍手按钮](https://lyket-notion-embed.vercel.app/clap-button/all/my-button)

## 入门

首先，[在 Lyket 上注册](https://app.lyket.dev/signup) 以获取您的个人 API 密钥。

然后，您需要复刻此存储库并将其部署到无服务器平台，例如 Vercel 或 Netlify。

如果您想在部署之前进行一些试验，请克隆它并将 NEXT_PUBLIC_LYKET_API_KEY 中的个人 API 密钥添加到 .env.local

## 在 Vercel 上部署

部署 Lyket 小部件应用程序的最简单方法是使用
[Vercel 平台](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-自述文件) ，选择您的存储库并部署。

请记住在您的 Vercel 应用程序设置 [/settings/environment-variables] 中添加您的个人 API 密钥作为环境变量。使用名称 NEXT_PUBLIC_LYKET_API_KEY。

触发新部署以应用更改。

## 查看 Notion 上的按钮

现在，您可以使用已部署应用程序的地址在 iframe 或 Notion 中创建 Lyket 按钮。

例如：

- https://my-app/like-button/my-blog/my-post 将创建一个以命名空间 my-blog 和 my-post 作为 ID 的点赞按钮
- https://my-app/clap-button/my-blog/my-post 将创建一个以命名空间 my-blog 和 my-post 作为 ID 的拍手按钮
- https://my-app/updown-button/my-blog/my-post 将创建一个带有命名空间 my-blog 和 my-post 作为 ID 的 updown 按钮

要查看 Notion 上的按钮，只需复制 Notion 中的链接，然后从选项列表中选择 _Create embed_

## 自定义按钮

这个 repo 包含 Lyket 的最基本版本，但 Lyket 提供了很好的定制选择！
要了解有关如何自定义按钮的更多信息，请查看以下资源：

- [Lyket React 文档](https://lyket.dev/docs/react) - 了解所有 Lyket 功能。
- [创建一个赞按钮](https://lyket.dev/blog/react-like-button) - 创建一个 React 赞按钮。
- [创建拍手按钮](https://lyket.dev/blog/react-clap-button) - 创建 React 拍手按钮。
- [创建一个喜欢-不喜欢按钮](https://lyket.dev/blog/react-like-dislike-button) - 创建一个 React 喜欢-不喜欢按钮。