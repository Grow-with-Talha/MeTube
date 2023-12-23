import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setselectedCategory }) => { // Use curly braces for destructuring props
  const handleCategoryChange = (newCategory) => {
    setselectedCategory(newCategory);
  };
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          onClick={() => {
            handleCategoryChange(category.name);
          }}
          key={category.name}
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "white",
          }}
          className="category-btn"
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
