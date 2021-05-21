import React, { useEffect, useState } from 'react';
import AddCategory from '../components/addCategory/addCategory';
import AddQuestions from '../components/addCategory/addQuestions';
import Modal from '../components/common/Modal';
import axios from 'axios';

const AddCategoryPage = () => {

  const [selectedCategory, setSelectedCategory ] = useState(null);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [faqData,setFaqData] = useState([]);

  const getFaqData = () => {
    axios.get('/api/faqs')
      .then((res) => {
        console.log(res.data);
        setFaqData(res.data);
      })
  }
  
  useEffect(() => {
    getFaqData();
  },[])

  const defaultCategory = {
    _id: '',
    header: '',
    icon: '',
    questions: []
  }

  const handleAddCategory = (data,{ resetForm }) => {
    axios.post('/api/faqs',data)
      .then((res) => {
        setAddCategoryModal(!addCategoryModal);
        getFaqData();
        resetForm();
      })
  }

  return (
    <div className="w-10/12 z-10 m-auto">
      <div className=" my-4 bg-current bg-opacity-90 flex items-center text-white h-56 mx-auto  font-bold">
				<h1 className="m-auto p-auto text-center text-6xl font-bold">
					Add FAQ Categories
				</h1>
			</div>
      <div className="grid grid-cols-4 gap-4">
        {faqData.map((item) => (
          <div className="rounded-lg p-6 mt-4 bg-white cursor-pointer hover:bg-current hover:text-white" onClick={()=>setSelectedCategory(item)}>
            <div className="text-lg"><i className={`fas fa-${item.icon}`}/></div>
            <div>{item.header}</div>
          </div>
        ))}
        <div className="rounded-lg p-6 mt-4 bg-white cursor-pointer hover:bg-current hover:text-white" onClick={()=>setAddCategoryModal(!addCategoryModal)}>
          <div className="text-lg"><i className={`fas fa-plus`}/></div>
          <div>Add Category</div>
        </div>
        <Modal
          isOpen={!!selectedCategory}
          header={`Category - ${selectedCategory && selectedCategory.header}`}
          toggle={() => setSelectedCategory(null)}
        >
          <AddQuestions category={selectedCategory?faqData.find(i=>i._id===selectedCategory._id):defaultCategory} getData={getFaqData}/>
        </Modal>
        <Modal
          isOpen={addCategoryModal}
          header="Add Category"
          toggle={() => setAddCategoryModal(!addCategoryModal)}
        >
          <AddCategory handleSubmit={handleAddCategory}/>
        </Modal>
      </div>
    </div>
  )
}

export default AddCategoryPage;