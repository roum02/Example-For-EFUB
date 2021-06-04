import React from "react";

function Line() {
  return (
    <div className="line">
    <select className="select">
      <option>최신순</option>
      <option>추천순</option>
      <option>난이도순</option>
      <option>조리시간순</option>
    </select>
    </div>
  );
}

export default Line;