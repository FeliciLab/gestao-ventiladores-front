import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import Layout from '../../_layout/Layout';
import { listaAcessorios } from '../../../models/acessorio';
import { Item } from '../../../models/item';
import ItemsPage from '../ItemsPage';
import LoadingBar from '../../_common/components/LoadingBar';

const IndexItems = () => {
  const [items, setItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleEffect = () => {
    setItems(listaAcessorios.map((item) => Item({ nome: item })));
    setProgress(100);
    setLoading(false);
  };

  useEffect(handleEffect, []);

  if (loading) {
    return <LoadingBar progress={progress} />;
  }

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
