import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";

interface QuoteData {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
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

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return stockData.slice(start, end);
  }, [page, stockData]);

  return (
    <>
      <div className="block sm:hidden">
        <Table shadow="none" layout="fixed" aria-label="Stock Prices Table">
          <TableHeader>
            <TableColumn key="symbol">SYMBOL</TableColumn>
            <TableColumn key="c">Current Price</TableColumn>
            <TableColumn key="d">Change</TableColumn>
            <TableColumn className="hidden sm:block" key="h">
              High Price
            </TableColumn>
            <TableColumn className="hidden sm:block" key="l">
              Low Price
            </TableColumn>
            <TableColumn className="hidden sm:block" key="o">
              Open Price
            </TableColumn>
            <TableColumn className="hidden sm:block" key="pc">
              Previous Close Price
            </TableColumn>
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
                    : item.quoteData.dp != null
                    ? `${item.quoteData.dp.toFixed(2)}%`
                    : "N/A"}
                </TableCell>
                <TableCell className="hidden sm:block">
                  ${item.quoteData.h.toFixed(2)}
                </TableCell>
                <TableCell className="hidden sm:block">
                  ${item.quoteData.l.toFixed(2)}
                </TableCell>
                <TableCell className="hidden sm:block">
                  ${item.quoteData.o.toFixed(2)}
                </TableCell>
                <TableCell className="hidden sm:block">
                  ${item.quoteData.pc.toFixed(2)}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="hidden sm:block lg:hidden">
        <Table shadow="none" layout="fixed" aria-label="Stock Prices Table">
          <TableHeader>
            <TableColumn key="symbol">SYMBOL</TableColumn>
            <TableColumn key="c">Current Price</TableColumn>
            <TableColumn key="d">Change</TableColumn>
            <TableColumn key="h">High Price</TableColumn>
            <TableColumn key="l">Low Price</TableColumn>
            <TableColumn key="o">Open Price</TableColumn>
            <TableColumn className="hidden 2xl:block" key="pc">
              Previous Close Price
            </TableColumn>
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
                    : item.quoteData.dp != null
                    ? `${item.quoteData.dp.toFixed(2)}%`
                    : "N/A"}
                </TableCell>
                <TableCell>${item.quoteData.h.toFixed(2)}</TableCell>
                <TableCell>${item.quoteData.l.toFixed(2)}</TableCell>
                <TableCell>${item.quoteData.o.toFixed(2)}</TableCell>
                <TableCell className="hidden 2xl:block">
                  ${item.quoteData.pc.toFixed(2)}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="hidden xl:block">
        <Table shadow="none" layout="fixed" aria-label="Stock Prices Table">
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
                    : item.quoteData.dp != null
                    ? `${item.quoteData.dp.toFixed(2)}%`
                    : "N/A"}
                </TableCell>
                <TableCell>${item.quoteData.h.toFixed(2)}</TableCell>
                <TableCell>${item.quoteData.l.toFixed(2)}</TableCell>
                <TableCell>${item.quoteData.o.toFixed(2)}</TableCell>
                <TableCell>${item.quoteData.pc.toFixed(2)}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-row items-center justify-center py-4 border-b mb-6">
        <Tooltip content="More stocks soon...">
          <button className="rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]">
            Load More
          </button>
        </Tooltip>
      </div>
    </>
  );
}
