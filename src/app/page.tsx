'use client'

import ItemChart, { IItemChart } from "./ItemChart";
import * as React from 'react';
export default function Home() {
  const _estpData: Array<IItemChart> = [
    {
      leftPercent: 60.55,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70.67,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 65.12,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 30.23,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  const _estjData: Array<IItemChart> = [
    {
      leftPercent: 70.43,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 68.12,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 69.21,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 57.19,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  const INTJ: Array<IItemChart> = [
    {
      leftPercent: 25.79,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 40.04,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 69.43,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 77.53,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ENTJ: Array<IItemChart> = [
    {
      leftPercent: 79.55,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 23.32,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 77.34,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 60.87,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const INTP: Array<IItemChart> = [
    {
      leftPercent: 27.12,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 30.57,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 78.32,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 40.69,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ISTP: Array<IItemChart> = [
    {
      leftPercent: 40.82,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 67.12,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 79.21,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 27.56,
      leftText: "judgment",
      rightText: "perception"
    },
  ]
  const ESFP: Array<IItemChart> = [
    {
      leftPercent: 60.12,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 70.09,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 30.25,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 20.8,
      leftText: "judgment",
      rightText: "perception"
    },
  ]

  const INFJ: Array<IItemChart> = [
    {
      leftPercent: 30.78,
      leftText: "extravertion",
      rightText: "introvertion"
    },
    {
      leftPercent: 42.53,
      leftText: "sensing",
      rightText: "intuition"
    },
    {
      leftPercent: 25.48,
      leftText: "thinking",
      rightText: "feeling"
    },
    {
      leftPercent: 69.12,
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