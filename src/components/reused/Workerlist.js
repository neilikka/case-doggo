import React from "react";

const workerlist = (workers) =>
  workers.map((worker) => (
    <div key={worker.id} class="row d-flex align-items-center">
      <div class="col-auto">
        <img src={worker.image} alt="Avatar" class="worker" />
      </div>
      <div class="col-auto worker-text">
        <p>{worker.text}</p>
      </div>
      <div class="col-auto">
        <a href={worker.url} class="btn btn-secondary">
          Learn more
        </a>{" "}
      </div>
    </div>
  ));

const Workerlist = ({ workers }) => {
  return <div>{workerlist(workers)}</div>;
};

export default Workerlist;
