import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Web3 Dev Lab',
    template: '%s | Web3 Dev Lab'
  },
  description: '从钱包到DeFi到跨链：Web3完整技术栈学习与实践'
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          pageMap={pageMap}
          navbar={
            <Navbar 
              logo={<b>🌐 Web3 Dev Lab</b>}
              projectLink="https://github.com/haikelei/web3-dev-lab"
            />
          }
          footer={
            <Footer>
              MIT {new Date().getFullYear()} © Web3 Dev Lab
            </Footer>
          }
          search={
            <Search 
              placeholder="搜索文档..."
              loading="加载中..."
              emptyResult="没有找到结果"
              errorText="搜索出错"
            />
          }
          docsRepositoryBase="https://github.com/haikelei/web3-dev-lab/blob/main"
          editLink="在 GitHub 上编辑此页"
          feedback={{
            content: '有问题？给我们反馈 →',
            labels: 'feedback'
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1
          }}
          toc={{
            backToTop: '回到顶部',
            title: '目录'
          }}
          themeSwitch={{
            light: '浅色',
            dark: '深色',
            system: '系统'
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
