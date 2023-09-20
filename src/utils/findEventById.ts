const findEventById = (events: any[], id: string) => {
  const foundEvent = events.find((event) => event.id === id);
  return foundEvent || null;
};
