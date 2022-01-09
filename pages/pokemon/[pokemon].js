import React from 'react'
import {useRouter} from 'next/router'
import ContentContainer from '../../components/contentContainer'
import PageHeading from '../../components/pageHeading'

export default function Pokemon({pokemon}) {
     const router = useRouter();
     
     return (
       <div className='container'>
           <ContentContainer>
                <PageHeading heading={router.query.pokemon} />
           </ContentContainer>
       </div>
    )
}
