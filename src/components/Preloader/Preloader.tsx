import React, { FC } from 'react';
import { PreloaderWrapper } from './Preloader.styled';

interface PreloaderProps {}

const Preloader: FC<PreloaderProps> = () => (
 <PreloaderWrapper>
    Preloader Component
 </PreloaderWrapper>
);

export default Preloader;
