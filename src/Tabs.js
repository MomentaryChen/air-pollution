import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function Container() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let width = window.innerWidth * 0.8;
  let height = window.innerHeight * 0.8;

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Air Map" {...a11yProps(0)} />
        <Tab label="Air Compare" {...a11yProps(1)} />
        <Tab label="Air Analyze" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <iframe title = "1"
                width = {width}
                height = {height}
                src = "https://app.powerbi.com/view?r=eyJrIjoiOTk0Mzg5OTMtZGQ0Zi00NWI4LTk4N2YtMTEyMDRhYjQzMTQyIiwidCI6IjE2Y2E3MzdkLWFhYmUtNGQ1MC1hYzU2LTE2ODQ3MDUwNzEyYyIsImMiOjEwfQ%3D%3D"
                allowFullScreen = {
                  true
                }/>
        <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <iframe title = "2"
                width = {width}
                height = {height}
                src = "https://app.powerbi.com/view?r=eyJrIjoiYTI0YzE4MTUtZmU3OC00ODY1LWJmYTYtZTNlODlhMmU5YjIxIiwidCI6IjE2Y2E3MzdkLWFhYmUtNGQ1MC1hYzU2LTE2ODQ3MDUwNzEyYyIsImMiOjEwfQ%3D%3D"
                allowFullScreen = {
                  true
                }/>
        </TabPanel>
      <TabPanel value={value} index={2}>
        <iframe title = "3"
              width = {width}
              height = {height}
              src = "https://app.powerbi.com/view?r=eyJrIjoiN2ZkNTJhMDAtOWFlZC00OWNhLWIzNTEtM2Y1NGViZDk1N2NhIiwidCI6IjE2Y2E3MzdkLWFhYmUtNGQ1MC1hYzU2LTE2ODQ3MDUwNzEyYyIsImMiOjEwfQ%3D%3D"
              allowFullScreen = {
                true
              }/>
      </TabPanel>
    </div>
  );
}
