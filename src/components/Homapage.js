import React from  'react';
import Timeline from './Timeline';
import NewPost from './NewPost'

const Homepage = function(){
    let loggendIn = true
    return(

        <main>
            {loggendIn&&<NewPost></NewPost>}
            <Timeline></Timeline>
        </main>
    )
}

export default Homepage