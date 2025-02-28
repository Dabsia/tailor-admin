import React from "react";

const Orders = () => {
  return (
    <div>
      <h1 className="text-[24px] mb-3 font-bold">All Orders</h1>
      <table className="w-full h-[80vh] border">
        <thead>
          <tr>
            <th>Order id</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Deposit</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">#001</td>
            <td className="text-center">John Doe</td>
            <td className="text-center">Native Wear, Suit</td>
            <td className="text-center">₦30,000</td>
            <td className="text-center">₦70,000</td>
            <td className="text-yellow-500 text-center">pending</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#002</td>
            <td className="text-center">Jane Smith</td>
            <td className="text-center">Wedding Gown</td>
            <td className="text-center">₦100,000</td>
            <td className="text-center">₦200,000</td>

            <td className="text-green-500 text-center">completed</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#003</td>
            <td className="text-center">Michael Bright</td>
            <td className="text-center">Suit</td>
            <td className="text-center">₦40,000</td>
            <td className="text-center">₦80,000</td>
            <td className="text-yellow-500 text-center">pending</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#004</td>
            <td className="text-center">Chinasa Obi</td>
            <td className="text-center">Ankara Gown</td>
            <td className="text-center">₦25,000</td>
            <td className="text-center">₦50,000</td>
            <td className="text-green-500 text-center">completed</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#005</td>
            <td className="text-center">Emma Grace</td>
            <td className="text-center">Kaftan</td>
            <td className="text-center">₦20,000</td>
            <td className="text-center">₦40,000</td>
            <td className="text-yellow-500 text-center">pending</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#006</td>
            <td className="text-center">Uche Kingsley</td>
            <td className="text-center">Shirt & Trouser</td>
            <td className="text-center">₦15,000</td>
            <td className="text-center">₦30,000</td>
            <td className="text-green-500 text-center">completed</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#007</td>
            <td className="text-center">Grace Okoro</td>
            <td className="text-center">Skirt & Blouse</td>
            <td className="text-center">₦30,000</td>
            <td className="text-center">₦60,000</td>
            <td className="text-yellow-500 text-center">pending</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#008</td>
            <td className="text-center">Felix Johnson</td>
            <td className="text-center">Agbada</td>
            <td className="text-center">₦50,000</td>
            <td className="text-center">₦100,000</td>
            <td className="text-green-500 text-center">completed</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#009</td>
            <td className="text-center">Mercy Paul</td>
            <td className="text-center">Jumpsuit</td>
            <td className="text-center">₦20,000</td>
            <td className="text-center">₦40,000</td>
            <td className="text-yellow-500 text-center">pending</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center">#010</td>
            <td className="text-center">David Akpan</td>
            <td className="text-center">Three-Piece Suit</td>
            <td className="text-center">₦60,000</td>
            <td className="text-center">₦120,000</td>
            <td className="text-green-500 text-center">completed</td>
            <td className="">
              <div className=" flex justify-center ">
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
