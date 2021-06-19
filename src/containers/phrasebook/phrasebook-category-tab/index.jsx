import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FolderIcon from '@material-ui/icons/Folder';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { ROUTES } from 'src/config';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  console.log(props);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(id) {
  return {
    id: `scrollable-auto-tab-${id}`,
    'aria-controls': `scrollable-auto-tabpanel-${id}`,
  };
}

// eslint-disable-next-line react/display-name
const PhrasebookCategoryTab = React.memo(({ categories }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    console.log(event.target.dataset);
    setValue(newValue);
    // navigate(ROUTES.PHRASEBOOK_LIST + '/' + slug);
  };

  return (
    <div className={classes.root}>
      <CustomTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {categories.map(({ id, slug, text }, index) => (
          <CustomTab
            component={RouterLink}
            to={ROUTES.PREFIX + ROUTES.PHRASEBOOK_LIST + '/' + slug}
            icon={<FolderIcon />}
            label={<Typography component="h5">{text.en}</Typography>}
            key={id}
            {...a11yProps(id)}
          />
        ))}
      </CustomTabs>

      {/* {categories.map(({ id, text }, index) => (
        <TabPanel key={id} value={value} index={index}>
          {text.en}
        </TabPanel>
      ))} */}
    </div>
  );
});

PhrasebookCategoryTab.propTypes = {
  categories: PropTypes.array.isRequired,
};

const CustomTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
    minHeight: 44,
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const CustomTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 40,
    minHeight: 40,
    paddingTop: 8,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(4),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
    // '& .MuiTab-labelIcon': {
    // },
    '& .MuiTab-wrapper': {
      display: 'flex',
      flexDirection: 'row',
      alingItems: 'center',
      '& svg': {
        marginRight: theme.spacing(1),
        marginBottom: '0 !important',
      },
      '& h5': {
        fontSize: 14,
      },
    },
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default PhrasebookCategoryTab;
