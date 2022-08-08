import React from "react";
import { Menu, Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import { route } from "../../routes";
import "./index.less";

const { Header, Footer, Sider, Content } = Layout;

class MenuPage extends React.Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menu theme="dark">
              {route.map((val) => {
                return (
                  <Menu.Item key={val.key}>
                    <Link to={val.path}>{val.menuName}</Link>
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Content>
            <Outlet />
          </Content>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    );
  }
}

export default MenuPage;
