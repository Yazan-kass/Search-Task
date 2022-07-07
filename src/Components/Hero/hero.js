import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Label from "../Label/label";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./hero.Styles";
export default function SearchAppBar({ handle_Change }) {
  const handleChange = (e) => {
    handle_Change(e.target.value);
    setCount(3);
  };
  let [count, setCount] = useState(3);

  {
    setTimeout(function () {
      if (count != 0) setCount(count - 1);
    }, 1000);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            GIFS Search
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={handle_Change.value}
              onChange={handleChange}
            />
          </Search>
          <Label counter={count} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
