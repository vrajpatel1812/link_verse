import { Box } from "@mui/material";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

const WidgetWrapperBox = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius: "0.75rem",
}));

const WidgetWrapper = ({ children, sx, ...props }) => {
  return (
    <WidgetWrapperBox sx={sx} {...props}>
      {children}
    </WidgetWrapperBox>
  );
};

WidgetWrapper.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default WidgetWrapper;
