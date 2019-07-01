export const getUid = () => (
  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
);

export const addUid = obj => ({ ...obj, uid: getUid() });

export const getNewEntity = obj => ({
  uid: getUid(),
  liked: false,
  ...obj,
});
