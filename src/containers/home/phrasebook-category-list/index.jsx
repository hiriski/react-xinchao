import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CategoryItem from 'src/containers/category/category-item';
import SectionTitle from 'src/components/section-title';
import Slider from 'react-slick';

const HomeCategoryList = ({ categories }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isBigScreen ? 5 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
  };

  return (
    <div className={classes.root}>
      <SectionTitle title="Phrasebook Category" />
      <Slider className={classes.sliderContainer} {...settings}>
        {categories.map((category) => (
          <CategoryItem
            containerStyle={classes.item}
            key={category.id}
            category={category}
          />
        ))}
      </Slider>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(0, 0, 2, 0),
    marginTop: theme.spacing(2),
  },
  sliderContainer: {},
  item: {
    marginRight: theme.spacing(1),
  },
}));

HomeCategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default HomeCategoryList;
