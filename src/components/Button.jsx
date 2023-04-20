import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className="bg-cyan-600 w-fit font-semibold text-white md:mx-0 mx-auto rounded-full py-3 px-6 flex items-center gap-2 mt-10">
             {props.children}
            </button>
    </div>
  )
}

export default Button
