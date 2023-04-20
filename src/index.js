import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Board from './Components/Board'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Board/>}/>
      </Routes>
    </BrowserRouter>
  </>
);