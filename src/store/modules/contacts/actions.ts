export const ChooseChannel = (id: number) => {
  return {
    type: '@customers/CHOOSE_CHANNEL',
    payload: { id },
  };
};
