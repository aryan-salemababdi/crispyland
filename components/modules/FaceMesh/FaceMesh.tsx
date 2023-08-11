import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import '@tensorflow/tfjs-backend-webgl';
import * as tf from "@tensorflow/tfjs";
import * as blazeface from "@tensorflow-models/blazeface";
import Webcam from "react-webcam";
import { useMediaQuery,Typography } from "@mui/material";

interface FacemeshType {

  onSubmitFacemesh: (authFacemesh:boolean) => void;
  auth:{
    name:string;
    lastName:string;
    email:string;
    password:string;
  }

}



const FaceMesh:NextPage<FacemeshType> = ({onSubmitFacemesh,auth}) => {

  
  const [authFacemesh,setAuthFacemesh] = useState<boolean>(false)
  const isMdScreen = useMediaQuery("(min-width: 960px)");
  const widthValue = isMdScreen ? 600 : 200;
  const webcamRef = useRef<any>(null);
  const canvasRef = useRef<any>(null);

    const sendDataHandller = async () =>{
      const res = await fetch("/api/auth/signup",{
        method:"POST",
        body:JSON.stringify(auth),
        headers : {"Content-Type": "application/json"},
      })
      const data = await res.json();
    };

  const runFaceDetection = async () => {
    const net = await blazeface.load();

    setInterval(() => {
      detect(net);
    }, 1000);
  };

  const detect = async (net: blazeface.BlazeFaceModel) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        const predictions:any = await net.estimateFaces(video) ;
        if (predictions[0].landmarks.length > 5) {

          setAuthFacemesh(true);
          sendDataHandller();
          onSubmitFacemesh(authFacemesh);
        } else {
          setAuthFacemesh(false);
          onSubmitFacemesh(authFacemesh);
        }
      }
    }
  };

  useEffect(() => {
    runFaceDetection();
  },);


  return (
    <div style={{ height: "100vh" }}>
      <Typography 
      fontWeight="bold" 
      variant="h5"
      textAlign="center"
      >
         برای تشخیص چهره لطفا چند لحظه صبر کنید
      </Typography>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
          width: widthValue,
          height: 200,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 10,
          width: widthValue,
          height: 200,
        }}
      />
    </div>
  );
};

export default FaceMesh;
