import React, { useState } from "react";
import clsx from "clsx";
import PriceSlider from "./PriceSlider";
import FilterType from "./FilterType";
import FilterBedroom from "./FilterBedroom";
import FilterBathroom from "./FilterBathroom";
import FilterChecklist from "./FilterChecklist";
import { Drawer, Divider, makeStyles, List } from "@material-ui/core";

// for the drawer
const useStyles = makeStyles({
  root: {
    backgroundColor: "#c1b9b9",
  },
  list: {
    width: 380,
  },
  fullList: {
    width: "auto",
  }
});

export default function Filters(props) {
  const classes = useStyles();

  // for the drawer
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // for  <Filtertype />
  const [type, setType] = useState("All");

  // for <FilterBedroom />
  const [bedrooms, setBedrooms] = useState("All");

  // for <FilterBathroom />
  const [bathrooms, setBathrooms] = useState("All");

  // for <PriceSlider />
  const [minPrice, setMinPrice] = useState(800);
  const [maxPrice, setMaxPrice] = useState(3000);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  // insides of the drawer
  const list = (anchor) => (
    (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom",
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, true)}
        onKeyDown={toggleDrawer(anchor, true)}
      >
        <List>
          <PriceSlider
            changeMaxPrice={(max) => setMaxPrice(max)}
            changeMinPrice={(min) => setMinPrice(min)}
          />
          <FilterType changeType={(type) => setType(type)} />
          <FilterBedroom changeBedroom={(bedrooms) => setBedrooms(bedrooms)} />
          <FilterBathroom
            changeBathroom={(bathrooms) => setBathrooms(bathrooms)}
          />
        </List>
        <Divider />
        <List>
          <FilterChecklist />
        </List>
        <div className="filter-search-btn-container">
          <button
            className="button primary-btn filter-search-btn"
            onClick={() => {
              props.filteredProperties(type, bedrooms, bathrooms, minPrice, maxPrice);
            }}
          >
            Search
          </button>
        </div>
      </div>
    )
  );

  return (
    <div>
      <button
        className="button secondary-btn"
        onClick={toggleDrawer("left", true)}
      >
        Filters
        </button>

      <Drawer
        style={{ width: "220px" }}
        variant="temporary"
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}

      </Drawer>
    </div>
  );
}
