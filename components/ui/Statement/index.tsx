"use client";

import React, { useState } from 'react';
import './Statement.scss';
import { ListItem } from '@/components/design-system/DSList/ds_list';
import { getNameOfMonth } from '@/shared/utils/DateUtils';
import DSList from '@/components/design-system/DSList';

type ReducedArray = { [key: string] : ListItem[] }

const Statement = () => {
  const [statementByMonth, setStatementByMonth] = useState<Map<string, ListItem[]>>(new Map([]))

  const listaDeExtrato = [
    { title: "Transferência", value: 500, date: new Date(2024, 10, 26) },
    { title: "Transferência", value: 500, date: new Date(2024, 10, 10) },
    { title: "Depósito", value: 500, date: new Date(2024, 9, 20) },
    { title: "Transferência", value: 500, date: new Date(2024, 9, 5) },
    { title: "Depósito", value: 500, date: new Date(2024, 9, 3) },
    { title: "Depósito", value: 500, date: new Date(2024, 8, 30) },
    { title: "Transferência", value: 500, date: new Date(2024, 8, 15) }
  ]

  const groupByMonths = (): void => {
    const accumulator: ReducedArray = {}

    listaDeExtrato.forEach((statement: ListItem) => {
      const month = getNameOfMonth(statement.date.getMonth());
      if (!accumulator[month]) accumulator[month] = []
      accumulator[month].push(statement)
    })
    const newMap = new Map<string, ListItem[]>(Object.entries(accumulator));

    setStatementByMonth(newMap)
  }

  React.useEffect(() => {
    groupByMonths()
  }, [])

  return (
    <>
      <section className="statement-container">
        <div className="internal-wrapper">
          <div className="title-container">
            <h1>Extrato</h1>
          </div>

          { Array.from(statementByMonth.entries()).map(([month, statements]) => (
            <div key={month} className="lists">
              <h2>{ month }</h2>
              <ul className="statement-list">
                <DSList
                  items={statements}
                ></DSList>
              </ul>
            </div>
          )) }
        </div>
      </section>
    </>
  )
}

export default Statement;