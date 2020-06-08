import React, {
  useEffect,
  useState,
} from 'react';
import IndexItems from './IndexItems/IndexItems';
import { listaAcessorios } from '../../models/acessorio';
import { Item } from '../../models/item';


export default function () {
  const [items, setItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleEffect = () => {
    setItems(listaAcessorios.map((item) => Item({ nome: item })));
    setProgress(100);
    setLoading(false);
  };

  useEffect(handleEffect, []);

  return <IndexItems loading={loading} progress={progress} items={items} />;
};
