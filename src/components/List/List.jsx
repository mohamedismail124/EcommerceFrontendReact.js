import React from 'react'
import "./List.scss";
import Card from '../Card/Card';

const List = () => {
    const data = [
        {
        id:1,
        img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title:"Long Sleeve Graphic T-shirt",
        isNew:true ,
        oldPrice:19,
        Price:12,
        },
        {
        id:2,
        img:"https://i.pinimg.com/originals/74/fc/78/74fc78a74c2bb6299b77b90b20ca463b.jpg",
        title:"Coat",
        isNew:true ,
        oldPrice:19,
        Price:12,
        },
        {
        id:3,
        img:"https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title:"Skirt",
        oldPrice:19,
        Price:12,
        },
        {
        id:4,
        img:"https://i.pinimg.com/originals/27/fd/2f/27fd2f1b9de259708fcaa3f13c4e43f7.jpg",
        title:"Hat",
        oldPrice:19,
        Price:12,
        }
        ];
  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id}   /> 
        ))}
    </div>
  )
}

export default List