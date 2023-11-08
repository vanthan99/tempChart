'use client'

import ItemChart, { IItemChart } from "./ItemChart";
import * as React from 'react';
export default function Home() {
  const _estpData: Array<IItemChart> = [
    {
      leftPercent: 70,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 40,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 35,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  const _estjData: Array<IItemChart> = [
    {
      leftPercent: 70,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 40,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 60,
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
      leftPercent: 70,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 60,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 75,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ENTJ: Array<IItemChart> = [
    {
      leftPercent: 20,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 30,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 80,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const INTP: Array<IItemChart> = [
    {
      leftPercent: 20,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 30,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 80,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ISTP: Array<IItemChart> = [
    {
      leftPercent: 20,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 30,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 80,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ESFP: Array<IItemChart> = [
    {
      leftPercent: 20,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 30,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 80,
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
      <hr className="hr mb-3" />
    </>
  )
}