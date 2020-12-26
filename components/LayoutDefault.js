import { Layout, Menu, BackTop } from 'antd';
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function TopNav() {
  const { Header } = Layout;
  const [selectedKey, setSelectedKey] = useState('')

  useEffect(() => {
    setSelectedKey(location.pathname)
  }, [])

  return (
    <>
      <Header>
        <Menu 
          theme="dark" 
          mode="horizontal" 
          defaultSelectedKeys={['/']}
          selectedKeys={[selectedKey]}
        >
          <Menu.Item key="/">
            <Link href="/">
              나눔목록
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <BackTop />
    </>
  )
}