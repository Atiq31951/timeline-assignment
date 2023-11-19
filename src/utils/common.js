const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

export const formatDate = (timeInMS) => {
  const LocalDate = new Date(timeInMS).toLocaleDateString().split("/");
  return { day: LocalDate[0], month: months[Number(LocalDate[1])], year: LocalDate[2] };
};
