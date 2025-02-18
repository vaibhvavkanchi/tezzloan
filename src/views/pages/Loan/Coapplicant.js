import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  LinearProgress,
  Radio,
  Slider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BiEdit } from "react-icons/bi";

const StyledBox = styled(Box)(({ theme }) => ({
  paddingBottom: "40px",
  "& .headTitle1": {
    textAlign: "center",
    fontSize: "16px",
    color: theme.palette.primary.main,
    fontFamily: "Open Sans",
  },
  "& .NumberField": {
    width: "100%",
    height: "48px",
    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    borderRadius: "6px",
    "& .MuiInputBase-root": {
      borderColor: "transparent",
      "&:before": {
        borderBottom: "1px solid transparent !important",
      },
    },
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  "& .radioField": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& .list": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #B3B3B3",
    borderRadius: "8px",
    marginBottom: "3px",
    width: "100%",
    backgroundColor: "white",
  },
  "& .option-txt": {
    fontSize: "16px",
    color: "#171D24",
    fontFamily: "Open Sans",
    marginBottom: "15px",
  },

  "& .form-field": {
    background: "white",
    marginTop: "23px",
    marginBottom: "25px",
    "& .MuiOutlinedInput-input": {
      textAlign: "center",
    },
    "& .MuiOutlinedInput-root": {
      maxWidth: "290px !important",
      width: "100% !important",
      fontSize: "36px",
      fontWeight: 700,
      color: theme.palette.background.dark,
    },
  },
  "& .button": {
    backgroundColor: theme.palette.secondary.main,
    textTransform: "capitalize",
    height: "55px",
    borderRadius: "30px",
    padding: "20px 65px 20px 65px",
  },
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[200],
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

const CustomCheckbox = styled("label")(({ theme }) => ({
  display: "flex",
  position: "relative",
  cursor: "pointer",
  fontSize: "18px",

  "& input": {
    position: "absolute",
    opacity: 0,
    cursor: "pointer",
  },

  "& .checkmark": {
    position: "relative",
    width: "20px",
    height: "20px",
    border: "2px solid black",
    display: "inline-block",
    borderRadius: "4px",
  },

  "& input:checked + .checkmark::after": {
    content: '""',
    position: "absolute",
    left: "5px",
    top: "1px",
    width: "6px",
    height: "12px",
    border: "solid black",
    borderWidth: "0 2px 2px 0",
    transform: "rotate(45deg)",
  },
}));

const IOSSlider = styled(Slider)(({ theme }) => ({
  color: "#007bff",
  height: 5,
  padding: "15px 0",
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "1px solid #9ABCFF",
    boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.1)",
    "&:focus, &:hover, &.Mui-active": {
      boxShadow: "0px 0px 3px 1px rgba(0, 0, 0, 0.1)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
      },
    },
    "&:before": {
      boxShadow:
        "0px 0px 1px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 1px 0px rgba(0,0,0,0.12)",
    },
  },
  // "& .MuiSlider-valueLabel": {
  //   fontSize: 12,
  //   fontWeight: "normal",
  //   top: -6,
  //   backgroundColor: "unset",
  //   color: theme.palette.text.primary,
  //   "&::before": {
  //     display: "none",
  //   },
  //   "& *": {
  //     background: "#52af77",
  //     color: "#000",
  //     ...theme.applyStyles("dark", {
  //       color: "#fff",
  //     }),
  //   },
  // },
  "& .MuiSlider-track": {
    border: "none",
    height: 5,
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    boxShadow: "inset 0px 0px 4px -2px #000",
    backgroundColor: "#d0d0d0",
  },
  ...theme.applyStyles("dark", {
    color: "#0a84ff",
  }),
  "& .MuiSlider-markLabel": {
    fontFamily: "Open Sans",
  },
}));

