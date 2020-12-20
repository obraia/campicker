import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Creators as navigationActions } from '../../store/ducks/navigation';

import ProductList from '../../components/list';

import { Container } from './styles';

const Home = () => {
  // console.log('[Page render] Home');

  const pageName = 'Paletas';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(navigationActions.goTo(pageName));
  }, [])

  return (
    <Container>
      <ProductList />
    </Container>
  );
}

export default memo(Home);