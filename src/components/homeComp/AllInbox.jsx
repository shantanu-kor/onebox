import React, { useEffect } from 'react'

const AllInbox = () => {
  useEffect(() => {
    const func = async () => {
      const response = await fetch('https://hiring.reachinbox.xyz/api/v1/onebox/list', {
        headers: {
          "Authorization": localStorage.getItem('token'),
        }
      })
      const data = await response.json();
      console.log(data);
    }
    func();
  }, [])
  return (
    <div>AllInbox</div>
  )
}

export default AllInbox;