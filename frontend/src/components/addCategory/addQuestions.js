import React, { useState } from 'react';
import AddSingleQuestion from './addSingleQuestion';
import axios from 'axios';

const AddQuestions = ({ category, getData }) => {
  const { _id, header, icon, questions } = category;
  const defaultQuestion = {
    question:'',
    answer: ''
  };
  const [selectedQuestion,setSelectedQuestion] = useState(defaultQuestion);

  const addQuestion = (data, { resetForm }) => {
    if(!data._id){
      return axios.post(`/api/faqs/addquestion/${_id}`,data).then(()=> {
        getData();
        resetForm();
      })
    }
    else {
      return axios.put(`/api/faqs/updatequestion/${_id}/${data._id}`,data).then(()=> {
        getData();
        resetForm();
      })
    }
  }

  const updateSelectedQuestion = (question) => {
    if(question._id===selectedQuestion._id) setSelectedQuestion(defaultQuestion);
    else setSelectedQuestion(question);
  }

  return (
    <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4">
      <div className="grid grid-cols-2 gap-4 bg-white rounded-lg border-current border-2 p-4 overflow-auto scroll">
        {questions.map((item) => (
          <div
            className={`overflow-ellipsis max-h-12 grid grid-cols-6 p-2 hover:bg-current cursor-pointer hover:text-white rounded-lg ${selectedQuestion._id===item._id && 'bg-current text-white'}`}
            onClick={()=>updateSelectedQuestion(item)}
          >
            <div>
              <i className={`fas fa-clipboard text-sm`}/>
            </div>
            <div className="col-start-2 col-end-7">
              <div>{item.question}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg p-4">
        <AddSingleQuestion initialValues={selectedQuestion} handleSubmit={addQuestion}/>
      </div>
    </div>
  )
}

export default AddQuestions;