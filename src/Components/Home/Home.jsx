import React from 'react'
import style from './Home.module.css'
import pizza1 from '../../Assets/Images/pizza1.png'
import pizza2 from '../../Assets/Images/pizza2.png'
export default function Home() {
    let menu = [
        {pizzaImage: pizza1, pizzaName:'Focaccia', description:'Lorem ipsum dolor sit amet consectetur', count: '10'},
        {pizzaImage: pizza2, pizzaName:'Focaccia', description:'Lorem ipsum dolor sit amet consectetur', count: '6'},
        {pizzaImage: pizza1, pizzaName:'Focaccia', description:'Lorem ipsum dolor sit amet consectetur', count: '12'},
        {pizzaImage: pizza2, pizzaName:'Focaccia', description:'Lorem ipsum dolor sit amet consectetur', count: '6'},
        {pizzaImage: pizza1, pizzaName:'Focaccia', description:'Lorem ipsum dolor sit amet consectetur', count: null},
        {pizzaImage: pizza2, pizzaName:'Focaccia', description:'Lorem ipsum dolor sit amet consectetur', count: '3'},
    ]
  return <>
  <div className="container p-3 d-flex justify-content-center align-items-center">
    <div className="row g-3 text-center w-75">
        <div className="col-md-12">
            <div className='position-relative d-inline-block'>
            <h1 className={`${style.header} text-warning`}>FAST REACT PIZZA</h1>
            </div>
            </div>
        <div className="col-md-12">
            <div className='position-relative d-inline-block my-4'>
            <h2 className={`${style.sub_heading} fw-bold h5 m-0`}>OUR MENU</h2></div>
            </div>
        <div className="col-md-12">
            <div className='d-flex flex-column justify-content-center align-items-center mb-3'>
                <p className='m-0 h6 text-secondary'>best pizza restaurant ever !!</p>
                <p className='mb-0 h6 text-secondary'>Cairo ,Egypt</p>
            </div>
        </div>
        {menu.map((el,indx)=>
            <div key={indx} className="col-md-6">
                {el.count?<div className='d-flex justify-content-start align-items-center'>
                    <div>
                    <img width={100} src={el.pizzaImage} alt="pizza"/>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-start ps-3'>
                        <h5>{el.pizzaName}</h5>
                        <p className='m-0'>{el.description}</p>
                        <p className='m-0'>{el.count}</p>
                    </div>
                </div>
                :
                <div className='d-flex justify-content-start align-items-center'>
                    <div className='position-relative'>
                    <img width={100} src={el.pizzaImage} alt="pizza"/>
                    <div className={style.dark}>
                    </div>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-start ps-3'>
                        <h5 className='text-secondary'>{el.pizzaName}</h5>
                        <p className='m-0 text-muted'>{el.description}</p>
                        <p className='m-0 text-secondary'>Sold out</p>
                    </div>
                </div>}
            </div>
        )}
        <div className="col-md-12">
            <div className='my-3'>
            <p className='m-0'>We 're Open until 22.00</p>
            <button className='btn btn-warning mt-3 rounded-0 fw-medium px-4'>Order</button>
            </div>
            
        </div>
    </div>
  </div>
  <div className={style.footer}></div>
  </>
}
