import React from 'react';
import { RecoilRoot } from 'recoil';

export const TasksProvider = ({ children }) => (
    <RecoilRoot>{children}</RecoilRoot>
);
