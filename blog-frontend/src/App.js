import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
const App = () => {
  return (
    
    <Routes>  //하 /:@username이라고 계속 헤메고있엇음 @없애줘야함
      <Route path="/:username" element={<PostListPage />} exact />
      <Route path='/' element={<PostListPage />} exact />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/write' element={<WritePage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/:username/:postId' element={<PostPage />} />
    </Routes>
  );
};

export default App;

