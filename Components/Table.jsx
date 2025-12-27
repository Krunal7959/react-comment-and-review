import React from "react";

export default function Table() {
  return (
    <div>
      <table >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Aryan</td>
            <td>Ahmedabad</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sunil</td>
            <td>Ahmedabad</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}