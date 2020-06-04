import React from 'react';
import { Container } from '@material-ui/core';
import Layout from '../_layout/Layout';
import { listaAcessorios } from '../../models/acessorio';
import { Item } from '../../models/item';
import ItemsPage from './ItemsPage';

const IndexItems = () => {
  const items = listaAcessorios.map((item) => Item({ nome: item }));
  return (
    <>
      <Layout>
        <Container>
          <ItemsPage items={items} />
        </Container>
      </Layout>
    </>
  );
};

export default IndexItems;
