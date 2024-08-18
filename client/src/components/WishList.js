import React, { useEffect, useContext } from 'react'
import { Context } from './Context';

function WishList() {

    const { activityWishList, setActivityWishList } = useContext(Context);

    useEffect(() => {
        fetch('/added_activity_by_destination')
            .then((r) => {
                if(!r.ok) {
                    throw new Error('Network response was not ok');
                }
                return r.json();
            })
            .then((activityWishList) => {
                if (activityWishList.error) {
                    throw new Error(activityWishList.error)
                }
                setActivityWishList(activityWishList)
            })
            .catch((error) => {
                console.error('Error fetching Activity Wish List: ', error)
            })
    }, [setActivityWishList])

    if(!activityWishList) {
        return <h1>Loading...</h1>
    }

    console.log(activityWishList);

    return(
        <div>
            <h1>Travel Wish List App</h1>
        </div>
    )
}

export default WishList;