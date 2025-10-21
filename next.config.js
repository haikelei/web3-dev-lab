import nextra from 'nextra'

const withNextra = nextra({
  // 设置内容目录路径（可选，默认从根路径提供内容）
  // contentDirBasePath: '/docs',
  
  // MDX 选项
  mdxOptions: {
    // 可以在这里添加 remark/rehype 插件
    // 注意：如果使用 Turbopack，插件必须是 JSON 可序列化的
  }
})

export default withNextra({
  // Next.js 配置
  reactStrictMode: true,
  
  // 可选：如果你想使用图片优化
  images: {
    unoptimized: false,
  },
})
