import * as React from "react";
import "./App.css";
import styled from "@emotion/styled";

import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/locale/fr";
import "dayjs/locale/de";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";

const locales = ["ko", "fr", "de"];

function App() {
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const Box = styled.div`
    width: 500px;
    height: 300px;
    margin: 60px auto;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 10px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
  `;

  const Box1 = styled.div`
    width: 500px;
    height: 300px;
    margin: 60px auto;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 10px;
    text-align: center;
  `;

  const [locale, setLocale] = React.useState("fr");
  const [datePickerValue, setDatePickerValue] = React.useState(dayjs());
  const [timePickerValue, setTimePickerValue] = React.useState(dayjs());
  const selectLocale = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <>
      <Box className="date-box">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>

      <Box1 className="date-box">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
          <ToggleButtonGroup
            value={locale}
            exclusive
            sx={{ mb: 2, display: "block" }}
          >
            {locales.map((localeItem) => (
              <ToggleButton
                key={localeItem}
                value={localeItem}
                onClick={() => selectLocale(localeItem)}
              >
                {localeItem}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <DatePicker
            value={datePickerValue}
            onChange={(newValue) => {
              setDatePickerValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            value={timePickerValue}
            onChange={(newValue) => {
              setTimePickerValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box1>
    </>
  );
}

export default App;
