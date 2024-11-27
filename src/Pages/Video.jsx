// src/VideoDetail.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography, Box, IconButton, Container, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function VideoDetail() {
  const { id } = useParams();
  const video = useSelector((state) => state.videos[id]);
  const dispatch = useDispatch();

  if (!video) {
    return <Typography variant="h6" color="error">Video not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '30px', padding: '20px' }}>
      {/* Back Button */}
      <Link to="/">
        <IconButton 
          variant="outlined" 
          color="primary" 
          style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}
        >
          <ArrowBackIcon />
          <Typography variant="body1" sx={{ marginLeft: '8px' }}>Back to Home</Typography>
        </IconButton>
      </Link>

      {/* Video Player */}
      <Paper sx={{ padding: '20px', borderRadius: '8px', boxShadow: 3 }}>
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
          <video controls style={{ width: '100%', maxHeight: '600px', objectFit: 'contain' }}>
            <source src={URL.createObjectURL(video.file)} type={video.file.type} />
            Your browser does not support the video tag.
          </video>
        </Box>

        {/* Video Title */}
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
          {video.name}
        </Typography>

        {/* Video Description (Optional) */}
        <Typography variant="body1" color="textSecondary" align="center" sx={{ marginBottom: '20px' }}>
          This is the description of the video. You can add more details or info here.
        </Typography>

        {/* Video Controls (Optional for future features like like/dislike, comments, etc.) */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <Button variant="outlined" color="primary" sx={{ marginRight: '10px' }}>Like</Button>
          <Button variant="outlined" color="primary">Share</Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default VideoDetail;
