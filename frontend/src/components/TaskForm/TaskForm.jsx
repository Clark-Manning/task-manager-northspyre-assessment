import React from 'react';

const TaskForm = ({
  onSubmit,
  inputTitle,
  inputDesc,
  handleInputTitle,
  handleInputDesc,
}) => {
  return (
    <form className="col-12 p-2" onSubmit={onSubmit}>
      <label htmlFor="title" className="my-2">
        Enter Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        className="w-100 my-1 p-2"
        onChange={handleInputTitle}
        value={inputTitle}
      />
      <label className="my-2" htmlFor="description">
        Enter Description
      </label>
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="w-100 my-1 p-2"
        onChange={handleInputDesc}
        value={inputDesc}
      />
      <button type="submit" className="btn btn-primary my-2">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
