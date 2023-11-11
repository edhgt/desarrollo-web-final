import React, { useState } from 'react';
import axios from '../utils/api';
import { useAuth } from "../context/AuthContext";

const PhotoUploader = ({ userId }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useAuth();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadPhoto = async () => {
    try {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      // Cambia la URL a la ruta de tu servidor backend
      await axios.post(`/api/photos/upload/${user.userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Refresca los datos después de la carga
      queryClient.refetchQueries('photos');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const { data: photos } = ('photos', async () => {
    // Obtén las fotos del usuario autenticado
    const response = await axios.get(`http://localhost:5000/api/photos/${userId}`);
    return response.data;
  });

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadPhoto} disabled={!selectedFile}>
        Upload Photo
      </button>

      <div>
        <h2>Your Photos</h2>
        {photos && photos.map((photo) => (
          <div key={photo._id}>
            <img src={photo.originalUrl} alt={`User Photo`} style={{ maxWidth: '300px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoUploader;
