import React, {FC} from "react";
import styles from './Table.module.scss'
import {TableHead} from "./tableHead/TableHead";
import {TableBody} from "./tableBody/TableBody";
import {SkeletonTable} from "shared";
import {ModelReportDataType} from "../model/types";

export type ColumnType = {
    label: string,
    accessor: string
}

type PropsType = {
    data: ModelReportDataType[]
    isLoading: boolean
    columns: ColumnType[]
    onClickSymbol: (symbol: string) => void
}

export const Table: FC<PropsType> = ({data, isLoading, columns, onClickSymbol}) => {
    const sortData = (label: string) => {
        console.log(label)
    }

    return <table className={styles.table}>
        <TableHead columns={columns} sortData={sortData}/>
        {isLoading
            ? <SkeletonTable columnSkeleton={8} rowSkeleton={10}/>
            : <TableBody onClickSymbol={onClickSymbol} columns={columns} data={data}/>
        }
    </table>
}