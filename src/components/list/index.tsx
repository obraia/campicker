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

  const [items, setItems] = useState<IPalette[]>(palettes);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const auxPalettes = [...palettes];
    auxPalettes.pop();
    setItems(auxPalettes);
  }, [palettes]);

  useEffect(() => {
    setNumberOfPages(Math.ceil((items.length) / itemsPerPage));
  }, [items.length]);

  const filter = (value: string) => {
    const auxPalettes = [...palettes];
    auxPalettes.pop();

    const filteredItems = auxPalettes.filter(p => p.name.toLowerCase().includes(value.toLowerCase()));
    setItems(filteredItems);
  }

  const nextPage = () => {
    if ((pageNumber + 1) < numberOfPages) {
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

      {items?.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage).map((pallete, index) =>
          <Pallete key={index} pallete={pallete} />
        )}

      <HeaderContainer>
        <PaginationDetails>Total: {items.length} - Página: {pageNumber + 1}/{numberOfPages} </PaginationDetails>

        <ContainerButton onPress={previousPage} onLongPress={() => setPageNumber(0)}>
          <ArrowLeftIcon fill={theme.colors.primary} size={'25px'} />
        </ContainerButton>

        <ContainerButton onPress={nextPage} onLongPress={() => setPageNumber(numberOfPages - 1)}>
          <ArrowRightIcon fill={theme.colors.primary} size={'25px'} />
        </ContainerButton>
      </HeaderContainer>

      <WhiteSpace />
    </Container>
  );
}

export default List;