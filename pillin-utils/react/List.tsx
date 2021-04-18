//react/StoreList.tsx
import React from 'react'

interface StoreListProps {}

const StoreList: StorefrontFunctionComponent<StoreListProps> = ({}) => 
{
   return (
     <div>
       <h1> Testy test</h1>
     </div>
   )
}

StoreList.schema = {
  title: 'editor.storelist.title',
  description: 'editor.storelist.description',
  type: 'object',
  properties: {},
}

export default StoreList
