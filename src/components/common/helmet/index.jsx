import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const Page = ({ children, title }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </React.Fragment>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: 'Page Title',
};

export default Page;
