import React from 'react'
import './Skeleton.css'
const Skeleton: React.FC = () => {
    return (
        <div className='SkeletonContainer'>
            <div className='SkeletonWrap'>
                <div className="card-skeleton">
                    <div className='SkeletonImg'></div>
                    <div className='SkeletonDetails'></div>
                    <div className='skeletonBttn'></div>
                </div>
                <div className="card-skeleton">
                    <div className='SkeletonImg'></div>
                    <div className='SkeletonDetails'></div>
                    <div className='skeletonBttn'></div>
                </div>
                <div className="card-skeleton">
                    <div className='SkeletonImg'></div>
                    <div className='SkeletonDetails'></div>
                    <div className='skeletonBttn'></div>
                </div>
            </div>
            <div className='SkeletonWrap'>
                <div className="card-skeleton">
                    <div className='SkeletonImg'></div>
                    <div className='SkeletonDetails'></div>
                    <div className='skeletonBttn'></div>
                </div>
                <div className="card-skeleton">
                    <div className='SkeletonImg'></div>
                    <div className='SkeletonDetails'></div>
                    <div className='skeletonBttn'></div>
                </div>
                <div className="card-skeleton">
                    <div className='SkeletonImg'></div>
                    <div className='SkeletonDetails'></div>
                    <div className='skeletonBttn'></div>
                </div>
            </div>
        </div>
    )
}
export default Skeleton