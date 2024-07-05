import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import uploadFileProgress from "../../firebase/uploadFileProgress";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import { Box, Typography } from "@mui/material";
import { EditOutlined } from "@mui/icons-material";

const Progress = ({ file }) => {
  const [progress, setProgress] = useState(0);
  const [imageURL, setImageURL] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const fileName = file[0].name;

  const uploadImage = async () => {
    const imageName = uuidv4() + "." + file[0].name.split(".").pop();
    try {
      const url = await uploadFileProgress(
        file,
        `user/${user}`,
        imageName,
        setProgress
      );

      dispatch(setImageURL({ url }));
    } catch (error) {
      console.log(error);
    }
  };
  // setImageURL(URL.createObjectURL(file));
  uploadImage();

  return (
    imageURL && (
      <>
        <img src={imageURL} alt="gallery" loading="lazy" />
        <Box>
          {progress < 100 ? (
            <CircularProgressWithLabel value={progress} />
          ) : (
            <Box>
              <Typography>{fileName}</Typography>
              <EditOutlined />
            </Box>
          )}
        </Box>
      </>
    )
  );
};

Progress.propTypes = {
  file: PropTypes.array,
};

export default Progress;
