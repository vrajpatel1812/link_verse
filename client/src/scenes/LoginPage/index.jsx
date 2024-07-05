import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNoneMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Link Verse
        </Typography>
      </Box>

      <Box
        width={isNoneMobileScreens ? "50%" : "92%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Link Verse, the social media platform that links the world.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
