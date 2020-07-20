export const ChooseCustumer = (id: number) => {
  return {
    type: '@customers/CHOOSE_CUSTOMER',
    payload: { id },
  };
};
