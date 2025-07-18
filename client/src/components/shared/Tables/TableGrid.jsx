import React from "react";
import TableCard from "./TableCard";

function TableGrid({ tables, onSeatGuests, onFreeTable, openOrderDialog, roomNames, reqUserRole }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tables.map((table) => (
        <TableCard
          key={table.id}
          table={table}
          roomName={roomNames[table.roomId]}
          onSeatGuests={onSeatGuests}
          onFreeTable={onFreeTable}
          openOrderDialog={openOrderDialog}
          reqUserRole={reqUserRole} // 👈 FIXED
        />
      ))}
    </div>
  );
}

export default TableGrid;
