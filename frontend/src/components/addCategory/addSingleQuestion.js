import React, { useEffect, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../common/Button';
import TextInput from "../common/TextInput";

const AddSingleQuestion = ({ initialValues, handleSubmit }) => {
  return (
    <div>
      <div className="text-center mt-6">
        <div className="font-bold text-2xl">{(initialValues && initialValues.id)?'Update Question':'Add Question'}</div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={props => Yup.lazy(values => {
          const { question, answer } = values;
          return Yup.object().shape({
            question: Yup.string().required(),
            answer: Yup.string().required()
          })
        })}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form>
          <TextInput className="mt-6" name="question" placeholder="Question"/>
          <TextInput className="mt-6" name="answer" placeholder="Answer"/>
          <div className="text-center mt-6">
            <Button type="submit">{(initialValues && initialValues.id)?'Update':'Add'}</Button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default AddSingleQuestion;