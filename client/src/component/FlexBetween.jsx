import { Box } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

const FlexBetweenBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const FlexBetween = ({ children, sx, ...props }) => {
  return (
    <FlexBetweenBox sx={sx} {...props}>
      {children}
    </FlexBetweenBox>
  );
};

FlexBetween.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default FlexBetween;
