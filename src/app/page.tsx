'use client'

import ItemChart, { IItemChart } from "./ItemChart";
import * as React from 'react';
export default function Home() {
  const _estpData: Array<IItemChart> = [
    {
      leftPercent: 62,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 73,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 69,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 31,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  const _estjData: Array<IItemChart> = [
    {
      leftPercent: 77,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 67,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 61,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 55,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  const INTJ: Array<IItemChart> = [
    {
      leftPercent: 25,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 41,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 69,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 79,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ENTJ: Array<IItemChart> = [
    {
      leftPercent: 76,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 23,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 72,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 61,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const INTP: Array<IItemChart> = [
    {
      leftPercent: 27,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 32,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 78,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 39,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ISTP: Array<IItemChart> = [
    {
      leftPercent: 40,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 67,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 79,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 27,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ESFP: Array<IItemChart> = [
    {
      leftPercent: 63,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 73,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 29,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 21,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  const INFJ: Array<IItemChart> = [
    {
      leftPercent: 31,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 42,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 25,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 69,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  function generateRandomKey() {
    return Math.random().toString(36).substring(7);
  }

  const renderItem = (estpData: Array<IItemChart>) => {
    if (estpData.length > 0) {
      return estpData.map((item) => {
        return <div key={generateRandomKey()} className="row">
          <div className="col-12 d-flex justify-content-center">
            <ItemChart {...item} />
          </div>
        </div>
      })
    }
  }
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">ESTP</small>
          </div>
        </div>
        {renderItem(_estpData)}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">ESTJ</small>
          </div>
        </div>
        {renderItem(_estjData)}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">ESTJ</small>
          </div>
        </div>
        {renderItem(_estjData)}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">INTJ</small>
          </div>
        </div>
        {renderItem(INTJ)}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">ENTJ</small>
          </div>
        </div>
        {renderItem(ENTJ)}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">INTP</small>
          </div>
        </div>
        {renderItem(INTP)}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">ISTP</small>
          </div>
        </div>
        {renderItem(ISTP)}
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">ESFP</small>
          </div>
        </div>
        {renderItem(ESFP)}
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <small className="text-muted">INFJ</small>
          </div>
        </div>
        {renderItem(INFJ)}
      </div>
      <hr className="hr mb-3" />
    </>
  )
}