import '@tanstack/react-table'

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    align: "left" | "center" | "right" | "justify" | "char" | undefined;
  }
}
