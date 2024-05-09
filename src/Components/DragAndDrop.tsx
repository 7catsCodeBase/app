import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes: string[] = ["MP3", "M4A", "WAV"];

const DragAndDrop= () => {
  const [file, setFile] = useState<File | null>();
  const handleChange = (file: File) => {
    setFile(file);
    console.log(file);
  };
  return (
    <>
    <FileUploader
     handleChange={handleChange}
     name="file" 
     types={fileTypes}
     multiple={true}
      />
     {
        
     }
    </>
    
  );
}

export default DragAndDrop;