const Coapplicant = ({ handleNext, formData, setFormData }) => {
  const [document, setDocument] = useState("");

  const marks = [
    {
      value: 250000,
      label: "₹2,50,000",
    },
    { value: 5000000, label: "₹50,00,000 +" },
  ];
  function valuetext(value) {
    if (value >= 10000000) {
      return `${value}`; // Convert to crores
    }
    return `${value} `; // Convert to lakhs
  }
  const handleChange = (Name) => {
    setDocument(Name);
    setFormData((pre) => ({
      ...pre,
      coapplicant: Name === "Yes" ? true : false,
    }));
    // handleNext();
  };
  const [selectedRelation, setSelectedRelation] = useState([]);

  const handleChange1 = (relation) => {
    setSelectedRelation(
      (prevSelected) =>
        prevSelected.includes(relation)
          ? prevSelected.filter((item) => item !== relation) // Unselect if already selected
          : [...prevSelected, relation] // Select if not selected
    );
  };
  const relations = ["Husband", "Wife", "Father", "Mother", "Brother", "Other"];

  const TextFieldWithRadio = ({ Name }) => (
    <div
      className={`NumberField ${
        document === Name ? "radioField text-white" : "bg-white"
      } max-w-[603px]  cursor-pointer`}
      onClick={() => handleChange(Name)}
    >
      <FormControlLabel
        value="radio-option"
        control={
          <Radio
            checked={document === Name}
            onChange={() => handleChange(Name)}
            className={`p-0 ml-4 mr-12 ${
              document === Name ? "bg-white" : "bg-white"
            }`}
            style={{ padding: "0px", marginLeft: "16px" }}
          />
        }
        label=""
        className="mr-2"
      />
      {Name}
    </div>
  );
  return (
    <StyledBox>
      <Box
        className="flex flex-col items-center w-full"
        sx={{ width: "calc(100% - 200px)" }}
      >
        <BorderLinearProgress
          sx={{ maxWidth: "250px", width: "100%", mt: "72px" }}
          variant="determinate"
          value={45}
        />
        <Typography className="headTitle1 mt-4 lg:mt-10 sm:mt-4 mb-3 lg:mb-11 md:mb-6 sm:mb-4  uppercase">
          Home Loan
        </Typography>
        <Typography variant="h1" className="mt-0 lg:mt-4">
          Have a Co-applicant?
        </Typography>
        <Box className=" max-w-[700px] w-full p-3 md:p-0 mt-3 md:mt-10 flex flex-col items-center gap-[28px]">
          <TextFieldWithRadio Name={"Yes"} />

          {formData?.coapplicant && (
            <ul style={{ width: "100%" }} className=" max-w-[603px]">
              <Typography className="option-txt mt-[25px]">
                Relation of co-applicant
              </Typography>
              <li className="list" style={{ color: "gray" }}>
                Choose Relation
              </li>
              {relations.map((relation) => (
                <li
                  className="list cursor-pointer"
                  style={{
                    color: `${
                      selectedRelation.includes(relation) ? "black" : "grey"
                    }`,
                  }}
                  onClick={() => handleChange1(relation)}
                  key={relation}
                >
                  {relation}{" "}
                  <CustomCheckbox>
                    <input
                      type="checkbox"
                      checked={selectedRelation.includes(relation)}
                      onChange={() => handleChange1(relation)}
                    />
                    <span className="checkmark"></span>
                  </CustomCheckbox>
                </li>
              ))}
              <Typography className="option-txt mt-[25px]">
                Monthly income of All Co- Applicants
              </Typography>
            </ul>
          )}
          {formData?.coapplicant && (
            <>
              <TextField
                className="form-field"
                variant="outlined"
                value={formData?.manualIncomeAmount}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^[1-9]\d{0,9}$/.test(inputValue) || inputValue === "") {
                    const numericValue =
                      inputValue === "" ? 0 : parseInt(inputValue, 10);
                    if (numericValue >= 250000 && numericValue <= 5000000) {
                      setFormData((pre) => ({
                        ...pre,
                        manualIncomeAmount: inputValue,
                      }));
                    } else if (numericValue < 250000) {
                      setFormData((pre) => ({
                        ...pre,
                        manualIncomeAmount: "250000",
                      }));
                    } else if (numericValue > 5000000) {
                      setFormData((pre) => ({
                        ...pre,
                        manualIncomeAmount: "5000000",
                      }));
                    }
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BiEdit style={{ width: "19px", height: "19px" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <IOSSlider
                sx={{ maxWidth: "410px !important", width: "100% !important" }}
                value={formData?.manualIncomeAmount}
                onChange={handleChange1}
                aria-labelledby="slider"
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                valueLabelFormat={valuetext}
                min={250000}
                max={5000000}
                step={1}
                marks={marks}
              />
            </>
          )}
          {formData?.coapplicant && (
            <>
              <Typography className="option-txt mt-[25px] max-w-[603px] w-full">
                Monthly EMI of All Co- Applicants
              </Typography>
              <TextField
                className="form-field"
                variant="outlined"
                value={formData?.manualIncomeAmount}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  if (/^[1-9]\d{0,9}$/.test(inputValue) || inputValue === "") {
                    const numericValue =
                      inputValue === "" ? 0 : parseInt(inputValue, 10);
                    if (numericValue >= 250000 && numericValue <= 5000000) {
                      setFormData((pre) => ({
                        ...pre,
                        manualIncomeAmount: inputValue,
                      }));
                    } else if (numericValue < 250000) {
                      setFormData((pre) => ({
                        ...pre,
                        manualIncomeAmount: "250000",
                      }));
                    } else if (numericValue > 5000000) {
                      setFormData((pre) => ({
                        ...pre,
                        manualIncomeAmount: "5000000",
                      }));
                    }
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <BiEdit style={{ width: "19px", height: "19px" }} />
                    </InputAdornment>
                  ),
                }}
              />

              <IOSSlider
                sx={{ maxWidth: "410px !important", width: "100% !important" }}
                value={formData?.manualIncomeAmount}
                onChange={handleChange1}
                aria-labelledby="slider"
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                valueLabelFormat={valuetext}
                min={250000}
                max={5000000}
                step={1}
                marks={marks}
              />
            </>
          )}
          <TextFieldWithRadio Name={"No"} />
          <Button
            sx={{ mt: "60px" }}
            onClick={() => handleNext()}
            className="button"
            variant="contained"
          >
            View Summary
          </Button>
        </Box>
      </Box>
    </StyledBox>
  );
};

export default Coapplicant;
