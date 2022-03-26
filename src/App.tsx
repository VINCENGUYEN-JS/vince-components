import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';

import useDocument from './useDocument';
import routes, { CustomRouteObject } from './routes';
import NotFound from './template/NotFound';
import { Menu, Input, Layout, Row, Col } from '@vince-components';
import './pages/style/index.scss';

type NavProps = {
  userSearch: string;
  setUserSearch: React.Dispatch<React.SetStateAction<string>>;
};

const filterFn = (routes: CustomRouteObject[]) => (componentType: string) => {
  if (componentType === 'components') {
    const supportedComponents = [
      'card',
      'button',
      'divider',
      'menu',
      'input',
      'result',
      'tag',
      'modal',
    ];
    return routes.filter((route) => supportedComponents.includes(route.key));
  } else {
    const supportedLayouts = [
      'grid',
      'layout',
      'space',
      'split',
      'columns',
      'dynamicgrid',
    ];
    return routes.filter((route) => supportedLayouts.includes(route.key));
  }
};

const MenuItem = Menu.Item;
const MenuItemGroup = Menu.ItemGroup;

const SideBar = (props: { appRoutes: CustomRouteObject[] }) => {
  const { appRoutes } = props;
  const componentTitle = 'components';
  const layoutTitle = 'layouts';
  let itemKeyForComponent = 11;
  let itemKeyForLayouts = 21;
  const selectedRoute = filterFn(appRoutes);
  return (
    <Menu mode="inline" defaultSelectedKey={['1']}>
      <MenuItem key="1">
        <Link to="/overview"> Overview</Link>
      </MenuItem>
      <MenuItemGroup title={componentTitle}>
        {selectedRoute(componentTitle).map((route) => (
          <MenuItem key={String(itemKeyForComponent++)}>
            <Link to={route.path as string}>{route.key}</Link>
          </MenuItem>
        ))}
      </MenuItemGroup>
      <MenuItemGroup title={layoutTitle}>
        {selectedRoute(layoutTitle).map((route) => (
          <MenuItem key={String(itemKeyForLayouts++)}>
            <Link to={route.path as string}>{route.key}</Link>
          </MenuItem>
        ))}
      </MenuItemGroup>
    </Menu>
  );
};

const Nav = (props: NavProps) => {
  const navigate = useNavigate();
  const { userSearch, setUserSearch } = props;
  return (
    <Row>
      <Col span={4}>
        <a id="logo" href="/">
          <img
            alt="logo"
            src="https://dewey.tailorbrands.com/production/brand_version_mockup_image/160/6818968160_d71847e7-ca8e-41c3-b0ae-03b7ee16741c.png?cb=1644846838"
          />
        </a>
      </Col>
      <Col span={20}>
        <>
          <Input.Search
            placeholder="Search"
            onChange={(e) => {
              const userSearchText = (e.target as HTMLInputElement).value;
              setUserSearch(userSearchText);
            }}
            onSearch={(value) => navigate(value)}
          />
        </>
      </Col>
    </Row>
  );
};

function App() {
  const [appRoutes, setAppRoutes] = React.useState<CustomRouteObject[]>(routes);
  const [userSearch, setUserSearch] = React.useState<string>('');

  useDocument();

  React.useEffect(() => {
    const userSearchRoute = routes.filter((route) => {
      const routeName = route.key;
      if (routeName.includes(userSearch.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
    setAppRoutes(userSearchRoute);
  }, [userSearch]);

  return (
    <div>
      <Layout>
        <Layout.Header id="header">
          <Nav userSearch={userSearch} setUserSearch={setUserSearch} />
        </Layout.Header>
        <Layout
          style={{
            minHeight: '100vh',
            padding: '40px 0 0',
            background: '#fff',
          }}
        >
          <Layout.Sider style={{ background: '#fff' }}>
            <SideBar appRoutes={appRoutes} />
          </Layout.Sider>
          <Layout.Content>
            <div style={{ paddingLeft: '64px' }}>
              <Routes>
                <Route path="/" element={<Navigate to="/overview" />} />
                <Route
                  path="/component-ants"
                  element={<Navigate to="/overview" />}
                />
                {routes.map((route) => (
                  <Route
                    path={route.path}
                    key={route.path}
                    element={route.element}
                  />
                ))}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
