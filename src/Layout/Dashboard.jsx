import { NavLink, Outlet } from "react-router-dom";
import {
  FaWallet,
  FaShoppingCart,
  FaHome,
  FaCalendarAlt,
  FaUtensils,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className='drawer lg:drawer-open '>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content '>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'
        >
          Open drawer
        </label>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className='drawer-side '>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-[#D1A054]'>
          {isAdmin ? (
            <>
              <li>
                <NavLink to='/dashboard/adminhome'>
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/addItem'>
                  <FaUtensils />
                  Add An Item
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/manageitems'>
                  <FaWallet />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to='/'>
                  <FaBook />
                  Manage Bookings(not implemented)
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/allusers'>
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/dashboard/userhome'>
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/'>
                  <FaCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to='/'>
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to='/dashboard/mycart'>
                  <FaShoppingCart />
                  My Cart
                  <span className='badge badge-secondary'>
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className='divider'></div>

          <li>
            <NavLink to='/'>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu'>
              <FaHome />
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/order/salad'>
              <FaHome />
              Order Food
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
