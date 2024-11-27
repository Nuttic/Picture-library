import React, { useEffect } from "react";
// import { refreshAccessToken } from "@/entities/user";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "@/shared/hooks/reduxHooks";

import { Layout } from "antd";
import { ROUTES } from "../routes";

const { Content } = Layout;

type LayoutProps = {};

export const AppLayout: React.FC<LayoutProps> = ({}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  
  useEffect(() => {
    // Устанавливаем заголовок страницы в зависимости от текущего пути
    switch (location.pathname) {
      case ROUTES.HOME:
        document.title = 'Главная';
        break;
      case ROUTES.SIGNUP:
        document.title = 'Регистрация';
        break;
      case ROUTES.SIGNIN:
        document.title = 'Авторизация';
        break;
      case ROUTES.ERROR:
        document.title = 'Страница не найдена';
        break;
      case ROUTES.LOGOUT:
        document.title = 'Выход';
        break;
     
      default:
        document.title = '...';
    }
  }, [location]);

  useEffect(() => {
    // dispatch(refreshAccessToken());
  }, [dispatch]);

  return (
    <>
      <Layout className="layout">
        {/* <Navbar /> */}
        <Content>
        <Outlet />
        </Content>
        {/* <AppFooter /> */}
      </Layout>
    </>
  );
};

export default Layout;
