import React from 'react';
import PropTypes from 'prop-types';


const PagePrint = (props) => {
  const { children } = props;
  return (
    <div className={'page'}>
      <div className={'page-content'}>
        {children}
      </div>
    </div>
  );
};

PagePrint.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default PagePrint;
