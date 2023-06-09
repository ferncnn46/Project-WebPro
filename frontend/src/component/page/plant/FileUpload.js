import React from 'react';
import { useSelector } from 'react-redux';
import Resizer from 'react-image-file-resizer'
import axios from "axios";

const FileUpload = () => {

    const { user } = useSelector((state) => ({ ...state }));

    const handleChangeFile = (e) => {
        console.log(e.target.files)
        const files = e.target.files;
        if (files) {
            for (let i = 0; i < files.length; i++) {
                console.log(files)
                Resizer.imageFileResizer(
                    files[i],
                    720,
                    720,
                    "JPEG",
                    100,
                    0,
                    (uri) => {
                        axios.post('http://localhost:4000/plant/upload-image',{
                            image:uri
                        },{
                            headers: {
                                authtoken: user.token,
                            }
                        }
                    ).then(res=>{
                        console.log(res)
                    }).catch(err=>{
                        console.log(err)
                    })
                    },
                    "base64"
                )
            }
        }
    }


    return (
        <div className="form-group">
            <label for="image">Image:
                <input
                    onChange={handleChangeFile}
                    className="form-control"
                    type="file"
                    hidden
                    multiple
                    name="file"
                    accept="images/*"
                />
            </label>


        </div>
    )
}

export default FileUpload
