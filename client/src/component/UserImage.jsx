import PropTypes from "prop-types";
import { Box } from "@mui/material";
const UserImage = ({ image, size = "60px" }) => {
  const path = `../../../server/public/assests/${image}`;
  return (
    <Box width={size} height={size}>
      <img
        src={path}
        alt="user"
        width={size}
        height={size}
        style={{ objectFit: "cover", borderRadius: "50%" }}
      />
    </Box>
  );
};

UserImage.propTypes = {
  image: PropTypes.string,
  size: PropTypes.string,
};

export default UserImage;
