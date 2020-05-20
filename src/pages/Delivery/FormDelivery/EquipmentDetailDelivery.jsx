import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import ExtensionIcon from '@material-ui/icons/Extension';
import blue from '@material-ui/core/colors/blue';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import AccessoriesEquipmentText from './AccessoriesEquipmentText';
import DialogEquipment from './DialogEquipment';
import DialogAccessories from './DialogAccessories';
import ColorIconButton from '../../_common/forms/ColorIconButton';
import { randomIndex } from '../../../utils';


const useStyle = makeStyles(() => ({
  cellRow: {
    maxHeight: '84px',
    overflow: 'auto',
  },
}));

const EquipmentDetailDelivery = (props) => {
  const classes = useStyle();
  const {
    servicesOrdersEquipments,
    formModel,
    updateEquipment,
    updateAccessories,
  } = props;

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const [equipmentAccessories, setEquipmentAccessories] = useState([]);
  const [equipment, setEquipment] = useState({});
  const [referenceIndex, setReferenceIndex] = useState({});

  const headTable = [
    { id: 'nome_equipamento', label: 'Nome' },
    { id: 'tipo', label: 'Tipo' },
    { id: 'numero_de_serie', label: 'Nº de série' },
    { id: 'nome_instituicao_origem', label: 'Instituição de Origem' },
    { id: 'acessorios', label: 'Acessórios' },
  ];

  const [openDialogEquipment, setOpenDialogEquipment] = useState(false);
  const [openDialogAccessories, setOpenDialogAccessories] = useState(false);

  function handleClose() {
    setOpenDialogEquipment(false);
    setOpenDialogAccessories(false);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function handleOpenEquipmentDialog(servicesOrdersEquipment) {
    setEquipment(servicesOrdersEquipment.equipamento);
    setReferenceIndex(servicesOrdersEquipment._id.$oid);
    setOpenDialogEquipment(true);
  }

  function updateEquipmentDialog(doc, index) {
    updateEquipment(doc, index);
    handleClose();
  }

  function hasAccessorieToEquipment(servicesOrdersEquipment) {
    const hasAccessorieInForm = formModel && formModel.acessorios;
    return hasAccessorieInForm
      && Object.prototype.hasOwnProperty.call(
        formModel.acessorios, servicesOrdersEquipment.equipamento._id.$oid,
      );
  }

  function handleOpenAccessories(servicesOrdersEquipment) {
    const acc = hasAccessorieToEquipment(servicesOrdersEquipment)
      ? formModel.acessorios[servicesOrdersEquipment.equipamento_id.$oid].slice()
      : servicesOrdersEquipment.triagem.acessorios;

    setEquipmentAccessories(acc);
    setReferenceIndex(servicesOrdersEquipment._id);
    setOpenDialogAccessories(true);
  }

  function handlUpdateAccessories(index, _acessorios) {
    const doc = servicesOrdersEquipments.find((item) => item._id === index);
    if (!doc) {
      return;
    }

    updateAccessories(
      _acessorios.filter((item) => item.acompanha && item.descricao !== ''),
      doc.equipamento._id.$oid,
    );
    handleClose();
  }

  if (!servicesOrdersEquipments) {
    return <></>;
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headTable.map((head) => (
                <TableCell key={head.labem}>
                  {head.label}
                </TableCell>
              ))}
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {servicesOrdersEquipments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((servicesOrdersEquipment) => {
                const equipmentData = servicesOrdersEquipment.equipamento;
                return (
                  <TableRow key={randomIndex()}>
                    {headTable.map((head) => {
                      const randIndx = randomIndex();
                      if (head.id === 'acessorios') {
                        return (
                          <TableCell key={randIndx}>
                            <div className={classes.cellRow}>
                              <AccessoriesEquipmentText
                                equipmentId={equipmentData._id.$oid}
                                formModel={formModel}
                              />
                            </div>
                          </TableCell>
                        );
                      }

                      return (
                        <TableCell key={randIndx}>{equipmentData[head.id]}</TableCell>
                      );
                    })}

                    <TableCell>
                      <Grid container spacing={1}>
                        <Grid item>
                          <ColorIconButton
                            item={servicesOrdersEquipment}
                            action={handleOpenAccessories}
                            name="Acessórios"
                            icon={{
                              bgColor: blue[500],
                              hoverColor: blue[700],
                              icon: <ExtensionIcon fontSize="small" />,
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <ColorIconButton
                            item={servicesOrdersEquipment}
                            action={handleOpenEquipmentDialog}
                            name="Editar Equipamento"
                            icon={{
                              icon: <EditIcon fontSize="small" />,
                            }}
                          />
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={servicesOrdersEquipments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <DialogEquipment
        open={openDialogEquipment}
        equipment={equipment}
        indexEquipment={referenceIndex}
        handleClose={handleClose}
        updateEquipmentForm={updateEquipmentDialog}
      />
      <DialogAccessories
        open={openDialogAccessories}
        accessories={equipmentAccessories}
        keyIndex={referenceIndex}
        handleClose={handleClose}
        updateAccessories={handlUpdateAccessories}
      />
    </>
  );
};

EquipmentDetailDelivery.propTypes = {
  servicesOrdersEquipments: PropTypes.instanceOf(Array).isRequired,
  formModel: PropTypes.instanceOf(Object).isRequired,
  updateEquipment: PropTypes.func.isRequired,
  updateAccessories: PropTypes.func.isRequired,
};

export default EquipmentDetailDelivery;
