import React from "react";
import TableRow from "./TableRow";

function ContentTable({ isLoading, tableData }) {
  return (
    <div className="table-container">
      {isLoading && "Loading...."}
      <table>
        <tr>
          <th style={{}}>Date</th>
          <th>Video</th>
          <th>Creator</th>
          <th>Platform</th>
          <th>Total Views</th>
          <th>Total Engagement</th>
          <th>Engagement rate</th>
          <th>Actions</th>
        </tr>

        {tableData.map(({ content, creator }) => (
          <TableRow key={content.id} content={content} creator={creator} />
        ))}
      </table>
    </div>
  );
}

export default ContentTable;
