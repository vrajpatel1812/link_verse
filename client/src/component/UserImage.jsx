import PropTypes from "prop-types";
import { Box } from "@mui/material";
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        alt="user"
        width={size}
        height={size}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

UserImage.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
};

export default UserImage;
