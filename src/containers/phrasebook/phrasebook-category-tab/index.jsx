import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import { Link as RouterLink } from 'react-router-dom';
import { ROUTES } from 'src/config';
import { useQuery } from 'src/utils/uri';
// import { useDispatch } from 'react-redux';
// import { setCurrentCategoryTab } from 'src/modules/category/actions';

function a11yProps(id) {
  return {
    id: `scrollable-auto-tab-${id}`,
    'aria-controls': `scrollable-auto-tabpanel-${id}`,
  };
}

// eslint-disable-next-line react/display-name
const PhrasebookCategoryTab = React.memo(({ categories }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  let query = useQuery();
  let categoryParams = query.get('category');
  // const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    let category = categories.find((item) => item.id === newValue);
    setValue(newValue);
    console.log('category', category);
  };

  React.useEffect(() => {
    if (Array.isArray(categories) && categories.length > 0) {
      setValue(categories[0].id);
    }
  }, [categories]);

  React.useEffect(() => {
    console.log('categories', categories);
    if (categoryParams && categories.length > 0) {
      setValue(categories.find((item) => item.slug === categoryParams));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {categories.map(({ id, slug, text }) => (
          <CustomTab
            key={id}
            value={id}
            component={RouterLink}
            to={`/${ROUTES.PREFIX_APP + ROUTES.PHRASEBOOK}?category=${slug}`}
            icon={<FolderIcon />}
            label={<Typography component="h5">{text.en}</Typography>}
            {...a11yProps(id)}
          />
        ))}
      </CustomTabs>
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
    // flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default PhrasebookCategoryTab;
