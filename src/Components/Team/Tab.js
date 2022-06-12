import React from 'react'

function Tab() {
    return (
        <>

            <div className=" flex justify-center text-sm font-medium text-center text-gray-500  border-gray-200 p-3 m-0">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <a href="/" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Faculty</a>
                    </li>

                    <li className="mr-2">
                        <a href="/" className="inline-block p-4 text-orange-600 rounded-t-lg border-b-2 border-orange-600 active dark:text-orange-500 dark:border-orange-500" aria-current="page">2021-22</a>
                    </li>
                    <li className="mr-2">
                        <a href="/" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">2020-21</a>
                    </li>
                    <li className="mr-2">
                        <a href="/" className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">2017-20</a>
                    </li>
                    
                </ul>
            </div>

        </>
    )
}

export default Tab