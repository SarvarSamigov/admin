import React from "react";
import { Form, Input, DatePicker, Select} from "antd";

const { Option } = Select;

const MyForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item label="ID" name="id">
        <Input />
      </Form.Item>

      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item label="Dean User ID" name="dean_user_id">
        <Input />
      </Form.Item>

      <Form.Item label="Course ID" name="course_id">
        <Input />
      </Form.Item>

      <Form.Item label="Group Max Count" name="group_max_count">
        <Input />
      </Form.Item>

      <Form.Item label="Student Max Count" name="student_max_count">
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input />
      </Form.Item>

      <Form.Item label="License Start Date" name="license_start_date">
        <DatePicker showTime />
      </Form.Item>

      <Form.Item label="License Finish Date" name="license_finish_date">
        <DatePicker showTime />
      </Form.Item>

      <Form.Item label="Region ID" name="region_id">
        <Input />
      </Form.Item>

      <Form.Item label="Tuman ID" name="tuman_id">
        <Input />
      </Form.Item>

      <Form.Item label="Max Filial Count" name="max_filial_count">
        <Input />
      </Form.Item>

      <Form.Item label="Image" name="image">
        <Input />
      </Form.Item>

      <Form.Item label="Status" name="status">
        <Input />
      </Form.Item>

      <Form.Item label="Created By" name="created_by">
        <Input />
      </Form.Item>

      <Form.Item label="Update By" name="update_by">
        <Input />
      </Form.Item>

      <Form.Item label="Dean User ID" name="deanUserId">
        <Input />
      </Form.Item>

      <Form.Item label="Course ID" name="courseId">
        <Input />
      </Form.Item>

      <Form.Item label="Group Max Count" name="groupMaxCount">
        <Input />
      </Form.Item>

      <Form.Item label="Student Max Count" name="studentMaxCount">
        <Input />
      </Form.Item>

      <Form.Item label="License Start Date" name="licenseStartDate">
        <DatePicker showTime />
      </Form.Item>

      <Form.Item label="License Finish Date" name="licenseFinishDate">
        <DatePicker showTime />
      </Form.Item>

      <Form.Item label="Region ID" name="regionId">
        <Input />
      </Form.Item>

      <Form.Item label="Tuman ID" name="tumanId">
        <Input />
      </Form.Item>

      <Form.Item label="Max Filial Count" name="maxFilialCount">
        <Input />
      </Form.Item>

      <Form.Item label="Is Deleted" name="isDeleted">
        <Select>
          <Option value={true}>True</Option>
          <Option value={false}>False</Option>
        </Select>
      </Form.Item>

      <Form.Item label="Created By" name="createdBy">
        <Input />
      </Form.Item>

      <Form.Item label="Update By" name="updateBy">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default MyForm;