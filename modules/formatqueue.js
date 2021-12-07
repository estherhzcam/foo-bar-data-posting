import { postData } from "./postdata.js";

export function formatQueue(data) {
  class Order {
    constructor(length, time) {
      this.length = length;
      this.time = time;
    }
  }
  //if quueue, prepare the data
  const queue = data.queue;
  const queueLenght = queue.length;
  let queueTime;
  if (queue.length > 0) {
    queueTime = queue[0].startTime;
  } else {
    const now = new Date();
    queueTime = now.getMilliseconds();
  }
  const queueData = new Order(queueLenght, queueTime);
  console.log("queue data", queueData);
  postData(queueData, "https://keaprojects21-50cf.restdb.io/rest/foo-bar-queue");
}
