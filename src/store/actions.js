export const EXAMPLE = "EXAMPLE";

export const example = (user) => {
  return {
    type: EXAMPLE,
    payload: user,
  };
};
