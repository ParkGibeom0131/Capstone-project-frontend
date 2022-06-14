import { ApolloProvider, useReactiveVar } from '@apollo/client';
import React from 'react';
import { darkTheme, lightTheme, GlobalStyles } from "./styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { client, darkModeVar } from "./apollo";
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import routes from './routes';
import Layout from './components/Layout';

import Home from './screens/Home';
import FileUpload from './screens/FileUpload';
import ScreenSharing from './screens/ScreenSharing';
import WebFiltering from './screens/WebFiltering';

import HomeCon from './controller/HomeCon'
import WebFilteringCon from './controller/WebFilteringCon'
import FileUploadCon from './controller/FileUploadCon'
import ScreenShareCon from './controller/ScreenShareCon'

import HomeAdd from './addon/HomeAdd'
import FileUploadAdd from './addon/FileUploadAdd'
import WebFilterAdd from './addon/WebFilterAdd'
import ScreenShareAdd from './addon/ScreenShareAdd'

import "antd/dist/antd.min.css";

function App() {
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Router>
            <Routes>
              <Route path={routes.home} element={(<Layout main={<Home />} controller={<HomeCon />} addon={<HomeAdd />}></Layout>)}></Route>
            </Routes>
            <Routes>
              <Route path={routes.WebFiltering} element={(<Layout main={<WebFiltering />} controller={<WebFilteringCon />} addon={<WebFilterAdd />}></Layout>)}></Route>
            </Routes>
            <Routes>
              <Route path={routes.fileUpload} element={(<Layout main={<FileUpload />} controller={<FileUploadCon />} addon={<FileUploadAdd />}></Layout>)}></Route>
            </Routes>
            <Routes>
              <Route path={routes.screenSharing} element={(<Layout main={<ScreenSharing />} controller={<ScreenShareCon />} addon={<ScreenShareAdd />}></Layout>)}></Route>
            </Routes>
          </Router >
        </ThemeProvider >
      </HelmetProvider >
    </ApolloProvider >
  );
}

export default App;
