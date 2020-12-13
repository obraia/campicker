import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IPalette, IReducers } from '../../interfaces';
import Pallete from '../palette';

import SearchIcon from '../svg/search';
import ArrowLeftIcon from '../svg/arrow-left';
import ArrowRightIcon from '../svg/arrow-right';

import {
  Container,
  HeaderContainer,
  ContainerButton,
  SearchInput,
  PaginationDetails,
  WhiteSpace
} from './styles';
import PalleteModel from '../../models/PalleteModel';

const List = () => {
  // console.log('[Component render] Product list');

  const { theme } = useSelector((state: IReducers) => state.themeReducers);
  const { palettes } = useSelector((state: IReducers) => state.paletteReducers);


  const [items, setItems] = useState(palettes.filter(p => p.id !== '0000'));
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setNumberOfPages(Math.round(palettes.length / itemsPerPage));
  }, [palettes.length]);

  const filter = (value: string) => {
    const filteredItems = palettes.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
    setItems(filteredItems);
  }

  const nextPage = () => {
    if (pageNumber < numberOfPages) {
      setPageNumber(pageNumber + 1);
    }
  }

  const previousPage = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1)
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <SearchInput placeholder={'Pesquisar'} onChangeText={value => filter(value)} />
        <ContainerButton>
          <SearchIcon fill={theme.colors.primary} size={'15px'} />
        </ContainerButton>
      </HeaderContainer>

      {palettes?.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage)
        .filter(p => p.id !== '0000')
        .map((pallete, index) =>
          <Pallete key={index} pallete={pallete} index={(pageNumber * itemsPerPage) + index} />
        )}

      <HeaderContainer>
        <PaginationDetails>Total: {palettes.length} - Página: {pageNumber + 1}/{numberOfPages + 1} </PaginationDetails>

        <ContainerButton onPress={previousPage} onLongPress={() => setPageNumber(0)}>
          <ArrowLeftIcon fill={theme.colors.primary} size={'25px'} />
        </ContainerButton>

        <ContainerButton onPress={nextPage} onLongPress={() => setPageNumber(numberOfPages)}>
          <ArrowRightIcon fill={theme.colors.primary} size={'25px'} />
        </ContainerButton>
      </HeaderContainer>

      <WhiteSpace />
    </Container>
  );
}

export default List;