import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form } from "antd";
import axios from "axios";
import "../styles/table.css";
import MyForm from "./Form";


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const UsersTable = () => {
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEdit, setModalEdit]=useState(false);
  const [modalRemove, setModalRemove]=useState(false);
  const [user, setUser] = useState({
    Id: "",
    name: "",
    Dean_user_id: "",
    course_id: "",
    group_max_count: "",
    stutent_max_count: "",
    description: "",
    license_start_date: "",
    license_finish_date: "",
    region_id: "",
    tuman_id: "",
    max_filial_count: "",
    image: "",
    status: "",
    createdAt: "",
    updatedAt: "",
    deletedAt: "",
    is_deleted: "",
    created_by: "",
    update_by: "",
    deanUserId: "",
    courseId: "",
    groupMaxCount: "",
    stutentMaxCount: "",
    licenseStartDate: "",
    licenseFinishDate: "",
    regionId: "",
    tumanId: "",
    maxFilialCount: "",
    isDeleted: "",
    createdBy: "",
    updateBy: "",
  });

  const isOpenedModal = () => {
    setModalInsertar(!modalInsertar);
  };
    const openCloseModalEdit=()=>{
    setModalEdit(!modalEdit);
  }

  const openCloseModalDelete=()=>{
    setModalRemove(!modalRemove);
  }


  const columns = [
    { title: "Id", dataIndex: "id", key: "id" },
    { title: "name", dataIndex: "name", key: "name" },
    { title: "Dean user id",dataIndex: "dean_user_id",key: "dean_user_id"},
    { title: "course_id", dataIndex: "course_id", key: "course_id" },
    { title: "group_max_count", dataIndex: "group_max_count", key: "group_max_count" },
    { title: "stutent_max_count", dataIndex: "stutent_max_count", key: "stutent_max_count" },
    { title: "description", dataIndex: "description", key: "description" },
    { title: "license_start_date", dataIndex: "license_start_date", key: "license_start_date" },
    { title: "license_finish_date", dataIndex: "nalicense_finish_dateme", key: "nalicense_finish_dateme" },
    { title: "region_id", dataIndex: "region_id", key: "region_id" },
    { title: "tuman_id", dataIndex: "tuman_id", key: "tuman_id" },
    { title: "max_filial_count", dataIndex: "max_filial_count", key: "max_filial_count" },
    { title: "image", dataIndex: "image", key: "image" },
    { title: "status", dataIndex: "status", key: "status" },
    { title: "createdAt", dataIndex: "createdAt", key: "createdAt" },
    { title: "updatedAt", dataIndex: "updatedAt", key: "updatedAt" },
    { title: "deletedAt", dataIndex: "deletedAt", key: "deletedAt" },
    { title: "is_deleted", dataIndex: "is_deleted", key: "is_deleted" },
    { title: "created_by", dataIndex: "created_by", key: "created_by" },
    { title: "update_by", dataIndex: "update_by", key: "update_by" },
    { title: "deanUserId", dataIndex: "deanUserId", key: "deanUserId" },
    { title: "courseId", dataIndex: "courseId", key: "courseId" },
    { title: "groupMaxCount", dataIndex: "groupMaxCount", key: "groupMaxCount" },
    { title: "stutentMaxCount", dataIndex: "stutentMaxCount", key: "stutentMaxCount" },
    { title: "licenseStartDate", dataIndex: "licenseStartDate", key: "licenseStartDate" },
    { title: "licenseFinishDate", dataIndex: "licenseFinishDate", key: "licenseFinishDate" },
    { title: "regionId", dataIndex: "regionId", key: "regionId" },
    { title: "tumanId", dataIndex: "tumanId", key: "tumanId" },
    { title: "maxFilialCount", dataIndex: "maxFilialCount", key: "maxFilialCount" },
    { title: "isDeleted", dataIndex: "isDeleted", key: "isDeleted" },
    { title: "createdBy", dataIndex: "createdBy", key: "createdBy" },
    { title: "updateBy", dataIndex: "updateBy", key: "updateBy" },

    {
      title: "Actions",
      key: "Actions",
      render: (fila) => (
        <>
          <Button type="primary">Редактировать</Button>
          {"  "}
          <Button type="primary" danger>Удальть</Button>
        </>
      ),
    },
  ];

  const UsersData = async () => {
    await axios.get('centers')
      .then((response) => {
        setData(response.data);
        isOpenedModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const response = async () => {
    delete user.id;
    await axios.post('centers', user)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const requestPut=async()=>{
    await axios.put("/"+user.Id, user)
    .then(response=>{
      var dataAuxiliar=data;
      dataAuxiliar.map(element=>{
        if(element.id===user.Id){
          element.name=user.name;
           // etc.
        }
      });
      setData(dataAuxiliar);
      openCloseModalEdit();
    }).catch(error=>{
      console.log(error);
    })
      }

      
  const peticionDelete=async()=>{
    await axios.delete("/"+user.Id)
    .then(response=>{
      setData(data.filter(element=>element.id!==user.Id));
      openCloseModalDelete();
    }).catch(error=>{
      console.log(error);
    })
      }

useEffect(()=>{
UsersData();
},[])
  return (
    <div className="App">
      <br />
      <br />
      <Button type="primary" onClick={isOpenedModal} className="botonPlus">
        Добавить пользователя +
      </Button>
      <br />
      <br />
      <Table columns={columns} dataSource={data} />

      <Modal
        open={modalInsertar}
        title="Пользователь"
        destroyOnClose={true}
        onCancel={isOpenedModal}
        centered
        footer={[
          <Button onClick={isOpenedModal}>Закрыть</Button>,
          <Button type="primary" onClick={response}>
            Отправить 
          </Button>,
        ]}
      >
        <Form {...layout}>
        <MyForm/>

        </Form>
      </Modal>
    </div>
  );
};

export default UsersTable;
