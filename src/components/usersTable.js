import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Input, Form } from "antd";
import axios from "axios";
import "../styles/table.css";

const { Item } = Form;
const baseUrl = "https://center.uzcodes.uz/api/centers";

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
  const [aritista, setArtista] = useState({
    id: "",
    aritista: "",
    pais: "",
    periodo: "",
  });

  const isOpenedModal = () => {
    setModalInsertar(!modalInsertar);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtista({ ...aritista, [name]: value });
    console.log(aritista);
  };

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "aritista", dataIndex: "aritista", key: "artistar" },
    {
      title: "Periodo de Actividad",
      dataIndex: "Periodo de Actividad",
      key: "Periodo de Actividad",
    },
    {
      title: "Actions",
      key: "Actions",
      render: (fila) => (
        <>
          <Button type="primary">Edit</Button>
          {"  "}
          <Button type="primary" danger>
            Delite
          </Button>
        </>
      ),
    },
  ];

  const petcionGet = async () => {
    await axios.get(baseUrl)
      .then((response) => {
        setData(response.data);
        isOpenedModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const petcionPost = async () => {
    delete aritista.id;
    await axios.post(baseUrl, aritista)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    petcionGet();
  }, []);

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
        visible={modalInsertar}
        title="Insertar Artista"
        destroyOnClose={true}
        onCancel={isOpenedModal}
        centered
        footer={[
          <Button onClick={isOpenedModal}>Cancela</Button>,
          <Button type="primary" onClick={petcionPost}>
            Insertar
          </Button>,
        ]}
      >
        <Form {...layout}>
          <Item label="Artista">
            <Input name="artista" onChange={handleChange}></Input>
          </Item>

          <Item label="Periodo de Ac">
            <Input name="periodo" onChange={handleChange}></Input>
          </Item>

          <Item label="Artista">
            <Input name="artista" onChange={handleChange}></Input>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UsersTable;
