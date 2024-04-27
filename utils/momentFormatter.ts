import moment from "moment/moment";

export const formatDeadline = (deadline: string | undefined) => {
  return moment(deadline).format("DD MMMM, YYYY");
};
