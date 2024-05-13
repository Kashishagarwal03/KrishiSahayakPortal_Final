import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import CarouselComponent from './CarousalComp';
import About from './AboutUs';
import Policy from './Policies';
import AgriNews from './News';
import { POLICIES } from './PolicyList';
import WeekContainer from './Weather';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'

function Main() {
  const [processedImage, setProcessedImage] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);

  // ML processing function
  const processImage = (imageFile) => {
    // Placeholder for your ML processing logic
    // This could be a call to an API, a local ML model, or any other processing mechanism
    // Return a Promise with the processed image
    return new Promise((resolve, reject) => {
      // Placeholder for processing logic
      // For example, just returning the same image for demonstration purposes
      resolve(imageFile);
    });
  };

  // Handle image upload
  const handleImageUpload = (imageFile) => {
    setUploadedFile(imageFile);
  };

  // Process uploaded image when it changes
  useEffect(() => {
    if (uploadedFile) {
      processImage(uploadedFile)
        .then((processedImage) => setProcessedImage(processedImage))
        .catch((error) => console.error('Error processing image:', error));
    }
  }, [uploadedFile]);

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={HomePage} />
       <Route exact path="/contactus" component={Contact} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/policies" component={() => <Policy policy={POLICIES} />} />
        <Route exact path="/news" component={AgriNews} />
        <Route exact path="/Week" component={WeekContainer} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );

  function ImageDropzone() {
  const [processedImage, setProcessedImage] = useState(null);
  const [predictions, setPredictions] = useState(null);
  const classNames = ['Blight', 'Common Rust', 'Gray Leaf Spot', 'Healthy'];
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      const file = acceptedFiles[0];
      const formData = new FormData();
      console.log(file);
      formData.append('file', file);

      try {
        const response = await axios.post('http://127.0.0.1:5000/process_image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setPredictions(response.data[0]);
        console.log(response.data)
      } catch (error) {
        console.error('Error processing image:', error);
      }
    },
  });
  return (
    <div className="container-border">
      <div {...getRootProps()} className="center" style={{ fontSize: 20, height: 200 }}>
        <strong> Select or Drag and Drop Your Image Here </strong>
        <input {...getInputProps()} />
        {uploadedFile && <p>Uploaded: {uploadedFile.name}</p>}
        {predictions && (
          <div className="predictions-container">
            <p>Predictions:</p>
            <ul>
              {predictions.map((value, index) => (
                <li key={index}>
                  {classNames[index]}: {value.toFixed(2)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
  
  }

  // function RenderCrop({ onClick }) {
  //   return (
  //     <div className="container border">
  //       <div className="center" style={{ fontSize: 20 }}>
  //         <strong> Select Your State </strong>
  //       </div>
  //       <Link to="/Week">
  //         <img
  //           src={process.env.PUBLIC_URL + '/images/india.jpg'}
  //           className="center"
  //           width="auto"
  //           height="600px"
  //           alt="india map"
  //         />
  //       </Link>
  //     </div>
  //   );
  // }

  function HomePage() {
    return (
      <>
        <CarouselComponent />
        <ImageDropzone />
        {processedImage && <img src={processedImage} alt="Processed Image" />}
      </>
    );
  }
}

export default Main;
