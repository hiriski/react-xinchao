import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

// eslint-disable-next-line react/display-name
const PhraseDetail = React.memo(({ phrase }) => {
  const { text, created_by } = phrase;
  return (
    <div>
      <li>{text?.vi}</li>
      <li>{text?.en}</li>
      <li>{text?.id}</li>
      <li>Note: {text?.note}</li>
      <Box>
        <p>Created by</p>
        <li>{created_by?.name}</li>
      </Box>
    </div>
  );
});

PhraseDetail.propTypes = {
  phrase: PropTypes.object.isRequired,
};

export default PhraseDetail;
