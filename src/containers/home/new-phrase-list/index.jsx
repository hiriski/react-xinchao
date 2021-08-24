import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SectionTitle from 'src/components/section-title';
import Slider from 'react-slick';
import NewPhraseItem from '../new-phrase-item';

// eslint-disable-next-line react/display-name
const NewPhraseList = React.memo(({ phrases }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: isBigScreen ? 3 : 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    centerMode: false,
  };

  return (
    <div className={classes.root}>
      <SectionTitle title="New Phrases" />
      <Slider className={classes.sliderContainer} {...settings}>
        {Array.isArray(phrases) && phrases.length > 0
          ? phrases.map((phrase) => (
              <NewPhraseItem
                containerStyle={classes.item}
                key={phrase.id}
                phrase={phrase}
              />
            ))
          : null}
      </Slider>
    </div>
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: theme.spacing(0, 0, 12, 0),
    position: 'relative',
  },
  sliderContainer: {},
  item: {
    marginRight: theme.spacing(1),
  },
}));

NewPhraseList.propTypes = {
  phrases: PropTypes.array.isRequired,
};

export default NewPhraseList;
