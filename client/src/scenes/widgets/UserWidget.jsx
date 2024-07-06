import { useTheme } from "@emotion/react";
import WidgetWrapper from "../../component/WidgetWrapper";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../component/FlexBetween";
import UserImage from "../../component/UserImage";
import { Box, Divider, Typography } from "@mui/material";
import {
  EditOutlined,
  LocationOnOutlined,
  ManageAccountsOutlined,
} from "@mui/icons-material";
import { twitter, linkedIn } from "../../assets";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return null;
  }

  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* FIRST ROW  */}
      <FlexBetween
        sx={{
          gap: "0.5rem",
          pb: "1.1rem",
        }}
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween sx={{ gap: "0.5rem" }}>
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}>{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW  */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: { main } }} />
          <Typography color={medium}>{location}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap="1rem">
          <LocationOnOutlined fontSize="large" sx={{ color: { main } }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />

      {/* THIRD ROW  */}
      <Box p="1rem 0">
        <FlexBetween sx={{ mb: "0.5rem" }}>
          <Typography color={medium}>
            Who&rsquo;s viewed your Profile
          </Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impression of your Post</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      {/* FOUR ROW  */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profile
        </Typography>

        <FlexBetween
          sx={{
            gap: "1rem",
            mb: "0.5rem",
          }}
        >
          <FlexBetween sx={{ gap: "1rem" }}>
            <img src={twitter} alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween
          sx={{
            gap: "1rem",
            mb: "0.5rem",
          }}
        >
          <FlexBetween sx={{ gap: "1rem" }}>
            <img src={linkedIn} alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                LinkedIn
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

UserWidget.propTypes = {
  userId: PropTypes.string,
  picturePath: PropTypes.string,
};

export default UserWidget;
