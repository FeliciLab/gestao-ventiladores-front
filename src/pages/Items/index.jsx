import React, {
  useEffect,
  useState,
} from 'react';
import IndexItems from './IndexItems/IndexItems';
import { getAllItemsRequest } from '../../modelServices/itemService/itemService';

export default function () {
  const [items, setItems] = useState([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleEffect = () => {
    setProgress(40);
    getAllItemsRequest().then((result) => {
      setItems(result.data.content.sort((a, b) => a.nome.localeCompare(b.nome)));
      setProgress(100);
      setLoading(false);
    });
  };

  useEffect(handleEffect, []);

  return <IndexItems loading={loading} progress={progress} items={items} />;
}
