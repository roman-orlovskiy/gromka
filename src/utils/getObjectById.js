const getObjectById = (list, id) => {
  const obj = list.find((item) => item.id === id);

  return obj || {};
};

export default getObjectById;
