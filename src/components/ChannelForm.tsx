 // Render Prop
 import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';


 const BasicForm: React.FC<any> = ({addList}) => (
   <div className="flex flex-col 
                    items-center justify-center"> 
    <h3 className=" font-bold text-lg h-2 mb-8">Add Item </h3>
     <Formik
       initialValues={{ title: '', description: '' }}
      
       onSubmit={(values, actions) => {
         setTimeout(() => {
        actions.resetForm();
        addList(values);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className=" w-full max-w-sm">
           <Field className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-blue-300 rounded mb-2" type="text" name="title" placeholder="Enter Title"/>
           <ErrorMessage name="title" component="div" />
           <Field className="text-sm text-gray-base w-full 
                              mr-3 py-5 px-4 h-2 border 
                              border-blue-300 rounded mb-2" type="text" name="description"  placeholder="Enter description"/>
           <ErrorMessage name="description" component="div" />
           <button  className="bg-blue-500 w-full mt-5 my-20 rounded mb-10" type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default BasicForm;