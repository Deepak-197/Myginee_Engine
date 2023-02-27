import React from 'react';
import { Route, Routes } from 'react-router';
import { Homepage } from '../Homepage/Homepage';
import { BirthdayDetail } from '../Pages/DetailedItem/BirthdayDetail';
import { DetailedItem } from '../Pages/DetailedItem/DetailedItem';
import { ViewAllitem } from '../Pages/ViewAllitem/ViewAllitem';

export const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/"  element={<Homepage />} />
            <Route path="/photography"  element={<ViewAllitem />} />
            <Route path="/photography/:id"  element={<DetailedItem />} />
            <Route path="/photography/birthday"  element={<BirthdayDetail />} />
            <Route path="*"  element={<h1>Page Not Found</h1>} />
        </Routes>
    </div>
  )
}