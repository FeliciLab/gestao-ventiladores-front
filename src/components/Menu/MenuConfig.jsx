import React from 'react';
import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import SubtitlesSharpIcon from '@material-ui/icons/SubtitlesSharp';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import LocalMallSharpIcon from '@material-ui/icons/LocalMallSharp';
import UnarchiveSharpIcon from '@material-ui/icons/UnarchiveSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';

const MENU_ROUTES = [
  {
    label: 'ordens de serviço',
    path: '/ordens-servicos',
    icon: <LibraryBooksSharpIcon font="small" />,
  },
  {
    label: 'triagem',
    path: '/triagens',
    icon: <AssignmentSharpIcon font="small" />,
  },
  {
    label: 'diagnóstico',
    path: '/diagnosticos',
    icon: <SubtitlesSharpIcon font="small" />,
  },
  {
    label: 'demanda',
    path: '/demandas',
    icon: <LocalMallSharpIcon font="small" />,
  },
  {
    label: 'calibragem',
    path: '/calibragem',
    icon: <AssignmentTurnedInSharpIcon font="small" />,
  },
  {
    label: 'entrega',
    path: '/entregas',
    icon: <UnarchiveSharpIcon font="small" />,
  },
];

export default MENU_ROUTES;
