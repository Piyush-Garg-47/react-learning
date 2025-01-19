import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name , control , label , defaultValue=""}) {
  return (
   <div className='w-full'>
    {label && <label className ='inline-block mb-1 pl-1 '>{label}</label>}
    <Controller
     name ={name || "content"}
     control={control} 
     render={({field : {onChange}}) => (
        initialValue = {defaultValue},
        <Editor
        init={{
               initialValue : defaultValue,
               height :500 , 
               menubar :true , 
               plugins: [
                "advlist", 
                "autolink", 
                "lists", 
                "link", 
                "image", 
                "charmap", 
                "preview", 
                "anchor",
                "searchreplace", 
                "visualblocks", 
                "code", 
                "fullscreen", 
                "insertdatetime", 
                "media", 
                "table", 
                "help", 
                "wordcount"
              ],
              
              toolbar: [
                "undo redo | blocks | bold italic underline | alignleft aligncenter alignright alignjustify",
                "bullist numlist outdent indent | link image media | preview fullscreen | code | help"
              ],
              content_style :"boady {font-family:halvetica , arial , sans-serif  ; font-size:14px "
           }
        }
        onEditorChange={onchange}
        />
      )}
    />
   </div>
  )
}
