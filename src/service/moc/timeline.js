import { addNewItemToDb, timelineDatas } from "./data/timeline";
import { LIMIT } from "../../config/timeline";

export const getTimelineLists = (requestObject) => {
  return new Promise((resolve, reject) => {
    const { offset = 1, type: tlType } = requestObject;

    setTimeout(() => {
      let data = timelineDatas.sort((tl1, tl2) => {
        return tl2.date - tl1.date;
      });

      if (tlType) {
        data = data.filter(({ type }) => type === tlType);
      }

      resolve({
        data: data.slice((offset - 1) * LIMIT, offset * LIMIT - 1),
        error: null,
      });
    }, 3000);
  });
};

export const addNewTimlineItem = (requestObject) => {
  return new Promise((resolve, reject) => {
    addNewItemToDb(requestObject.data);

    setTimeout(() => {
      resolve({
        error: null,
        success: true,
      });
    }, 3000);
  });
};
