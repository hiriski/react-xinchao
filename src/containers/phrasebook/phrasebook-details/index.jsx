import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const PhrasebookDetails = React.memo(({ phrasebook }) => {
  return <div>{'Content here...'}</div>;
});

PhrasebookDetails.propTypes = {
  phrasebook: PropTypes.object.isRequired,
};

export default PhrasebookDetails;
