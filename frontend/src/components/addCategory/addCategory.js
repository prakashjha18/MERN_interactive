import { Form, Formik } from 'formik';
import React from 'react';
import Button from '../common/Button';
import IconSelector from '../common/IconSelector';
import * as Yup from 'yup';
import TextInput from '../common/TextInput';

const AddCategory = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={{
        _id: '',
        header: '',
        icon: ''
      }}
      validationSchema={props => Yup.lazy(values => {
        const { header, id } = values;
        return Yup.object().shape({
          header: Yup.string().required(),
          icon: Yup.string().required()
        })
      })}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4">
          <div className="text-center bg-white rounded-lg p-4 border-current border-2">
            <div className="font-bold text-2xl">Category</div>
            <TextInput className="mt-6" name="header" placeholder="Category"/>
          </div>
          <div className="bg-white rounded-lg p-4 h-64 overflow-y-auto border-current border-2 scroll">
            <IconSelector
              name="icon"
            />
          </div>
        </div>
        <div className="text-center bg-gray-100">
          <div className="py-4">
            <Button type="submit">Add category</Button></div>
          </div>
      </Form>
    </Formik>
  )
}

export default AddCategory;