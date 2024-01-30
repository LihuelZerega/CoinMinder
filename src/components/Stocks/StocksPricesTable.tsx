import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";

interface QuoteData {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
}

export interface StockData {
  symbol: string;
  quoteData: QuoteData;
}

interface StocksPricesTableProps {
  stockData: StockData[];
}

export default function StocksPricesTable({
  stockData,
}: StocksPricesTableProps) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 30;

  const pages = Math.ceil(stockData.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return stockData.slice(start, end);
  }, [page, stockData]);

  return (
    <Table
      className="border rounded-md"
      shadow="none"
      radius="md"
      layout="fixed"
      aria-label="Stock Prices Table"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="symbol">SYMBOL</TableColumn>
        <TableColumn key="c">Current Price</TableColumn>
        <TableColumn key="d">Change</TableColumn>
        <TableColumn key="h">High Price</TableColumn>
        <TableColumn key="l">Low Price</TableColumn>
        <TableColumn key="o">Open Price</TableColumn>
        <TableColumn key="pc">Previous Close Price</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.symbol}>
            <TableCell>{item.symbol}</TableCell>
            <TableCell>${item.quoteData.c.toFixed(2)}</TableCell>
            <TableCell
              className={
                item.quoteData.dp > 0 ? "text-green-500" : "text-red-500"
              }
            >
              {item.quoteData.dp > 0
                ? `+${item.quoteData.dp.toFixed(2)}%`
                : `${item.quoteData.dp.toFixed(2)}%`}
            </TableCell>
            <TableCell>${item.quoteData.h.toFixed(2)}</TableCell>
            <TableCell>${item.quoteData.l.toFixed(2)}</TableCell>
            <TableCell>${item.quoteData.o.toFixed(2)}</TableCell>
            <TableCell>${item.quoteData.pc.toFixed(2)}</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}