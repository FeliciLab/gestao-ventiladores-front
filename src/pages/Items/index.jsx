import React, {
  useEffect,
  useState,
} from 'react';
import IndexItems from './IndexItems/IndexItems';
import { listaAcessorios } from '../../models/acessorio';
import { Item } from '../../models/item';
import { getAllItemsRequest } from '../../modelServices/itemService/itemService';


export default function () {
  const [items, setItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleEffect = () => {
    getAllItemsRequest().then((result) => {
      console.log(result.status, result.data);
    });
    setItems(listaAcessorios.map((item) => Item({ nome: item })));
    setProgress(100);
    setLoading(false);
  };

  useEffect(handleEffect, []);

  return <IndexItems loading={loading} progress={progress} items={items} />;
}
