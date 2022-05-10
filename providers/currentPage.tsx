import React, { createContext, useContext, useState } from 'react';

type CurrentPageContextType = {
  currentPage: string;
  setPage: (page: string) => void;
};

const CurrentPageContext = createContext<CurrentPageContextType>({
  currentPage: '',
  setPage: () => null,
});

export const useCurrentPage = () => {
  return useContext(CurrentPageContext);
};

type Props = {
  children: JSX.Element;
};

export const CurrentPageProvider = ({ children }: Props) => {
  const [currentPage, setCurrentPage] = useState('home');

  const setPage = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <CurrentPageContext.Provider value={{ currentPage, setPage }}>
      {children}
    </CurrentPageContext.Provider>
  );
};
