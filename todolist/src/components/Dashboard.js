import React from "react";

function Dashboard(props) {
  const { amount, setPage, page } = props;
  let pageAmount = Math.floor(amount / 10);
  return (
    <>
      <div className="dashboard">
        <div className="left">
          <h2>{new Date().toDateString()}</h2>
          <nav className="paging">
            <button onClick={()=>setPage(prv=>prv-1)} disabled={page===1}>prev</button>
            <input type="text" value={page} onChange={(e)=>setPage(+e.target.value)} />
            <button onClick={()=>setPage(prv=>prv+1)} disabled={page===pageAmount}>next</button>
          </nav>
        </div>
        <p>{page*10-9}-{page*10} of {amount>0 ? amount: ''} Tasks</p>
      </div>
    </>
  );
}

export default Dashboard;
